import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-glow/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white animate-fade-in">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-scale-in">
          Hi, I'm <span className="text-white drop-shadow-lg">Samuel Nkanor</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-slide-up">
          Frontend / Backend Developer & Software Engineer in Training
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-[var(--shadow-strong)] transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold px-8"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://github.com/macnkanor-web/portfolio-web"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-nkanor-172a83381"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:mac.nkanor@gmail.com"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Email Contact"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="inline-block animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-white/70" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
