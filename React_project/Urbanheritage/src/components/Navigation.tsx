


import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { cn } from '@/lib/utils'; // or your path
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';


export const Navigation = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    

    const navLinks = [
        { href: "/", label: t("nav.home") },
        {  href: "/About", label: t("nav.about") },
        { href: "/Our_Activities", label: t("nav.activities") },
        { href: "/Urban_Heritage", label: t("nav.heritage") },
        { href: "/Contact", label: t("nav.contact") },
    ];

return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent animate-glow">
              <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                <span className="font-serif font-bold text-2xl gradient-text">U</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-xl gradient-text">{t("hero.title1")}</span>
              <span className="font-serif font-light text-xl text-foreground">{t("hero.title2")}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "gradient-underline font-medium text-sm uppercase tracking-wider transition-colors duration-300",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-medium text-sm uppercase tracking-wider transition-colors duration-300 py-2",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
