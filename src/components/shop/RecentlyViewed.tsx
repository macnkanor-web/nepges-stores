import { useRecentlyViewedStore } from "@/stores/recentlyViewedStore";
import { ProductCard } from "./ProductCard";
import { Clock } from "lucide-react";

interface RecentlyViewedProps {
  excludeHandle?: string;
  maxItems?: number;
}

export const RecentlyViewed = ({ excludeHandle, maxItems = 4 }: RecentlyViewedProps) => {
  const items = useRecentlyViewedStore((state) => state.items);
  
  const filteredItems = items
    .filter((item) => item.handle !== excludeHandle)
    .slice(0, maxItems);

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-2xl font-bold">Recently Viewed</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </section>
  );
};
