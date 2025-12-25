import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsla(30, 15%, 8%, 0.6), hsla(30, 15%, 8%, 0.8)), url('https://images.unsplash.com/photo-1568322503175-67a3bffee8b6?q=80&w=2070')`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="animate-fade-up text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
          {t("hero.tagline")}
        </p>
        
        <h1 className="animate-fade-up font-serif font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary-foreground text-shadow-hero leading-none mb-8" style={{ animationDelay: "0.1s" }}>
          <span className="gradient-text">{t("hero.title1")}</span>
          <br />
          <span className="text-primary-foreground">{t("hero.title2")}</span>
        </h1>

        <p className="animate-fade-up max-w-2xl mx-auto text-lg sm:text-xl text-primary-foreground/80 mb-12 leading-relaxed" style={{ animationDelay: "0.2s" }}>
          {t("hero.description")}
        </p>

        <div className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.3s" }}>
          <Button 
            size="lg"
            className="btn-premium text-primary-foreground px-10 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <span className="relative z-10">{t("hero.cta1")}</span>
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-10 py-6 text-lg font-semibold rounded-full"
          >
            {t("hero.cta2")}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};
