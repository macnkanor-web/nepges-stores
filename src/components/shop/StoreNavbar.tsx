import { Link } from "react-router-dom";
import { Store } from "lucide-react";
import { CartDrawer } from "./CartDrawer";

export const StoreNavbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/store" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Store className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gradient">Nepges Store</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/store" 
              className="text-sm font-medium hover:text-primary transition-colors hidden sm:block"
            >
              Products
            </Link>
            <CartDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};
