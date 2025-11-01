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
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Premium Quality Products</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Welcome to <span className="text-primary">Nepges Store</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Your one-stop destination for premium devices, cutting-edge gadgets, stylish accessories, fashion-forward clothes, and much more. Experience quality and style with every purchase.
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
      <footer className="bg-secondary/50 border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Nepges Store</h3>
            <p className="text-muted-foreground">Your trusted shopping destination</p>
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
