import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Shield, Truck, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ThreeBackground } from "@/components/ThreeBackground";
import heroImage from "@/assets/hero-bg.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <ThreeBackground />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            Shop the Future
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 px-2">
            Discover amazing products at unbeatable prices
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button asChild size="lg" className="text-base sm:text-lg w-full sm:w-auto">
              <Link to="/store">
                Browse Store <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base sm:text-lg bg-white/10 backdrop-blur-sm border-white hover:bg-white hover:text-primary w-full sm:w-auto">
              <Link to="/auth">Sign Up Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">Why Shop With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Curated Selection</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Hand-picked products from top brands worldwide
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Secure Shopping</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Your data and payments are always protected
                </p>
              </CardContent>
            </Card>
            <Card className="sm:col-span-2 md:col-span-1">
              <CardContent className="pt-6 text-center">
                <Truck className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Free shipping on orders over $50
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">Get In Touch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-primary" />
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base break-all">support@shopstore.com</p>
            </div>
            <div className="text-center">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-primary" />
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Phone</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-primary" />
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Location</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Start Shopping?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            Join thousands of happy customers today
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base sm:text-lg w-full sm:w-auto">
            <Link to="/auth">
              Create Your Account <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
