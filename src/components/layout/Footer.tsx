import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxe-navy text-white">
      {/* Newsletter */}
      <div className="container mx-auto px-4 py-12 border-b border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-heading mb-2">Join Our Newsletter</h3>
          <p className="text-white/80 mb-6">Be the first to know about new arrivals, special offers and exclusive events.</p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-luxe-gold"
              required
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-luxe-gold hover:bg-luxe-gold/90 text-white font-accent tracking-wide transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="font-heading text-xl mb-6">Luxe Haven</h4>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              Curating elegant home furnishings and decor that elevate your living spaces with timeless design and exceptional craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-luxe-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-luxe-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-luxe-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-luxe-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h4 className="font-heading text-xl mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/collections/new-arrivals" className="text-white/70 hover:text-luxe-gold text-sm transition-colors">New Arrivals</Link></li>
              <li><Link to="/collections/bestsellers" className="text-white/70 hover:text-luxe-gold text-sm transition-colors">Bestsellers</Link></li>
              <li><Link to="/collections/living-room" className="text-white/70 hover:text-luxe-gold text-sm transition-colors">Living Room</Link></li>
              <li><Link to="/collections/dining" className="text-white/70 hover:text-luxe-gold text-sm transition-colors">Dining</Link></li>
              <li><Link to="/collections/bedroom" className="text-white/70 hover:text-luxe-gold text-sm transition-colors">Bedroom</Link></li>
              <li><Link to="/collections/decor" className="text-white/70 hover:text-luxe-gold text-sm transition-colors">Decor & Accessories</Link></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="font-heading text-xl mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-white/70 hover:text-luxe-gold text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-white/70 hover:text-luxe-gold text-sm transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="text-white/70 hover:text-luxe-gold text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/warranty" className="text-white/70 hover:text-luxe-gold text-sm transition-colors">Warranty Information</Link></li>
              <li><Link to="/track-order" className="text-white/70 hover:text-luxe-gold text-sm transition-colors">Track Your Order</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm">
                <MapPin size={18} className="mr-3 text-luxe-gold flex-shrink-0 mt-1" />
                <span className="text-white/70">123 Elegance Avenue, Suite 100<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone size={18} className="mr-3 text-luxe-gold flex-shrink-0" />
                <span className="text-white/70">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail size={18} className="mr-3 text-luxe-gold flex-shrink-0" />
                <span className="text-white/70">support@luxehaven.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-luxe-navy py-6 border-t border-white/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Luxe Haven. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="text-white/60 hover:text-luxe-gold text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-luxe-gold text-sm transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="text-white/60 hover:text-luxe-gold text-sm transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;