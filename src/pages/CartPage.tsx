import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  CreditCard, 
  ShieldCheck, 
  TruckIcon,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/products/ProductGrid';
import { ProductType } from '@/components/products/ProductCard';

// Mock cart items
interface CartItem {
  id: string;
  product: ProductType;
  quantity: number;
  color?: string;
}

// Mock products for recommendations
const recommendedProducts: ProductType[] = [
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
  },
  {
    id: '5',
    name: 'Marble Side Table',
    price: 649.99,
    images: [
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1969&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop'
    ],
    category: 'Tables',
    slug: 'marble-side-table'
  },
  {
    id: '6',
    name: 'Modern Dining Chair',
    price: 299.99,
    images: [
      'https://images.unsplash.com/photo-1541123603104-512919d6a96c?q=80&w=1887&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?q=80&w=1887&auto=format&fit=crop'
    ],
    category: 'Chairs',
    slug: 'modern-dining-chair'
  }
];

const CartPage: React.FC = () => {
  // Mock cart data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      product: {
        id: '1',
        name: 'Meridian Lounge Chair',
        price: 1299.99,
        images: [
          'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1594224457860-02d140c58ee5?q=80&w=1965&auto=format&fit=crop'
        ],
        category: 'Chairs',
        slug: 'meridian-lounge-chair',
        isNew: true
      },
      quantity: 1,
      color: 'Emerald'
    },
    {
      id: '2',
      product: {
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
      quantity: 1,
      color: 'Walnut'
    }
  ]);
  
  const [promoCode, setPromoCode] = useState('');
  const [promoCodeError, setPromoCodeError] = useState<string | null>(null);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.product.salePrice || item.product.price) * item.quantity, 
    0
  );
  const shipping = subtotal > 150 ? 0 : 15.99;
  const tax = subtotal * 0.07; // Assuming 7% tax rate
  const total = subtotal + shipping + tax;
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const applyPromoCode = () => {
    // Mock promo code validation
    if (promoCode.toUpperCase() === 'WELCOME10') {
      // Successfully applied
      // In a real app, this would update the pricing
      setPromoCodeError('Success! 10% discount applied.');
    } else {
      setPromoCodeError('Invalid promo code. Please try again.');
    }
  };

  // Check if cart is empty
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="bg-luxe-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-center mb-8">Your Shopping Cart</h1>
        
        {isCartEmpty ? (
          <div className="text-center py-12 max-w-lg mx-auto">
            <div className="bg-luxe-sage/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-luxe-charcoal">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" x2="21" y1="6" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <h2 className="text-2xl mb-4">Your cart is empty</h2>
            <p className="text-luxe-charcoal/70 mb-8">
              It looks like you haven't added any items to your cart yet.
              Browse our collection to find something you'll love.
            </p>
            <Button size="lg" asChild>
              <Link to="/collections">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-luxe-taupe/20 rounded-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-luxe-sage/10 text-left">
                    <tr>
                      <th className="p-4 font-medium">Product</th>
                      <th className="p-4 font-medium text-center">Quantity</th>
                      <th className="p-4 font-medium text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-luxe-taupe/10">
                    {cartItems.map(item => (
                      <tr key={item.id}>
                        <td className="p-4">
                          <div className="flex">
                            <div className="w-20 h-20 bg-luxe-sage/10 mr-4 flex-shrink-0">
                              <img 
                                src={item.product.images[0]} 
                                alt={item.product.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium mb-1">
                                <Link 
                                  to={`/products/${item.product.slug}`}
                                  className="hover:text-luxe-gold transition-colors"
                                >
                                  {item.product.name}
                                </Link>
                              </h3>
                              {item.color && (
                                <p className="text-sm text-luxe-charcoal/70 mb-1">
                                  Color: {item.color}
                                </p>
                              )}
                              <p className="text-sm font-medium">
                                {item.product.salePrice 
                                  ? formatPrice(item.product.salePrice) 
                                  : formatPrice(item.product.price)}
                              </p>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-luxe-charcoal/70 hover:text-luxe-gold text-sm flex items-center mt-2 transition-colors"
                              >
                                <Trash2 size={14} className="mr-1" />
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex justify-center items-center">
                            <div className="flex border border-luxe-taupe/30 rounded-sm">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center text-luxe-charcoal hover:text-luxe-gold"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={14} />
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-10 h-8 text-center border-x border-luxe-taupe/30 text-luxe-charcoal focus:outline-none"
                              />
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-luxe-charcoal hover:text-luxe-gold"
                                aria-label="Increase quantity"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-right font-medium">
                          {formatPrice((item.product.salePrice || item.product.price) * item.quantity)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 flex justify-between items-center">
                <Button variant="outline" asChild>
                  <Link to="/collections" className="flex items-center">
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-luxe-taupe/20 rounded-sm p-6">
                <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-luxe-charcoal/70">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-luxe-charcoal/70">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-luxe-charcoal/70">Estimated Tax</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                </div>
                
                <div className="border-t border-b border-luxe-taupe/20 py-4 mb-6">
                  <div className="flex justify-between items-center font-medium">
                    <span>Total</span>
                    <span className="text-xl">{formatPrice(total)}</span>
                  </div>
                </div>
                
                {/* Promo Code */}
                <div className="mb-6">
                  <label htmlFor="promo-code" className="block text-sm font-medium mb-2">
                    Promo Code
                  </label>
                  <div className="flex">
                    <input
                      id="promo-code"
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-grow border border-luxe-taupe/30 rounded-l-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-luxe-gold"
                    />
                    <Button 
                      variant="secondary" 
                      className="rounded-l-none"
                      onClick={applyPromoCode}
                    >
                      Apply
                    </Button>
                  </div>
                  {promoCodeError && (
                    <p className={`mt-2 text-sm ${promoCodeError.includes('Success') ? 'text-green-600' : 'text-red-500'} flex items-center`}>
                      {!promoCodeError.includes('Success') && <AlertCircle size={14} className="mr-1" />}
                      {promoCodeError}
                    </p>
                  )}
                </div>
                
                <Button size="lg" className="w-full mb-6" asChild>
                  <Link to="/checkout" className="flex items-center justify-center">
                    Proceed to Checkout <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                
                {/* Trust elements */}
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-luxe-charcoal/80">
                    <ShieldCheck size={18} className="mr-2 text-luxe-gold" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center text-sm text-luxe-charcoal/80">
                    <TruckIcon size={18} className="mr-2 text-luxe-gold" />
                    <span>Free shipping on orders over $150</span>
                  </div>
                  <div className="flex items-center text-sm text-luxe-charcoal/80">
                    <CreditCard size={18} className="mr-2 text-luxe-gold" />
                    <span>All major payment methods accepted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Recommended Products */}
        <section className="mt-20">
          <h2 className="text-center mb-3">You Might Also Like</h2>
          <p className="text-center text-luxe-charcoal/70 mb-12 max-w-2xl mx-auto">
            Based on your selections, we think you'll love these pieces too.
          </p>
          
          <ProductGrid 
            products={recommendedProducts} 
            columns={4}
          />
        </section>
      </div>
    </div>
  );
};

export default CartPage;