import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Heart 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  cartCount?: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'New Arrivals', path: '/collections/new-arrivals' },
    { name: 'Shop', path: '/collections' },
    { name: 'Living Room', path: '/collections/living-room' },
    { name: 'Dining', path: '/collections/dining' },
    { name: 'Bedroom', path: '/collections/bedroom' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="relative bg-luxe-white border-b border-luxe-taupe/20">
      {/* Announcement bar */}
      <div className="bg-luxe-gold text-white text-center py-2 px-4 text-sm font-accent">
        Free shipping on orders over $150 | Satisfaction guaranteed
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile menu button - only visible on mobile */}
        <button 
          className="lg:hidden text-luxe-charcoal hover:text-luxe-gold transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Logo */}
        <div className="flex-1 lg:flex-none text-center lg:text-left">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl md:text-3xl font-heading font-semibold text-luxe-charcoal">
              Luxe <span className="text-luxe-gold">Haven</span>
            </h1>
          </Link>
        </div>
        
        {/* Desktop navigation - hidden on mobile */}
        <nav className="hidden lg:flex items-center space-x-8 mx-10">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-luxe-charcoal hover:text-luxe-gold font-accent text-sm tracking-wider transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Header actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleSearch}
            className="text-luxe-charcoal hover:text-luxe-gold transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          <Link to="/wishlist" className="text-luxe-charcoal hover:text-luxe-gold transition-colors">
            <Heart size={20} />
          </Link>
          
          <Link to="/account" className="text-luxe-charcoal hover:text-luxe-gold transition-colors">
            <User size={20} />
          </Link>
          
          <Link to="/cart" className="relative text-luxe-charcoal hover:text-luxe-gold transition-colors">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-luxe-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      
      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 z-20 border-t border-luxe-taupe/20 animate-fade">
          <div className="container mx-auto flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-grow border-b-2 border-luxe-taupe/30 focus:border-luxe-gold py-2 px-4 outline-none text-luxe-charcoal"
              autoFocus
            />
            <Button variant="ghost" onClick={toggleSearch} className="ml-2" aria-label="Close search">
              <X size={20} />
            </Button>
          </div>
        </div>
      )}
      
      {/* Mobile menu - only visible when open */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-30 border-t border-luxe-taupe/20 animate-fade">
          <nav className="flex flex-col py-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-6 py-3 text-luxe-charcoal hover:bg-luxe-sage/30 font-accent text-sm tracking-wider transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;