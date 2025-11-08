import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Loader2 } from "lucide-react";
import { StoreNavbar } from "@/components/shop/StoreNavbar";
import { mockProducts, MockProduct } from "@/data/mockProducts";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams();
  const addItem = useCartStore(state => state.addItem);
  const [product, setProduct] = useState<MockProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.handle === handle);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Set initial selected variant
      const firstVariant = foundProduct.variants[0];
      if (firstVariant) {
        setSelectedVariant(firstVariant);
        
        // Set initial selected options
        const initialOptions: Record<string, string> = {};
        firstVariant.selectedOptions.forEach(opt => {
          initialOptions[opt.name] = opt.value;
        });
        setSelectedOptions(initialOptions);
      }
    }
    
    setLoading(false);
  }, [handle]);

  const handleOptionChange = (optionName: string, value: string) => {
    const newSelectedOptions = {
      ...selectedOptions,
      [optionName]: value
    };
    setSelectedOptions(newSelectedOptions);

    // Find variant matching all selected options
    if (product) {
      const matchingVariant = product.variants.find(variant => {
        return variant.selectedOptions.every(opt => 
          newSelectedOptions[opt.name] === opt.value
        );
      });
      
      if (matchingVariant) {
        setSelectedVariant(matchingVariant);
      }
    }
  };

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      currencyCode: product.currencyCode,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions
    };
    
    addItem(cartItem);
    toast.success("Added to cart!", {
      description: `${product.title} - ${selectedVariant.title}`
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <StoreNavbar products={mockProducts} />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/store">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Store
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <StoreNavbar products={mockProducts} />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <Link to="/store">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Store
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl overflow-hidden">
            {product.image ? (
              <img 
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ShoppingCart className="h-24 w-24 text-muted-foreground/30" />
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <p className="text-3xl font-bold text-gradient">
                {product.currencyCode} {selectedVariant?.price.toFixed(2) || product.price.toFixed(2)}
              </p>
            </div>

            {product.description && (
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            )}

            {/* Product Options */}
            {product.options.map((option) => (
              <div key={option.name} className="space-y-3">
                <label className="text-sm font-semibold uppercase tracking-wide">
                  {option.name}
                </label>
                <div className="flex flex-wrap gap-2">
                  {option.values.map((value) => (
                    <Button
                      key={value}
                      variant={selectedOptions[option.name] === value ? "default" : "outline"}
                      onClick={() => handleOptionChange(option.name, value)}
                      className="min-w-[80px]"
                    >
                      {value}
                    </Button>
                  ))}
                </div>
              </div>
            ))}

            {/* Add to Cart Button */}
            <div className="pt-6 border-t">
              <Button
                size="lg"
                className="w-full md:w-auto gap-2"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingCart className="h-5 w-5" />
                {selectedVariant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              {selectedVariant?.availableForSale && (
                <p className="text-sm text-muted-foreground mt-4">
                  ✓ In stock and ready to ship
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
