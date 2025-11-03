import { useEffect, useState } from "react";
import { StoreNavbar } from "@/components/shop/StoreNavbar";
import { ProductCard } from "@/components/shop/ProductCard";
import { ShopifyProduct, storefrontApiRequest, STOREFRONT_QUERY } from "@/lib/shopify";
import { Loader2, Store as StoreIcon } from "lucide-react";

const Store = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_QUERY, { first: 50 });
        setProducts(data.data.products.edges);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <StoreNavbar />
      
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
        <div className="mb-16 text-center animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Collection</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Explore our carefully curated selection of premium products designed for modern living</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : products.length === 0 ? (
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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-animation">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
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
