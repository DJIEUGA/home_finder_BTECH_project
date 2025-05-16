import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home size={24} className="text-primary-500" />
              <span className="text-xl font-bold">HomeFinder</span>
            </div>
            <p className="text-neutral-400 mb-4">
              Finding the perfect home for students and professionals since 2025.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/listings" className="text-neutral-400 hover:text-white transition-colors">Find Homes</Link></li>
              <li><Link to="/saved" className="text-neutral-400 hover:text-white transition-colors">Saved Listings</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">For Landlords</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">List Your Property</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Landlord Resources</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Landlord FAQ</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Tenant Verification</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={20} className="text-primary-500 mt-1" />
                <span className="text-neutral-400">support@homefinder.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={20} className="text-primary-500 mt-1" />
                <span className="text-neutral-400">(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-6 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} HomeFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;