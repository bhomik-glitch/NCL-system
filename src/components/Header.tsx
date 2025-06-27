import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import nclLogo from '../assets/logo/ncl logo.jpg';

const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/products', label: 'OUR PRODUCTS' },
    { path: '/clients', label: 'CLIENTS' },
    { path: '/contact', label: 'CONTACT US' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-premium border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group pl-4">
            <div className="relative w-36 h-36 overflow-hidden rounded-lg">
              <img 
                src={nclLogo} 
                alt="NCL SYSTEMS Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-6 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'scale-x-100 opacity-100' 
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 animate-fade-in-up ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;