import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlistStore } from "@/stores/wishlistStore";
import { MockProduct } from "@/data/mockProducts";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface WishlistButtonProps {
  product: MockProduct;
  variant?: "icon" | "default";
  className?: string;
}

export const WishlistButton = ({ product, variant = "icon", className }: WishlistButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { isInWishlist, addToWishlist, removeFromWishlist, isAuthenticated } = useWishlistStore();
  
  const inWishlist = isInWishlist(product.handle);

  const handleToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      toast.error("Please sign in to save items", {
        action: {
          label: "Sign In",
          onClick: () => navigate("/auth"),
        },
      });
      return;
    }

    setIsLoading(true);

    try {
      if (inWishlist) {
        const success = await removeFromWishlist(product.handle);
        if (success) {
          toast.success("Removed from wishlist");
        }
      } else {
        const success = await addToWishlist(product);
        if (success) {
          toast.success("Added to wishlist", {
            description: product.title,
          });
        }
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === "icon") {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={handleToggle}
        disabled={isLoading}
        className={cn(
          "h-8 w-8 rounded-full transition-all",
          inWishlist 
            ? "text-destructive hover:text-destructive/80 bg-destructive/10 hover:bg-destructive/20"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary/80",
          className
        )}
      >
        <Heart 
          className={cn("h-4 w-4", inWishlist && "fill-current")} 
        />
      </Button>
    );
  }

  return (
    <Button
      variant={inWishlist ? "secondary" : "outline"}
      onClick={handleToggle}
      disabled={isLoading}
      className={cn("gap-2", className)}
    >
      <Heart 
        className={cn("h-4 w-4", inWishlist && "fill-current text-destructive")}
      />
      {inWishlist ? "Saved" : "Save"}
    </Button>
  );
};
