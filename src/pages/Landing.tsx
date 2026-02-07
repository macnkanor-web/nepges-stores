import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Shield, Truck, Mail, Phone, MapPin, Sparkles, Star, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ThreeBackground } from "@/components/ThreeBackground";
import { motion } from "framer-motion";

const features = [
  { 
    icon: ShoppingBag, 
    title: "Curated Selection", 
    desc: "Hand-picked products from top brands worldwide",
    color: "from-primary to-primary-glow"
  },
  { 
    icon: Shield, 
    title: "Secure Shopping", 
    desc: "Your data and payments are always protected",
    color: "from-primary to-orange-400"
  },
  { 
    icon: Truck, 
    title: "Fast Delivery", 
    desc: "Free shipping on orders over $50",
    color: "from-primary-glow to-primary"
  },
];

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "10K+", label: "Products" },
  { value: "99%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f08] via-[#2d1810] to-[#1a0f08]">
          <ThreeBackground />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-primary/20 backdrop-blur-md rounded-full border border-primary/40"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Welcome to the Future of Shopping</span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="text-cream-100 drop-shadow-lg">Shop the</span>
              <br />
              <span className="text-gradient-warm">Future Today</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-10 text-cream-200/90 max-w-3xl mx-auto leading-relaxed font-light px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Discover amazing products at unbeatable prices. Premium quality, 
              exceptional service, unforgettable experience.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="text-lg bg-gradient-warm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 rounded-full px-8 py-6 font-semibold"
              >
                <Link to="/store">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Browse Store
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-lg bg-card/20 backdrop-blur-sm border-cream-200/30 text-cream-100 hover:bg-card/40 hover:text-cream-100 rounded-full px-8 py-6 font-semibold"
              >
                <Link to="/auth">
                  <Zap className="mr-2 h-5 w-5" />
                  Sign Up Free
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Stats Bar */}
          <motion.div 
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-cream-200/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-cream-200/50 flex items-start justify-center p-2"
          >
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.08),transparent_50%)]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Shop <span className="text-gradient">With Us</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-warm mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group h-full">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-warm mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email", value: "support@nepges.com" },
              { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
              { icon: MapPin, title: "Location", value: "San Francisco, CA" },
            ].map((contact, index) => (
              <motion.div 
                key={contact.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{contact.title}</h3>
                <p className="text-muted-foreground text-sm">{contact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(35_40%_98%/0.1),transparent_50%)]" />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Star className="w-12 h-12 mx-auto mb-6 text-primary-foreground/80" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of happy customers and discover amazing products today
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-card text-primary hover:bg-card/90 rounded-full px-10 py-6 text-lg font-semibold shadow-xl"
          >
            <Link to="/auth">
              Create Your Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">
            Nepges <span className="text-gradient">Store</span>
          </h3>
          <p className="text-muted-foreground mb-6">Your trusted destination for premium products</p>
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Nepges Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
