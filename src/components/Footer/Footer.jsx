import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* ABOUT */}
        <div>
          <h6 className="text-sm font-semibold text-gray-400 uppercase mb-4">About</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-100">About Us</a></li>
            <li><a href="#" className="hover:text-gray-100">Fee Rate</a></li>
            <li><a href="#" className="hover:text-gray-100">Careers</a></li>
          </ul>
        </div>

        {/* SERVICE */}
        <div>
          <h6 className="text-sm font-semibold text-gray-400 uppercase mb-4">Service</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-100">Trade</a></li>
            <li><a href="#" className="hover:text-gray-100">Staking</a></li>
            <li><a href="#" className="hover:text-gray-100">Referral Program</a></li>
            <li><a href="#" className="hover:text-gray-100">VIP Program</a></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h6 className="text-sm font-semibold text-gray-400 uppercase mb-4">Support</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-100">Buy crypto</a></li>
            <li><a href="#" className="hover:text-gray-100">Activation account</a></li>
            <li><a href="#" className="hover:text-gray-100">What is cryptocurrency?</a></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h6 className="text-sm font-semibold text-gray-400 uppercase mb-4">Legal</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-100">Privacy policy</a></li>
            <li><a href="#" className="hover:text-gray-100">Terms of service</a></li>
          </ul>
        </div>

        {/* TRADE CRYPTO */}
        <div>
          <h6 className="text-sm font-semibold text-gray-400 uppercase mb-4">Trade Crypto</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-100">BTC/USDT</a></li>
            <li><a href="#" className="hover:text-gray-100">ETH/USDT</a></li>
            <li><a href="#" className="hover:text-gray-100">BNB/USDT</a></li>
            <li><a href="#" className="hover:text-gray-100">TRX/USDT</a></li>
          </ul>
        </div>

        {/* CONTACT US (Full Width on Small Screens) */}
        <div className="md:col-span-3 lg:col-span-2">
          <h6 className="text-sm font-semibold text-gray-400 uppercase mb-4">Contact Us</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-100">Business Cooperation</a></li>
            <li><a href="#" className="hover:text-gray-100">Institution Cooperation</a></li>
            <li><a href="#" className="hover:text-gray-100">Customer Service Email</a></li>
            <li><a href="#" className="hover:text-gray-100">Media support</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:col-span-3 lg:col-span-3 bg-gray-800 rounded-lg p-6">
          <h6 className="text-lg font-semibold text-gray-100 mb-4">Submit for updates.</h6>
          <p className="text-sm text-gray-400 mb-4">Subscribe to get update and notify our exchange and products.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-gray-700 text-gray-300 rounded-l-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white rounded-r-md py-2 px-4 font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons and Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex items-center justify-between">
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-100">
            {/* Replace with your actual social icons (e.g., using libraries like react-icons) */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.67-1.65 1.13-2.66 1.33.75-.45 1.3-1.16 1.57-2-.69.41-1.46.71-2.28.87C19.36 4.87 18.02 4 16.5 4c-2.76 0-5 2.24-5 5 0 .4.05.8.12 1.1C8.2 9.78 5.5 7.26 3.37 4.9c-.4.68-.63 1.46-.63 2.3 0 1.72.88 3.23 2.2 4.1-.6-.02-1.16-.18-1.66-.43v.02c0 2.4 1.7 4.4 3.96 4.87-.4.1-.83.16-1.27.16-.3 0-.59-.03-.87-.08.59 1.96 2.44 3.38 4.6 3.42-1.68 1.33-3.8 2.1-6.13 2.1-1.2 0-2.37-.35-3.3-1 .62.2 1.3.3 1.98.3 2.37 0 4.12-1.58 4.63-3.7 1.06-.33 2.07-.83 2.86-1.5z"/></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-100">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM10 9.88c-.39-.22-.89-.17-1.23.13-.34.3-.48.77-.34 1.16l.8 2.28c.14.39.5.64.89.64.39 0 .74-.25.89-.64l.8-2.28c.14-.39.01-.86-.34-1.16-.34-.3-.84-.35-1.23-.13zm4 0c-.39-.22-.89-.17-1.23.13-.34.3-.48.77-.34 1.16l.8 2.28c.14.39.5.64.89.64.39 0 .74-.25.89-.64l.8-2.28c.14-.39.01-.86-.34-1.16-.34-.3-.84-.35-1.23-.13z"/></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-100">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-4-4h-2v6h2v-6zm-4 0h-2v6h2v-6zm-4 0H6v6h2v-6z"/></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-100">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-6 2h-2v-2h2v2zm-4 0h-2v-2h2v2zm-4 0H6v-2h2v2zm10-4h-8v-2h8v2zm-6-2h-4v-2h4v2z"/></svg>
          </a>
        </div>
        <p className="text-sm text-gray-500">© 2020-2025 SUWEX. All Rights Reserved</p>
      </div>

      {/* Our Partners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 py-6 border-t border-gray-800">
        <h6 className="text-sm font-semibold text-gray-400 uppercase mb-4 text-center">Our partners</h6>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
          <div><img src="https://via.placeholder.com/80x30/cccccc/ffffff?Text=Bitpay" alt="Bitpay" className="max-h-8 grayscale hover:grayscale-0 transition duration-300" /></div>
          <div><img src="https://via.placeholder.com/80x30/cccccc/ffffff?Text=Changelly" alt="Changelly" className="max-h-8 grayscale hover:grayscale-0 transition duration-300" /></div>
          <div><img src="https://via.placeholder.com/80x30/cccccc/ffffff?Text=Phemex" alt="Phemex" className="max-h-8 grayscale hover:grayscale-0 transition duration-300" /></div>
          <div><img src="https://via.placeholder.com/80x30/cccccc/ffffff?Text=Ramp" alt="Ramp" className="max-h-8 grayscale hover:grayscale-0 transition duration-300" /></div>
          <div><img src="https://via.placeholder.com/80x30/cccccc/ffffff?Text=Blockfolio" alt="Blockfolio" className="max-h-8 grayscale hover:grayscale-0 transition duration-300" /></div>
          {/* Add more partner logos here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;