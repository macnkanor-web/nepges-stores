import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Store, ChevronLeft, ChevronRight } from "lucide-react";
import { MockProduct } from "@/data/mockProducts";
import { useCartStore } from "@/stores/cartStore";
import { WishlistButton } from "@/components/shop/WishlistButton";
import { toast } from "sonner";

interface AnimatedProductCardProps {
  product: MockProduct;
  index?: number;
}

export const AnimatedProductCard = ({ product, index = 0 }: AnimatedProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  
  const variants = product.variants || [];
  const currentVariant = variants[currentVariantIndex] || variants[0];
  const images = product.images && product.images.length > 1 ? product.images : [product.image];

  // Auto-rotate variants
  useEffect(() => {
    if (!isAutoPlaying || variants.length <= 1) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentVariantIndex((prev) => (prev + 1) % variants.length);
    }, 3000 + index * 500); // Stagger the animations

    return () => clearInterval(interval);
  }, [isAutoPlaying, variants.length, index]);

  const handlePrevVariant = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentVariantIndex((prev) => (prev - 1 + variants.length) % variants.length);
  };

  const handleNextVariant = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentVariantIndex((prev) => (prev + 1) % variants.length);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!currentVariant) {
      toast.error("Product unavailable");
      return;
    }

    const cartItem = {
      product,
      variantId: currentVariant.id,
      variantTitle: currentVariant.title,
      price: currentVariant.price,
      currencyCode: product.currencyCode,
      quantity: 1,
      selectedOptions: currentVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${product.title} - ${currentVariant.title}`
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut" as const,
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{ perspective: 1000 }}
    >
      <Card className="overflow-hidden group border-border/50 bg-card/50 backdrop-blur-sm relative">
        {/* Wishlist Button */}
        <div className="absolute top-3 right-3 z-20">
          <WishlistButton product={product} variant="icon" />
        </div>
        
        {/* Variant Navigation */}
        {variants.length > 1 && (
          <>
            <motion.button
              onClick={handlePrevVariant}
              className="absolute left-2 top-1/3 z-20 bg-background/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>
            <motion.button
              onClick={handleNextVariant}
              className="absolute right-2 top-1/3 z-20 bg-background/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </>
        )}

        <Link to={`/store/product/${product.handle}`}>
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary/30 to-secondary/10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentVariantIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  rotateY: { duration: 0.4 },
                }}
                className="absolute inset-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={`${product.title} - ${currentVariant?.title || ''}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                    <Store className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            
            {/* Variant indicator dots */}
            {variants.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {variants.map((_, idx) => (
                  <motion.div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentVariantIndex 
                        ? 'bg-primary w-4' 
                        : 'bg-background/60 w-1.5'
                    }`}
                    animate={{ 
                      scale: idx === currentVariantIndex ? 1 : 0.8,
                    }}
                  />
                ))}
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <motion.div 
            className="p-5 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {product.title}
            </h3>
            
            {/* Current Variant Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVariant?.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <span className="text-xs px-2 py-1 bg-secondary/50 rounded-full text-muted-foreground">
                  {currentVariant?.title || 'Default'}
                </span>
              </motion.div>
            </AnimatePresence>
            
            {product.description && (
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                {product.description}
              </p>
            )}
            
            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Price</p>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentVariant?.price}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-2xl font-bold text-gradient inline-block"
                  >
                    {product.currencyCode} {(currentVariant?.price || product.price).toFixed(2)}
                  </motion.span>
                </AnimatePresence>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="default" 
                  onClick={handleAddToCart}
                  className="gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </Card>
    </motion.div>
  );
};
