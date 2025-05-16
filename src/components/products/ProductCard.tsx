import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface ProductType {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: string;
  slug: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: ProductType;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Format price to currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  // Show second image on hover if available
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  return (
    <div 
      className={`group relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Product Image */}
      <Link to={`/products/${product.slug}`} className="relative block overflow-hidden bg-luxe-sage/10">
        <div className="aspect-[3/4] w-full relative">
          <img 
            src={product.images[currentImageIndex]} 
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          
          {/* Product badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-luxe-gold text-white text-xs font-accent tracking-wide px-3 py-1">
                NEW
              </span>
            )}
            
            {product.isSale && (
              <span className="bg-luxe-charcoal text-white text-xs font-accent tracking-wide px-3 py-1">
                SALE
              </span>
            )}
          </div>
        </div>
      </Link>
      
      {/* Product actions */}
      <div 
        className={`absolute right-3 top-3 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="bg-white hover:bg-luxe-gold hover:text-white text-luxe-charcoal rounded-full h-9 w-9 shadow-sm"
          aria-label="Add to wishlist"
        >
          <Heart size={16} />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="bg-white hover:bg-luxe-gold hover:text-white text-luxe-charcoal rounded-full h-9 w-9 shadow-sm"
          aria-label="Quick view"
        >
          <Eye size={16} />
        </Button>
      </div>
      
      {/* Product info */}
      <div className="mt-4 flex flex-col">
        <Link 
          to={`/products/${product.slug}`}
          className="text-luxe-charcoal hover:text-luxe-gold transition-colors font-medium mb-1"
        >
          {product.name}
        </Link>
        
        <div className="text-sm mb-3">
          {product.salePrice ? (
            <div className="flex gap-2 items-center">
              <span className="text-luxe-charcoal/70 line-through">
                {formatPrice(product.price)}
              </span>
              <span className="text-luxe-gold font-medium">
                {formatPrice(product.salePrice)}
              </span>
            </div>
          ) : (
            <span className="text-luxe-charcoal/90">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          className="mt-auto group-hover:bg-luxe-gold group-hover:text-white group-hover:border-luxe-gold transition-colors"
        >
          <ShoppingBag size={16} className="mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;