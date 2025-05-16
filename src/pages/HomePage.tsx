import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/products/ProductGrid';
import { ProductType } from '@/components/products/ProductCard';

const HomePage: React.FC = () => {
  // Mock featured products data
  const featuredProducts: ProductType[] = [
    {
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

  // Categories for the grid display
  const categories = [
    {
      title: 'Living Room',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop',
      link: '/collections/living-room'
    },
    {
      title: 'Dining',
      image: 'https://images.unsplash.com/photo-1616137358077-a274518e94c9?q=80&w=1932&auto=format&fit=crop',
      link: '/collections/dining'
    },
    {
      title: 'Bedroom',
      image: 'https://images.unsplash.com/photo-1617325710236-4a36c5d3f2b3?q=80&w=1932&auto=format&fit=crop',
      link: '/collections/bedroom'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxe-charcoal/70 to-transparent"></div>
        </div>

        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="max-w-xl animate-fade">
            <h1 className="text-white mb-6">
              Elevate Your Home with Timeless Elegance
            </h1>
            <p className="text-white/90 text-lg mb-8 font-light">
              Discover our curated collection of luxury furniture and decor designed to transform your space into a sanctuary of style.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/collections">Shop Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10" asChild>
                <Link to="/collections/new-arrivals">New Arrivals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Categories Grid */}
      <section className="py-20 bg-luxe-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-3">Shop By Room</h2>
          <p className="text-center text-luxe-charcoal/70 mb-12 max-w-2xl mx-auto">
            Explore our collections curated to transform every room in your home into a luxurious retreat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link 
                to={category.link} 
                key={index}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[4/5] relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-luxe-charcoal/30 transition-opacity group-hover:bg-luxe-charcoal/10"></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="text-white text-3xl font-heading mb-4">{category.title}</h3>
                    <span className="text-white bg-luxe-gold px-5 py-2 font-accent text-sm tracking-wide">
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-luxe-sage/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2>Featured Products</h2>
            <Link 
              to="/collections/featured" 
              className="flex items-center text-luxe-gold hover:text-luxe-gold/80 font-accent text-sm tracking-wider transition-colors"
            >
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Brand Story / About Section */}
      <section className="py-20 bg-luxe-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1958&auto=format&fit=crop"
                alt="Our Story"
                className="w-full object-cover rounded-sm h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-luxe-gold"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-luxe-gold"></div>
            </div>
            
            <div className="lg:pl-6 animate-slide-in-right">
              <h2 className="mb-4">Our Commitment to Craftsmanship</h2>
              <p className="text-luxe-charcoal/80 mb-6 leading-relaxed">
                At Luxe Haven, we believe that luxury is in the details. Since our founding in 2010, we've been dedicated to sourcing and creating furniture and decor that meets the highest standards of quality and design.
              </p>
              <p className="text-luxe-charcoal/80 mb-8 leading-relaxed">
                Each piece in our collection is thoughtfully designed and crafted by skilled artisans using premium materials that stand the test of time. We're committed to sustainable practices and timeless designs that transcend trends.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-luxe-charcoal text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-3 text-white">What Our Customers Say</h2>
          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            We take pride in creating beautiful spaces and lasting impressions for our clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-luxe-charcoal/40 p-8 rounded-sm border border-white/10">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#D4B75C" className="mr-1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="italic text-white/90 mb-6">
                "The Meridian Lounge Chair is the perfect blend of comfort and style. It's become the focal point of our living room and everyone who visits comments on its elegant design."
              </p>
              <p className="font-medium">— Emily R., New York</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-luxe-charcoal/40 p-8 rounded-sm border border-white/10">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#D4B75C" className="mr-1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="italic text-white/90 mb-6">
                "I've purchased multiple pieces from Luxe Haven and the quality is consistently exceptional. Their customer service is outstanding and delivery was smooth and on time."
              </p>
              <p className="font-medium">— Michael T., Chicago</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-luxe-charcoal/40 p-8 rounded-sm border border-white/10">
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#D4B75C" className="mr-1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="italic text-white/90 mb-6">
                "Working with Luxe Haven's design team to furnish our new home was a dream. They understood our vision and helped us create a cohesive look that feels both luxurious and livable."
              </p>
              <p className="font-medium">— Sarah & James L., Los Angeles</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instagram Feed */}
      <section className="py-20 bg-luxe-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-3">Follow Our Journey</h2>
          <p className="text-center text-luxe-charcoal/70 mb-12 max-w-2xl mx-auto">
            Join us on Instagram for daily inspiration and behind-the-scenes glimpses into the world of Luxe Haven.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1770&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1887&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1887&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1774&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1774&auto=format&fit=crop"
            ].map((imgSrc, index) => (
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" key={index} className="block group relative overflow-hidden aspect-square">
                <img 
                  src={imgSrc} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxe-gold/0 flex items-center justify-center transition-all duration-300 group-hover:bg-luxe-gold/70">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;