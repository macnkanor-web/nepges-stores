import { StoreNavbar } from "@/components/shop/StoreNavbar";
import Footer from "@/components/Footer";
import { mockProducts } from "@/data/mockProducts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Package, Truck, RefreshCw, CreditCard } from "lucide-react";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <StoreNavbar products={mockProducts} />
      <main className="pt-20">
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our products, shipping, returns, and payment methods.
              </p>
            </div>

            {/* Products Section */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-bold">Products</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="products-1" className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="hover:no-underline">
                    What types of products do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer a wide range of products including electronics, fashion, accessories, and lifestyle items. Our curated selection features high-quality products from trusted brands, ensuring you get the best value for your money.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="products-2" className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="hover:no-underline">
                    Are your products authentic?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, all our products are 100% authentic and sourced directly from authorized distributors and manufacturers. We guarantee the authenticity of every item sold on our platform.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="products-3" className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="hover:no-underline">
                    Do you offer product warranties?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, most of our products come with manufacturer warranties. The warranty period varies by product and manufacturer. Please check the product details page for specific warranty information.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Shipping Section */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-bold">Shipping</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="shipping-1" className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="hover:no-underline">
                    What are your shipping options?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Shipping costs are calculated at checkout based on your location and selected shipping method.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="shipping-2" className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="hover:no-underline">
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we ship to most countries worldwide. International shipping times vary by destination, typically 7-14 business days. Additional customs fees may apply depending on your country's regulations.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="shipping-3" className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="hover:no-underline">
                    How can I track my order?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website. You can also check your order status in your account dashboard.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Returns Section */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-bold">Returns & Refunds</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="returns-1" className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="hover:no-underline">
                    What is your return policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer a 30-day return policy for most items. Products must be in their original condition, unused, and in original packaging. Some items like personalized products or intimate items may not be eligible for return.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="returns-2" className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="hover:no-underline">
                    How do I initiate a return?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    To initiate a return, log into your account, go to your order history, select the order you want to return, and click "Request Return". Follow the instructions to complete the return process. You'll receive a prepaid return label via email.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="returns-3" className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="hover:no-underline">
                    When will I receive my refund?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Refunds are processed within 5-7 business days after we receive and inspect your returned item. The refund will be issued to your original payment method. Please allow an additional 3-5 business days for the refund to appear in your account.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Payments Section */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-bold">Payments</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="payments-1" className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="hover:no-underline">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and our Virtual Wallet system. All payments are processed securely using industry-standard encryption.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="payments-2" className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="hover:no-underline">
                    Is my payment information secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, absolutely. We use SSL encryption and comply with PCI DSS standards to protect your payment information. We never store your full credit card details on our servers. All transactions are processed through secure payment gateways.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="payments-3" className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="hover:no-underline">
                    Can I use multiple payment methods for one order?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Currently, we support one payment method per order. However, you can use your Virtual Wallet in combination with another payment method to split the payment. Simply load funds into your wallet and select it as a payment option at checkout.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
