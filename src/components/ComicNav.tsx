import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Origin", href: "#about" },
  { label: "Powers", href: "#skills" },
  { label: "Battles", href: "#experience" },
  { label: "Missions", href: "#projects" },
  { label: "Training", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const ComicNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b-4 border-foreground">
      <div className="container max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 border-2 border-foreground transition-transform group-hover:scale-105" style={{ boxShadow: "2px 2px 0px hsl(var(--comic-ink))" }}>
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-comic text-xl text-foreground hidden sm:block">MDT</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-comic text-sm px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors border-2 border-transparent hover:border-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border-2 border-foreground bg-card"
            style={{ boxShadow: "2px 2px 0px hsl(var(--comic-ink))" }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-comic text-lg px-4 py-3 text-foreground bg-card border-2 border-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                style={{ boxShadow: "2px 2px 0px hsl(var(--comic-ink))" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
