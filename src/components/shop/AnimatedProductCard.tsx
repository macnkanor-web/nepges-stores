import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MockProduct } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { WishlistButton } from "./WishlistButton";
import { toast } from "sonner";

interface AnimatedProductCardProps {
  product: MockProduct;
  index: number;
}

export const AnimatedProductCard = ({ product, index }: AnimatedProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  // Get all images from the images array
  const allImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  const hasMultipleImages = allImages.length > 1;

  // Auto-rotate through images
  useEffect(() => {
    if (hasMultipleImages && !isHovered) {
      autoRotateRef.current = setInterval(() => {
        setIsFlipping(true);
        setTimeout(() => {
          setCurrentImageIndex(prev => (prev + 1) % allImages.length);
          setIsFlipping(false);
        }, 300);
      }, 3500);
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [hasMultipleImages, allImages.length, isHovered]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentImageIndex(prev => (prev - 1 + allImages.length) % allImages.length);
      setIsFlipping(false);
    }, 300);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentImageIndex(prev => (prev + 1) % allImages.length);
      setIsFlipping(false);
    }, 300);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const currentVariant = product.variants?.[0];
    
    addItem({
      product,
      variantId: currentVariant?.id || product.id,
      variantTitle: currentVariant?.title || 'Default',
      price: currentVariant?.price || product.price,
      currencyCode: product.currencyCode,
      quantity: 1,
      selectedOptions: currentVariant?.selectedOptions || []
    });
    toast.success(`${product.title} added to cart`);
  };

  const currentImage = allImages[currentImageIndex] || product.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -5 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      layout
      className="group"
    >
      <Link
        to={`/store/product/${product.handle}`}
        className="block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500"
          whileHover={{ 
            y: -8,
            boxShadow: "0 20px 40px -15px hsl(24 90% 50% / 0.2)"
          }}
          style={{ perspective: "1000px" }}
        >
          {/* Image Container with 3D Flip Effect */}
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ rotateY: isFlipping ? 90 : 0, opacity: 0.5 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0.5 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0"
                style={{ 
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden"
                }}
              >
                {currentImage ? (
                  <img
                    src={currentImage}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                    <span className="text-4xl text-muted-foreground/30">📦</span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Image Navigation Arrows */}
            {hasMultipleImages && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm shadow-lg flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm shadow-lg flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </>
            )}

            {/* Image Dots Indicator */}
            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {allImages.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsFlipping(true);
                      setTimeout(() => {
                        setCurrentImageIndex(idx);
                        setIsFlipping(false);
                      }, 300);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex 
                        ? 'bg-primary w-6 shadow-lg' 
                        : 'bg-card/70 hover:bg-card'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            )}

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3 z-10"
            >
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-lg rounded-full px-5"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
              <Button 
                size="icon" 
                variant="secondary"
                className="rounded-full shadow-lg bg-card/90 backdrop-blur-sm hover:bg-card"
              >
                <Eye className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Wishlist Button */}
            <div className="absolute top-4 right-4 z-10" onClick={(e) => e.preventDefault()}>
              <WishlistButton product={product} />
            </div>

            {/* Featured Badge */}
            {product.tags?.includes('featured') && (
              <motion.div 
                className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                FEATURED
              </motion.div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-5 space-y-3">
            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3.5 h-3.5 ${i < 4 ? 'fill-primary text-primary' : 'text-muted-foreground/30'}`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">(4.0)</span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {product.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xl font-bold text-primary">
                {product.currencyCode} {product.price.toFixed(2)}
              </span>
            </div>

            {/* Variant Info */}
            {product.variants && product.variants.length > 1 && (
              <p className="text-xs text-muted-foreground">
                {product.variants.length} variants available
              </p>
            )}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
