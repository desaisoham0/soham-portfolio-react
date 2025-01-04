import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 to-teal-900">
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        {children}
        <footer className="py-8">
          <div className="bg-white/85 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 mb-8 transition-all duration-300">
            <div className="flex justify-center items-center">
              <p className="text-zinc-600 text-sm">
                © {new Date().getFullYear()} Soham Desai. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;