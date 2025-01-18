import React from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Terminal className="w-8 h-8 text-green-500" />
            <span className="ml-2 text-gray-200 font-display text-xl tracking-widest">DEV</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;