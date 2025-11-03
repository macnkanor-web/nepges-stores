import { Link } from "react-router-dom";
import { Store, Smartphone, Watch, Headphones, Shirt } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Electronics", icon: Smartphone },
  { name: "Wearables", icon: Watch },
  { name: "Audio", icon: Headphones },
  { name: "Fashion", icon: Shirt },
];

export const StoreNavbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg z-50 border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/store" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-primary to-primary-glow p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-md">
              <Store className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">
              Nepges <span className="text-gradient">Store</span>
            </span>
          </Link>
          
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.name}
                    variant="ghost"
                    size="sm"
                    className="gap-2 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </Button>
                );
              })}
            </div>
            <div className="h-8 w-px bg-border hidden lg:block" />
            <ThemeToggle />
            <CartDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};
