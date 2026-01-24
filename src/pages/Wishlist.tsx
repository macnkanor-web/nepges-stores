import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StoreNavbar } from "@/components/shop/StoreNavbar";
import { ProductCard } from "@/components/shop/ProductCard";
import { useWishlistStore } from "@/stores/wishlistStore";
import { Skeleton } from "@/components/ui/skeleton";

const Wishlist = () => {
  const { items, isLoading, isAuthenticated, fetchWishlist } = useWishlistStore();

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  return (
    <div className="min-h-screen bg-background">
      <StoreNavbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/store">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-destructive fill-destructive" />
            <h1 className="text-3xl font-bold">My Wishlist</h1>
          </div>
        </div>

        {!isAuthenticated ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Heart className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Sign in to view your wishlist</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Create an account or sign in to save your favorite items and access them from any device.
            </p>
            <Link to="/auth">
              <Button size="lg" className="gap-2">
                Sign In
              </Button>
            </Link>
          </div>
        ) : isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Heart className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Start adding items you love by clicking the heart icon on any product.
            </p>
            <Link to="/store">
              <Button size="lg" className="gap-2">
                <ShoppingBag className="h-5 w-5" />
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-6">
              {items.length} item{items.length !== 1 ? "s" : ""} saved
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <ProductCard key={item.id} product={item.productData} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Wishlist;
