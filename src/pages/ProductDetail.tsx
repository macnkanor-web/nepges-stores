import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StoreNavbar } from "@/components/shop/StoreNavbar";
import { ShopifyProduct, storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Loader2, ArrowLeft, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!handle) return;
      
      try {
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
        const productData = data.data.product;
        setProduct(productData);
        
        if (productData?.variants?.edges?.[0]) {
          setSelectedVariant(productData.variants.edges[0].node);
          const initialOptions: Record<string, string> = {};
          productData.variants.edges[0].node.selectedOptions.forEach((opt: any) => {
            initialOptions[opt.name] = opt.value;
          });
          setSelectedOptions(initialOptions);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [handle]);

  const handleOptionChange = (optionName: string, value: string) => {
    const newOptions = { ...selectedOptions, [optionName]: value };
    setSelectedOptions(newOptions);
    
    const variant = product?.variants.edges.find(({ node }: any) => {
      return node.selectedOptions.every((opt: any) => newOptions[opt.name] === opt.value);
    });
    
    if (variant) {
      setSelectedVariant(variant.node);
    }
  };

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: product.title
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <StoreNavbar />
        <div className="container mx-auto px-4 pt-32 flex justify-center items-center h-screen">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <StoreNavbar />
        <div className="container mx-auto px-4 pt-32 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/store">
            <Button>Back to Store</Button>
          </Link>
        </div>
      </div>
    );
  }

  const image = product.images?.edges?.[0]?.node;
  const price = selectedVariant ? parseFloat(selectedVariant.price.amount) : parseFloat(product.priceRange.minVariantPrice.amount);
  const currency = selectedVariant ? selectedVariant.price.currencyCode : product.priceRange.minVariantPrice.currencyCode;

  return (
    <div className="min-h-screen bg-background">
      <StoreNavbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <Link to="/store" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Store
        </Link>

        <div className="grid md:grid-cols-2 gap-12 animate-fade-in">
          {/* Image Section */}
          <div className="aspect-square rounded-lg overflow-hidden bg-secondary/20">
            {image ? (
              <img 
                src={image.url} 
                alt={image.altText || product.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ShoppingCart className="h-32 w-32 text-muted-foreground" />
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <div className="text-3xl font-bold text-primary mb-6">
                {currency} {price.toFixed(2)}
              </div>
              
              {selectedVariant?.availableForSale ? (
                <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="secondary" className="bg-red-500/10 text-red-700 dark:text-red-400">
                  Out of Stock
                </Badge>
              )}
            </div>

            {product.description && (
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            )}

            {/* Options */}
            {product.options?.map((option) => (
              <div key={option.name}>
                <h3 className="font-semibold mb-3">{option.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {option.values.map((value) => (
                    <Button
                      key={value}
                      variant={selectedOptions[option.name] === value ? "default" : "outline"}
                      onClick={() => handleOptionChange(option.name, value)}
                    >
                      {value}
                    </Button>
                  ))}
                </div>
              </div>
            ))}

            <Button 
              size="lg" 
              className="w-full gap-2"
              onClick={handleAddToCart}
              disabled={!selectedVariant?.availableForSale}
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
