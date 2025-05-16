import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Minus, 
  Plus, 
  Heart, 
  Share2, 
  ShoppingBag, 
  Check,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp,
  Truck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/products/ProductGrid';
import { ProductType } from '@/components/products/ProductCard';

// Mock products data (would be fetched from API in real app)
const products: ProductType[] = [
  {
    id: '1',
    name: 'Meridian Lounge Chair',
    price: 1299.99,
    images: [
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594224457860-02d140c58ee5?q=80&w=1965&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598304613501-6accbfd00c94?q=80&w=1965&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=1974&auto=format&fit=crop'
    ],
    category: 'Chairs',
    slug: 'meridian-lounge-chair',
    isNew: true
  },
  {
    id: '2',
    name: 'Artisan Coffee Table',
    price: 899.99,
    salePrice: 749.99,
    images: [
      'https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=1887&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1887&auto=format&fit=crop'
    ],
    category: 'Tables',
    slug: 'artisan-coffee-table',
    isSale: true
  },
  {
    id: '3',
    name: 'Luminous Pendant Light',
    price: 349.99,
    images: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1770&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1887&auto=format&fit=crop'
    ],
    category: 'Lighting',
    slug: 'luminous-pendant-light'
  },
  {
    id: '4',
    name: 'Velvet Accent Pillow',
    price: 89.99,
    images: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1780&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579656381254-1a65c5b4afbe?q=80&w=1887&auto=format&fit=crop'
    ],
    category: 'Decor',
    slug: 'velvet-accent-pillow'
  }
];

type Accordion = 'details' | 'shipping' | 'returns' | 'reviews';

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the product based on the slug
  const product = products.find(p => p.slug === slug) || products[0]; // Default to first product
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<Accordion | null>('details');
  
  // Mock product details
  const details = {
    description: 'The Meridian Lounge Chair combines modern design with exceptional comfort. Featuring a smooth curved form with premium upholstery, this statement piece instantly elevates any living space.',
    features: [
      'Solid wood frame for durability',
      'Premium velvet upholstery',
      'Ergonomic curved design for comfort',
      'Foam cushioning with spring support',
      'Brass-finished metal legs',
      'Available in multiple colors'
    ],
    dimensions: {
      width: '30"',
      depth: '32"',
      height: '33"',
      seatHeight: '18"'
    },
    materials: [
      'Frame: Kiln-dried hardwood',
      'Upholstery: 100% polyester velvet',
      'Legs: Brass-finished stainless steel',
      'Cushion: High-density foam'
    ],
    colors: ['Emerald', 'Navy Blue', 'Blush Pink', 'Gray', 'Ivory'],
    care: 'Spot clean with mild soap and water. Professional cleaning recommended for stubborn stains.'
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const toggleAccordion = (accordion: Accordion) => {
    setOpenAccordion(openAccordion === accordion ? null : accordion);
  };

  return (
    <div className="bg-luxe-white py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="text-sm mb-8 text-luxe-charcoal/70">
          <a href="/" className="hover:text-luxe-gold">Home</a>
          <span className="mx-2">/</span>
          <a href="/collections" className="hover:text-luxe-gold">Shop</a>
          <span className="mx-2">/</span>
          <a href={`/collections/${product.category.toLowerCase()}`} className="hover:text-luxe-gold">
            {product.category}
          </a>
          <span className="mx-2">/</span>
          <span className="text-luxe-charcoal">{product.name}</span>
        </div>
        
        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative aspect-[4/3] mb-4 bg-luxe-sage/10">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
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
            
            {/* Thumbnail gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square border-2 ${activeImage === index ? 'border-luxe-gold' : 'border-transparent'} overflow-hidden`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-heading mb-4">{product.name}</h1>
            
            {/* Product price */}
            <div className="mb-6">
              {product.salePrice ? (
                <div className="flex items-center gap-3">
                  <span className="text-luxe-charcoal/70 line-through text-lg">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-luxe-gold text-2xl font-medium">
                    {formatPrice(product.salePrice)}
                  </span>
                  <span className="bg-luxe-charcoal text-white text-xs font-accent tracking-wide px-3 py-1">
                    SAVE {Math.round((1 - product.salePrice / product.price) * 100)}%
                  </span>
                </div>
              ) : (
                <span className="text-luxe-charcoal text-2xl font-medium">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex mr-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star
                    key={star}
                    size={16}
                    className={star <= 4 ? "fill-luxe-gold text-luxe-gold" : "text-luxe-charcoal/30"}
                  />
                ))}
              </div>
              <span className="text-sm text-luxe-charcoal/70">42 reviews</span>
            </div>
            
            {/* Short description */}
            <p className="text-luxe-charcoal/80 mb-8">
              {details.description}
            </p>
            
            {/* Color selector */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-3">Color: <span className="text-luxe-charcoal/70">Emerald</span></h3>
              <div className="flex flex-wrap gap-3">
                <button className="w-10 h-10 bg-emerald-700 rounded-full border-2 border-luxe-gold"></button>
                <button className="w-10 h-10 bg-navy-700 rounded-full border border-luxe-taupe/30"></button>
                <button className="w-10 h-10 bg-pink-300 rounded-full border border-luxe-taupe/30"></button>
                <button className="w-10 h-10 bg-gray-400 rounded-full border border-luxe-taupe/30"></button>
                <button className="w-10 h-10 bg-gray-100 rounded-full border border-luxe-taupe/30"></button>
              </div>
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex border border-luxe-taupe/30 rounded-sm">
                <button 
                  onClick={decreaseQuantity}
                  className="w-10 h-12 flex items-center justify-center text-luxe-charcoal hover:text-luxe-gold"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 h-12 text-center border-x border-luxe-taupe/30 text-luxe-charcoal focus:outline-none"
                />
                <button 
                  onClick={increaseQuantity}
                  className="w-10 h-12 flex items-center justify-center text-luxe-charcoal hover:text-luxe-gold"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <Button className="flex-grow flex items-center justify-center py-6 text-base">
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </Button>
              
              <Button variant="outline" size="icon" className="h-12 w-12" aria-label="Add to wishlist">
                <Heart size={18} />
              </Button>
              
              <Button variant="outline" size="icon" className="h-12 w-12" aria-label="Share">
                <Share2 size={18} />
              </Button>
            </div>
            
            {/* Shipping notification */}
            <div className="bg-luxe-sage/15 p-4 mb-8 flex items-start">
              <Truck size={20} className="text-luxe-charcoal mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-luxe-charcoal font-medium">Free shipping</p>
                <p className="text-sm text-luxe-charcoal/70">Estimated delivery: 5-7 business days</p>
              </div>
            </div>
            
            {/* Product Details Accordion */}
            <div className="border-t border-luxe-taupe/20">
              <button 
                className="w-full py-4 flex justify-between items-center"
                onClick={() => toggleAccordion('details')}
              >
                <span className="font-medium">Product Details</span>
                {openAccordion === 'details' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openAccordion === 'details' && (
                <div className="pb-4 text-luxe-charcoal/80 animate-fade">
                  <h4 className="font-medium mb-2">Features</h4>
                  <ul className="list-inside space-y-1 mb-4">
                    {details.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={16} className="text-luxe-gold mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-medium mb-2">Dimensions</h4>
                  <ul className="list-inside space-y-1 mb-4">
                    <li>Width: {details.dimensions.width}</li>
                    <li>Depth: {details.dimensions.depth}</li>
                    <li>Height: {details.dimensions.height}</li>
                    <li>Seat height: {details.dimensions.seatHeight}</li>
                  </ul>
                  
                  <h4 className="font-medium mb-2">Materials</h4>
                  <ul className="list-inside space-y-1 mb-4">
                    {details.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                  
                  <h4 className="font-medium mb-2">Care Instructions</h4>
                  <p>{details.care}</p>
                </div>
              )}
            </div>
            
            {/* Shipping Accordion */}
            <div className="border-t border-luxe-taupe/20">
              <button 
                className="w-full py-4 flex justify-between items-center"
                onClick={() => toggleAccordion('shipping')}
              >
                <span className="font-medium">Shipping & Delivery</span>
                {openAccordion === 'shipping' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openAccordion === 'shipping' && (
                <div className="pb-4 text-luxe-charcoal/80 animate-fade">
                  <p className="mb-4">We offer complimentary standard shipping on all orders over $150 within the contiguous United States.</p>
                  
                  <h4 className="font-medium mb-2">Shipping Options</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Standard Shipping (5-7 business days)</span>
                      <span className="font-medium">FREE</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Express Shipping (2-3 business days)</span>
                      <span className="font-medium">$20.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Next Day Delivery (order by 2pm)</span>
                      <span className="font-medium">$35.00</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Returns Accordion */}
            <div className="border-t border-luxe-taupe/20">
              <button 
                className="w-full py-4 flex justify-between items-center"
                onClick={() => toggleAccordion('returns')}
              >
                <span className="font-medium">Returns & Exchanges</span>
                {openAccordion === 'returns' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openAccordion === 'returns' && (
                <div className="pb-4 text-luxe-charcoal/80 animate-fade">
                  <p className="mb-4">
                    We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, we accept returns within 30 days of delivery.
                  </p>
                  <p>
                    Please note that all items must be returned in their original condition and packaging. Custom orders and clearance items are final sale and cannot be returned.
                  </p>
                </div>
              )}
            </div>
            
            {/* Reviews Accordion */}
            <div className="border-t border-b border-luxe-taupe/20">
              <button 
                className="w-full py-4 flex justify-between items-center"
                onClick={() => toggleAccordion('reviews')}
              >
                <span className="font-medium">Customer Reviews</span>
                {openAccordion === 'reviews' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openAccordion === 'reviews' && (
                <div className="pb-4 text-luxe-charcoal/80 animate-fade">
                  <div className="flex items-center mb-6">
                    <div className="flex mr-4">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star
                          key={star}
                          size={20}
                          className={star <= 4 ? "fill-luxe-gold text-luxe-gold" : "text-luxe-charcoal/30"}
                        />
                      ))}
                    </div>
                    <span className="text-luxe-charcoal">4.0 out of 5</span>
                  </div>
                  
                  {/* Sample reviews */}
                  <div className="space-y-6">
                    <div className="border-b border-luxe-taupe/20 pb-6">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Elegant and comfortable</h4>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star
                              key={star}
                              size={14}
                              className={star <= 5 ? "fill-luxe-gold text-luxe-gold" : "text-luxe-charcoal/30"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-luxe-charcoal/70 mb-2">Sarah T. - 2 months ago</p>
                      <p>This chair is absolutely beautiful and surprisingly comfortable. The velvet is soft and luxurious, and the emerald color is rich and vibrant. The brass legs add the perfect touch of elegance.</p>
                    </div>
                    
                    <div className="border-b border-luxe-taupe/20 pb-6">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Great design, a bit firm</h4>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star
                              key={star}
                              size={14}
                              className={star <= 4 ? "fill-luxe-gold text-luxe-gold" : "text-luxe-charcoal/30"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-luxe-charcoal/70 mb-2">Michael D. - 3 weeks ago</p>
                      <p>The chair looks exactly as pictured and makes a beautiful statement in my living room. The only reason I'm giving it 4 stars instead of 5 is that the seat is firmer than I expected. It's still comfortable, but if you prefer a softer sit, you might want to add a small pillow.</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Worth every penny</h4>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star
                              key={star}
                              size={14}
                              className={star <= 5 ? "fill-luxe-gold text-luxe-gold" : "text-luxe-charcoal/30"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-luxe-charcoal/70 mb-2">Lisa J. - 1 week ago</p>
                      <p>I hesitated because of the price, but this chair is absolutely worth every penny. The quality is exceptional and it's become the focal point of my study. I spend hours reading in it comfortably. Highly recommend!</p>
                    </div>
                  </div>
                  
                  <button className="mt-6 text-luxe-gold flex items-center hover:text-luxe-gold/80 transition-colors">
                    See All Reviews <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <section className="mt-20">
          <h2 className="text-center mb-3">You May Also Like</h2>
          <p className="text-center text-luxe-charcoal/70 mb-12 max-w-2xl mx-auto">
            Complete your space with these complementary pieces.
          </p>
          
          <ProductGrid 
            products={products.filter(p => p.id !== product.id)} 
            columns={3}
          />
        </section>
      </div>
    </div>
  );
};

export default ProductPage;