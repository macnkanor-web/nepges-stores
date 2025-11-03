import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Store } from "lucide-react";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;
  
  const image = node.images?.edges?.[0]?.node;
  const variant = node.variants.edges[0]?.node;
  const price = parseFloat(node.priceRange.minVariantPrice.amount);
  const currency = node.priceRange.minVariantPrice.currencyCode;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!variant) {
      toast.error("Product unavailable");
      return;
    }

    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: node.title
    });
  };

  return (
    <Card className="overflow-hidden hover-lift group border-border/50 bg-card/50 backdrop-blur-sm">
      <Link to={`/store/product/${node.handle}`}>
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary/30 to-secondary/10">
          {image ? (
            <img 
              src={image.url} 
              alt={image.altText || node.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
              <Store className="h-16 w-16 text-muted-foreground/50" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-5 space-y-3">
          <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">{node.title}</h3>
          {node.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{node.description}</p>
          )}
          
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Price</p>
              <span className="text-2xl font-bold text-gradient">
                {currency} {price.toFixed(2)}
              </span>
            </div>
            
            <Button 
              size="default" 
              onClick={handleAddToCart}
              className="gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  );
};
