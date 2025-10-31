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
    <Card className="overflow-hidden hover-lift group">
      <Link to={`/store/product/${node.handle}`}>
        <div className="relative aspect-square overflow-hidden bg-secondary/20">
          {image ? (
            <img 
              src={image.url} 
              alt={image.altText || node.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Store className="h-16 w-16 text-muted-foreground" />
            </div>
          )}
        </div>
        
        <div className="p-4 space-y-3">
          <h3 className="font-semibold text-lg line-clamp-1">{node.title}</h3>
          {node.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{node.description}</p>
          )}
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-xl font-bold text-primary">
              {currency} {price.toFixed(2)}
            </span>
            
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  );
};
