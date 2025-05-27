import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-teal-400" />
              <span className="ml-2 text-xl font-bold">GiveTrack</span>
            </div>
            <p className="text-gray-300 mb-4">
              Making a difference through transparent and impactful donations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  Donation Categories
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  Donate Now
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  My Donations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  Clean Water
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  Housing
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  Food Security
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-teal-400" />
                <a href="mailto:info@givetrack.org" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  info@givetrack.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-teal-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-teal-400" />
                <span className="text-gray-300">
                  123 Charity Lane, Suite 456<br />
                  San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} GiveTrack. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;