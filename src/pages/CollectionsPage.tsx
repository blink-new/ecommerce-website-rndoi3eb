import React, { useState } from 'react';
import { 
  ChevronDown, 
  ListFilter, 
  Grid, 
  X, 
  LayoutGrid, 
  List,
  SlidersHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/products/ProductGrid';
import { ProductType } from '@/components/products/ProductCard';

const CollectionsPage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  
  // Mock filter states
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  
  // Mock products data
  const products: ProductType[] = [
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
    },
    {
      id: '7',
      name: 'Handwoven Throw Blanket',
      price: 129.99,
      images: [
        'https://images.unsplash.com/photo-1600369672770-985fd30001a9?q=80&w=1964&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1601498089133-5d9c130db567?q=80&w=1960&auto=format&fit=crop'
      ],
      category: 'Decor',
      slug: 'handwoven-throw-blanket'
    },
    {
      id: '8',
      name: 'Ceramic Table Lamp',
      price: 219.99,
      images: [
        'https://images.unsplash.com/photo-1600051394566-9eab3097a9b0?q=80&w=1964&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1887&auto=format&fit=crop'
      ],
      category: 'Lighting',
      slug: 'ceramic-table-lamp'
    }
  ];

  // Filter options
  const categories = ['Chairs', 'Tables', 'Lighting', 'Decor', 'Bedroom', 'Dining', 'Storage'];
  const colors = ['Black', 'White', 'Gray', 'Brown', 'Blue', 'Green', 'Gold', 'Natural'];
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  const toggleCategory = (category: string) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter(c => c !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };
  
  const toggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className="bg-luxe-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="mb-3">All Products</h1>
          <p className="text-luxe-charcoal/70 max-w-3xl mx-auto">
            Browse our curated collection of luxury furniture and home decor designed to elevate your living spaces.
          </p>
        </div>
        
        {/* Filter and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <Button 
            variant="outline" 
            onClick={toggleFilter}
            className="md:hidden w-full justify-between"
          >
            <span className="flex items-center">
              <ListFilter size={18} className="mr-2" />
              Filter Products
            </span>
            <ChevronDown size={18} />
          </Button>
          
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              className="bg-white border border-luxe-taupe/20 text-luxe-charcoal hover:bg-luxe-gold hover:text-white"
            >
              <LayoutGrid size={18} />
            </Button>
            
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('list')}
              aria-label="List view"
              className="bg-white border border-luxe-taupe/20 text-luxe-charcoal hover:bg-luxe-gold hover:text-white"
            >
              <List size={18} />
            </Button>
            
            <span className="ml-4 text-sm text-luxe-charcoal/70 hidden md:inline-block">
              Showing {products.length} products
            </span>
          </div>
          
          <div className="flex items-center w-full md:w-auto">
            <label htmlFor="sort" className="mr-2 text-sm text-luxe-charcoal/70 whitespace-nowrap">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-luxe-taupe/20 rounded-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-luxe-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="bestselling">Best Selling</option>
            </select>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <aside className="w-full md:w-64 lg:w-72 hidden md:block flex-shrink-0">
            <div className="bg-white border border-luxe-taupe/20 p-6 sticky top-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-heading text-xl">Filters</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-sm text-luxe-charcoal/70 hover:text-luxe-gold"
                >
                  Clear All
                </Button>
              </div>
              
              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Category</h4>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label 
                      key={category} 
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategory.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="rounded border-luxe-taupe/40 text-luxe-gold focus:ring-luxe-gold/30 mr-3"
                      />
                      <span className="text-luxe-charcoal/80">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Color Filter */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Color</h4>
                <div className="space-y-3">
                  {colors.map((color) => (
                    <label 
                      key={color} 
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => toggleColor(color)}
                        className="rounded border-luxe-taupe/40 text-luxe-gold focus:ring-luxe-gold/30 mr-3"
                      />
                      <span className="text-luxe-charcoal/80">{color}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Price Range Filter */}
              <div>
                <h4 className="text-lg font-medium mb-4">Price Range</h4>
                <div className="px-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="5000" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-luxe-gold"
                  />
                  <div className="flex justify-between text-sm text-luxe-charcoal/70 mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-white z-50 overflow-y-auto animate-slide-in-right">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-heading text-xl flex items-center">
                      <SlidersHorizontal size={18} className="mr-2" /> Filters
                    </h3>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={toggleFilter}
                      className="text-luxe-charcoal"
                    >
                      <X size={20} />
                    </Button>
                  </div>
                  
                  {/* Category Filter */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">Category</h4>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <label 
                          key={category} 
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategory.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="rounded border-luxe-taupe/40 text-luxe-gold focus:ring-luxe-gold/30 mr-3"
                          />
                          <span className="text-luxe-charcoal/80">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Color Filter */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">Color</h4>
                    <div className="space-y-3">
                      {colors.map((color) => (
                        <label 
                          key={color} 
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedColors.includes(color)}
                            onChange={() => toggleColor(color)}
                            className="rounded border-luxe-taupe/40 text-luxe-gold focus:ring-luxe-gold/30 mr-3"
                          />
                          <span className="text-luxe-charcoal/80">{color}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price Range Filter */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">Price Range</h4>
                    <div className="px-2">
                      <input 
                        type="range" 
                        min="0" 
                        max="5000" 
                        value={priceRange[1]} 
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full accent-luxe-gold"
                      />
                      <div className="flex justify-between text-sm text-luxe-charcoal/70 mt-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      onClick={toggleFilter}
                      className="flex-1"
                    >
                      Apply Filters
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          <div className="flex-grow">
            <ProductGrid 
              products={products} 
              columns={viewMode === 'list' ? 1 : 3}
              className={viewMode === 'list' ? 'gap-8' : ''}
            />
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-1">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-luxe-taupe/20 hover:bg-luxe-gold hover:text-white hover:border-luxe-gold"
                >
                  Previous
                </Button>
                
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button 
                    key={page}
                    variant={page === 1 ? 'default' : 'outline'} 
                    size="sm"
                    className={page === 1 ? '' : 'border-luxe-taupe/20 hover:bg-luxe-gold hover:text-white hover:border-luxe-gold'}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-luxe-taupe/20 hover:bg-luxe-gold hover:text-white hover:border-luxe-gold"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;