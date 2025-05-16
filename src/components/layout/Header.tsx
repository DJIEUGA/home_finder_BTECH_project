import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, User, Home } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const { persona } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Home size={24} className="text-primary-500" />
            <span className="text-xl font-bold text-primary-500">HomeFinder</span>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/listings"
              className={`text-neutral-700 hover:text-primary-500 transition-colors ${location.pathname === '/listings' ? 'text-primary-500 font-medium' : ''}`}
            >
              Find Homes
            </Link>
            {persona && (
              <Link 
                to="/saved"
                className={`text-neutral-700 hover:text-primary-500 transition-colors ${location.pathname === '/saved' ? 'text-primary-500 font-medium' : ''}`}
              >
                Saved
              </Link>
            )}
            <Link 
              to="/about"
              className={`text-neutral-700 hover:text-primary-500 transition-colors ${location.pathname === '/about' ? 'text-primary-500 font-medium' : ''}`}
            >
              About
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-md"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/listings"
              className={`p-2 ${location.pathname === '/listings' ? 'bg-primary-50 text-primary-500 font-medium' : ''} rounded-md`}
              onClick={() => setIsMenuOpen(false)}
            >
              Find Homes
            </Link>
            {persona && (
              <Link 
                to="/saved"
                className={`p-2 ${location.pathname === '/saved' ? 'bg-primary-50 text-primary-500 font-medium' : ''} rounded-md`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <Heart size={18} />
                  <span>Saved</span>
                </div>
              </Link>
            )}
            <Link 
              to="/about"
              className={`p-2 ${location.pathname === '/about' ? 'bg-primary-50 text-primary-500 font-medium' : ''} rounded-md`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="border-t my-2 pt-2 flex gap-3">
              <Link to="/login" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" fullWidth>
                  <div className="flex items-center justify-center gap-2">
                    <User size={18} />
                    <span>Sign In</span>
                  </div>
                </Button>
              </Link>
              <Link to="/signup" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                <Button fullWidth>
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;