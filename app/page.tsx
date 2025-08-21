
'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('/api/log-ip')
      .then(response => response.json())
      .then(data => {
        console.log('IP logged:', data);
      })
      .catch(error => {
        console.error('Error logging IP:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
          <span className="text-white text-xl font-bold">MYTHOS</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#tokenomics" className="text-gray-300 hover:text-white transition-colors">Tokenomics</a>
          <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</a>
          <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-colors">
          Connect Wallet
        </button>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-20 px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
          MYTHOS
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          The next generation of decentralized gaming and NFT ecosystem
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg hover:from-purple-600 hover:to-blue-600 transition-colors">
            Buy MYTHOS
          </button>
          <button className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full text-lg hover:bg-purple-500 hover:text-white transition-colors">
            View Whitepaper
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 py-12 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">$2.4M</div>
          <div className="text-gray-400">Market Cap</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">15K+</div>
          <div className="text-gray-400">Holders</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">95%</div>
          <div className="text-gray-400">Liquidity Locked</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">24/7</div>
          <div className="text-gray-400">Trading</div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Why Choose MYTHOS?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Secure & Audited</h3>
            <p className="text-gray-400">Fully audited smart contracts with multi-signature security protocols</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Community Driven</h3>
            <p className="text-gray-400">Governance token with voting rights for all major decisions</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Gaming Ecosystem</h3>
            <p className="text-gray-400">Integration with leading gaming platforms and NFT marketplaces</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Telegram</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
        </div>
        <p className="text-gray-500">© 2024 MYTHOS. All rights reserved.</p>
      </footer>
    </div>
  );
}
