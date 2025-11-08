import { useState, useMemo } from "react";
import { StoreNavbar } from "@/components/shop/StoreNavbar";
import { ProductCard } from "@/components/shop/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Store as StoreIcon, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
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

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => {
        const productTags = product.tags?.join(',').toLowerCase() || "";
        return selectedCategories.some(categoryId => {
          const category = categories.find(c => c.id === categoryId);
          return category?.tags.some(tag => productTags.includes(tag.toLowerCase()));
        });
      });
    }

    // Filter by price
    const priceRange = priceRanges.find(r => r.id === selectedPriceRange);
    if (priceRange && priceRange.id !== "all") {
      filtered = filtered.filter(product => {
        return product.price >= priceRange.min && product.price < priceRange.max;
      });
    }

    // Sort products
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
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
              />
              <Label
                htmlFor={category.id}
                className="text-sm font-normal cursor-pointer"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
          <SelectTrigger className="w-full">
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
          className="w-full"
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
    <div className="min-h-screen bg-background">
      <StoreNavbar products={products} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Premium Quality Products</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-gradient">Nepges Store</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover premium devices, cutting-edge electronics, stylish accessories, and fashion-forward apparel. Experience excellence in every product.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="mb-12 text-center animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Collection</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Explore our carefully curated selection of premium products designed for modern living</p>
        </div>

        {products.length > 0 && (
          <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              {/* Mobile Filter Button */}
              <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                    {(selectedCategories.length > 0 || selectedPriceRange !== "all") && (
                      <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                        {selectedCategories.length + (selectedPriceRange !== "all" ? 1 : 0)}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
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
                Showing <span className="font-semibold text-foreground">{filteredAndSortedProducts.length}</span> of{" "}
                <span className="font-semibold text-foreground">{products.length}</span> products
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Label htmlFor="sort" className="text-sm font-medium whitespace-nowrap">
                Sort by:
              </Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger id="sort" className="w-[180px]">
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
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          {products.length > 0 && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  Filters
                </h3>
                <FilterContent />
              </div>
            </aside>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {products.length === 0 ? (
          <div className="text-center py-20 animate-scale-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-6">
              <StoreIcon className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">No Products Found</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Our store is brand new! Create your first product by telling me what you'd like to sell - just describe the product, set a price, and I'll add it for you.
            </p>
              <p className="text-sm text-muted-foreground">
                Example: "Add a smartphone for $599" or "Create a t-shirt product for $29.99"
              </p>
            </div>
            ) : filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-20 animate-scale-in">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-6">
                  <StoreIcon className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">No Products Match Your Filters</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Try adjusting your filters to see more products
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedPriceRange("all");
                  }}
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 stagger-animation">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-secondary/30 to-secondary/10 border-t border-border/50 py-16 mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">
              Nepges <span className="text-gradient">Store</span>
            </h3>
            <p className="text-muted-foreground text-lg">Your trusted shopping destination for premium products</p>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Nepges Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Store;
