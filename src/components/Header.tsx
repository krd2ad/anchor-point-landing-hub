import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#team" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Anchor Point Lending" className="h-10 w-10 object-contain" />
          <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
            Anchor Point Lending
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6">
            <a href="#team">Get Started</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border/50"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="mt-3 w-full bg-primary text-primary-foreground">
            <a href="#team" onClick={() => setMobileOpen(false)}>Get Started</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
