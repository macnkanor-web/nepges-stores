import { Link, useNavigate } from "react-router-dom";
import { Store, Smartphone, Watch, Headphones, Shirt, Search, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CartDrawer } from "./CartDrawer";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { MockProduct } from "@/data/mockProducts";

const categories = [
  { name: "Electronics", icon: Smartphone, tags: ["electronics", "phone", "smartphone", "laptop"] },
  { name: "Wearables", icon: Watch, tags: ["wearables", "watch", "smartwatch", "fitness"] },
  { name: "Audio", icon: Headphones, tags: ["audio", "headphones", "speaker", "sound"] },
  { name: "Fashion", icon: Shirt, tags: ["fashion", "clothing", "apparel", "shirt"] },
];

interface StoreNavbarProps {
  products?: MockProduct[];
}

export const StoreNavbar = ({ products = [] }: StoreNavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  const getCategoryProducts = (categoryTags: string[]) => {
    return products.filter(product => {
      const productTags = product.tags?.join(',').toLowerCase() || "";
      return categoryTags.some(tag => productTags.includes(tag.toLowerCase()));
    }).slice(0, 4);
  };

  const handleSearchSelect = (handle: string) => {
    setSearchOpen(false);
    navigate(`/store/product/${handle}`);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search products by name, category, or tags..." />
        <CommandList>
          <CommandEmpty>No products found.</CommandEmpty>
          <CommandGroup heading="Products">
            {products.map((product) => (
              <CommandItem
                key={product.id}
                value={`${product.title} ${product.tags?.join(' ')} ${product.description}`}
                onSelect={() => handleSearchSelect(product.handle)}
                className="flex items-center gap-3 p-2 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-md overflow-hidden bg-secondary/30 flex-shrink-0">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Store className="h-6 w-6 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{product.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{product.description}</p>
                  <p className="text-sm font-semibold text-primary mt-0.5">
                    {product.currencyCode} {product.price.toFixed(2)}
                  </p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
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
          
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <Button
              variant="outline"
              className="w-full justify-start text-muted-foreground hover:text-foreground"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-4 w-4 mr-2" />
              <span>Search products...</span>
              <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>
          
          <div className="flex items-center gap-3">
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {categories.map((category) => {
                  const Icon = category.icon;
                  const categoryProducts = getCategoryProducts(category.tags);
                  
                  return (
                    <NavigationMenuItem key={category.name}>
                      <NavigationMenuTrigger className="gap-2 bg-transparent hover:bg-primary/5">
                        <Icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[500px] p-4">
                          <h4 className="text-sm font-semibold mb-3 text-foreground">{category.name}</h4>
                          {categoryProducts.length === 0 ? (
                            <div className="text-center py-8 text-muted-foreground">
                              <Icon className="h-8 w-8 mx-auto mb-2 opacity-50" />
                              <p className="text-sm">No products in this category yet</p>
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 gap-3">
                              {categoryProducts.map((product) => (
                                <Link
                                  key={product.id}
                                  to={`/store/product/${product.handle}`}
                                  className="group flex gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                                >
                                  <div className="w-16 h-16 rounded-md overflow-hidden bg-secondary/30 flex-shrink-0">
                                    {product.image ? (
                                      <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                      />
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center">
                                        <Store className="h-6 w-6 text-muted-foreground/50" />
                                      </div>
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h5 className="text-sm font-medium line-clamp-1 group-hover:text-primary transition-colors">
                                      {product.title}
                                    </h5>
                                    <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                      {product.description}
                                    </p>
                                    <p className="text-sm font-semibold text-primary mt-1">
                                      {product.currencyCode} {product.price.toFixed(2)}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <div className="h-8 w-px bg-border hidden lg:block" />
            <ThemeToggle />
            <CartDrawer />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSignOut}
              title="Sign Out"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};
