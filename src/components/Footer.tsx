import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/macnkanor-web/portfolio-web"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-nkanor-172a83381"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mac.nkanor@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Samuel Nkanor. Made with</span>
            <Heart className="w-4 h-4 fill-accent text-accent animate-pulse" />
            <span>and passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
