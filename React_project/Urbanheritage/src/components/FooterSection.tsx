import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/About", label: t("nav.about") },
    { href: "/Our_Activities", label: t("nav.activities") },
    { href: "/Urban_Heritage", label: t("nav.heritage") },
    { href: "/Contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent">
                  <div className="absolute inset-1 rounded-full bg-secondary flex items-center justify-center">
                    <span className="font-serif font-bold text-xl text-primary">U</span>
                  </div>
                </div>
                <div>
                  <span className="font-serif font-bold text-lg text-primary">{t("hero.title1")}</span>
                  <span className="font-serif font-light text-lg text-secondary-foreground">{t("hero.title2")}</span>
                </div>
              </div>
            </Link>
            <p className="text-secondary-foreground/70 leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">{t("footer.quickLinks")}</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">{t("footer.contactUs")}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  Massawa Old Town, Eritrea
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@urbanheritage.org" className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors">
                  info@urbanheritage.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  +291 1 123 456
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} Urban Heritage. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
