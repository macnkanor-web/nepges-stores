import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StoreNavbar } from "@/components/shop/StoreNavbar";
import { AnimatedProductCard } from "@/components/shop/AnimatedProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Store as StoreIcon, SlidersHorizontal, X, Sparkles, ShoppingBag, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ThreeBackground } from "@/components/ThreeBackground";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const categories = [
  { id: "electronics", name: "Electronics", tags: ["electronics", "phone", "smartphone", "laptop"] },
  { id: "wearables", name: "Wearables", tags: ["wearables", "watch", "smartwatch", "fitness"] },
  { id: "audio", name: "Audio", tags: ["audio", "headphones", "speaker", "sound"] },
  { id: "fashion", name: "Fashion", tags: ["fashion", "clothing", "apparel", "shirt"] },
];

const priceRanges = [
  { id: "all", name: "All Prices", min: 0, max: Infinity },
  { id: "under-50", name: "Under $50", min: 0, max: 50 },
  { id: "50-100", name: "$50 - $100", min: 50, max: 100 },
  { id: "100-200", name: "$100 - $200", min: 100, max: 200 },
  { id: "200-plus", name: "$200+", min: 200, max: Infinity },
];

const features = [
  { icon: ShoppingBag, title: "Premium Selection", desc: "Curated products" },
  { icon: Star, title: "Top Quality", desc: "Best brands only" },
  { icon: TrendingUp, title: "Best Prices", desc: "Unbeatable deals" },
];

const Store = () => {
  const products = mockProducts;
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => {
        const productTags = product.tags?.join(',').toLowerCase() || "";
        return selectedCategories.some(categoryId => {
          const category = categories.find(c => c.id === categoryId);
          return category?.tags.some(tag => productTags.includes(tag.toLowerCase()));
        });
      });
    }

    const priceRange = priceRanges.find(r => r.id === selectedPriceRange);
    if (priceRange && priceRange.id !== "all") {
      filtered = filtered.filter(product => {
        return product.price >= priceRange.min && product.price < priceRange.max;
      });
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "name-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, selectedCategories, selectedPriceRange, sortBy]);

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3 text-foreground">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
                className="border-primary data-[state=checked]:bg-primary"
              />
              <Label
                htmlFor={category.id}
                className="text-sm font-normal cursor-pointer text-foreground"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-foreground">Price Range</h3>
        <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
          <SelectTrigger className="w-full border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.map(range => (
              <SelectItem key={range.id} value={range.id}>
                {range.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {(selectedCategories.length > 0 || selectedPriceRange !== "all") && (
        <Button
          variant="outline"
          className="w-full border-primary/30 hover:bg-primary/10"
          onClick={() => {
            setSelectedCategories([]);
            setSelectedPriceRange("all");
          }}
        >
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  );

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <StoreNavbar products={products} />
      
      {/* Immersive Hero Section with 3D Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f08] via-[#2d1810] to-[#1a0f08]">
          <ThreeBackground />
        </div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0%,hsl(var(--background)/0.3)_70%)]" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-primary/20 backdrop-blur-md rounded-full border border-primary/40 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Premium Collection 2025</span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="text-cream-100 drop-shadow-lg">Welcome to</span>
              <br />
              <span className="text-gradient-warm drop-shadow-2xl">Nepges Store</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-cream-200/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Discover premium devices, cutting-edge electronics, and fashion-forward style. 
              Experience excellence in every product.
            </motion.p>
            
            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-sm rounded-full border border-border/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature.title}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-warm text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-lg px-8 py-6 rounded-full font-semibold"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Explore Collection
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-cream-200/50 flex items-start justify-center p-2"
          >
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-24">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Our <span className="text-gradient">Collection</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-warm mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully curated selection of premium products designed for modern living
          </p>
        </motion.div>

        {products.length > 0 && (
          <motion.div 
            className="flex items-center justify-between mb-10 gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden border-primary/30 hover:bg-primary/10">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                    {(selectedCategories.length > 0 || selectedPriceRange !== "all") && (
                      <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                        {selectedCategories.length + (selectedPriceRange !== "all" ? 1 : 0)}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 bg-card">
                  <SheetHeader>
                    <SheetTitle className="text-foreground">Filters</SheetTitle>
                    <SheetDescription>
                      Refine your product search
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>

              <div className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-primary">{filteredAndSortedProducts.length}</span> of{" "}
                <span className="font-semibold text-foreground">{products.length}</span> products
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Label htmlFor="sort" className="text-sm font-medium whitespace-nowrap text-foreground">
                Sort by:
              </Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger id="sort" className="w-[180px] border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        )}

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          {products.length > 0 && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <motion.div 
                className="sticky top-24 bg-card border border-border rounded-2xl p-6 shadow-sm"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
                  <SlidersHorizontal className="h-5 w-5 text-primary" />
                  Filters
                </h3>
                <FilterContent />
              </motion.div>
            </aside>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {products.length === 0 ? (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                  <StoreIcon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">No Products Found</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Our store is brand new! Create your first product by telling me what you'd like to sell.
                </p>
              </motion.div>
            ) : filteredAndSortedProducts.length === 0 ? (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                  <StoreIcon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">No Products Match Your Filters</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Try adjusting your filters to see more products
                </p>
                <Button
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedPriceRange("all");
                  }}
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear All Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <AnimatePresence mode="popLayout">
                  {filteredAndSortedProducts.map((product, index) => (
                    <AnimatedProductCard key={product.id} product={product} index={index} />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-card to-secondary/30 border-t border-border py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold mb-3">
              Nepges <span className="text-gradient">Store</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-8">Your trusted destination for premium products</p>
            <div className="text-sm text-muted-foreground">
              <p>&copy; 2025 Nepges Store. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Store;
