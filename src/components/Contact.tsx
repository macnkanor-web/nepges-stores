import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-muted-foreground text-center mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Let's build something amazing together!
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:mac.nkanor@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mac.nkanor@gmail.com
                  </a>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+2349076759510"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +234 907 675 9510
                  </a>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Calabar, Cross River, Nigeria</p>
                </div>
              </div>
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-accent/80 hover:opacity-90 text-accent-foreground font-semibold px-8 shadow-[var(--shadow-strong)]"
                  asChild
                >
                  <a href="mailto:mac.nkanor@gmail.com">Send a Message</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
