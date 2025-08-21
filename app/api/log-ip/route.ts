import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || realIp || request.ip || 'unknown';
  
  console.log('User IP Address:', ip);
  console.log('User Agent:', request.headers.get('user-agent'));
  console.log('Timestamp:', new Date().toISOString());
  
  return NextResponse.json({ 
    success: true, 
    ip: ip,
    timestamp: new Date().toISOString()
  });
}