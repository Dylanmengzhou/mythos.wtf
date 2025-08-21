import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || realIp || 'unknown';
  
  let locationData = null;
  let physicalAddress = null;
  
  try {
    // Get location information from IP
    if (ip !== 'unknown' && ip !== '127.0.0.1' && ip !== '::1') {
      const locationResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city,zip,lat,lon,timezone,isp,org,as,query`);
      locationData = await locationResponse.json();
      
      // Get physical address from coordinates if available
      if (locationData && locationData.status === 'success' && locationData.lat && locationData.lon) {
        try {
          const addressResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${locationData.lat}&lon=${locationData.lon}&addressdetails=1`, {
            headers: {
              'User-Agent': 'MyApp/1.0'
            }
          });
          const addressData = await addressResponse.json();
          
          if (addressData && addressData.display_name) {
            physicalAddress = {
              full_address: addressData.display_name,
              house_number: addressData.address?.house_number,
              road: addressData.address?.road,
              suburb: addressData.address?.suburb,
              city: addressData.address?.city,
              state: addressData.address?.state,
              postcode: addressData.address?.postcode,
              country: addressData.address?.country
            };
          }
        } catch (addressError) {
          console.error('Error fetching physical address:', addressError);
        }
      }
    }
  } catch (error) {
    console.error('Error fetching location data:', error);
  }
  
  const logData = {
    ip: ip,
    userAgent: request.headers.get('user-agent'),
    timestamp: new Date().toISOString(),
    referer: request.headers.get('referer'),
    location: locationData,
    physicalAddress: physicalAddress
  };
  
  // Enhanced logging
  console.log('=== VISITOR ACCESS LOG ===');
  console.log('IP Address:', ip);
  console.log('User Agent:', request.headers.get('user-agent'));
  console.log('Timestamp:', new Date().toISOString());
  console.log('Referer:', request.headers.get('referer'));
  
  if (locationData && locationData.status === 'success') {
    console.log('=== LOCATION INFORMATION ===');
    console.log('Country:', locationData.country);
    console.log('Region:', locationData.regionName);
    console.log('City:', locationData.city);
    console.log('ZIP Code:', locationData.zip);
    console.log('Coordinates:', `${locationData.lat}, ${locationData.lon}`);
    console.log('Timezone:', locationData.timezone);
    console.log('ISP:', locationData.isp);
    console.log('Organization:', locationData.org);
    console.log('AS:', locationData.as);
  }
  
  if (physicalAddress) {
    console.log('=== PHYSICAL ADDRESS ===');
    console.log('Complete Address:', physicalAddress.full_address);
    if (physicalAddress.house_number && physicalAddress.road) {
      console.log('Street Address:', `${physicalAddress.house_number} ${physicalAddress.road}`);
    }
    console.log('Suburb/District:', physicalAddress.suburb);
    console.log('City:', physicalAddress.city);
    console.log('State/Province:', physicalAddress.state);
    console.log('Postal Code:', physicalAddress.postcode);
    console.log('Country:', physicalAddress.country);
  }
  
  console.log('=== END LOG ===');
  
  return NextResponse.json({ 
    success: true, 
    data: logData
  });
}