import { Link } from "react-router-dom";
import { Store } from "lucide-react";
import { CartDrawer } from "./CartDrawer";

export const StoreNavbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/98 backdrop-blur-md z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link to="/store" className="flex items-center gap-3 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
              <Store className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Nepges <span className="text-primary">Store</span></span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/store" 
              className="text-sm font-semibold hover:text-primary transition-colors hidden sm:block uppercase tracking-wide"
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
