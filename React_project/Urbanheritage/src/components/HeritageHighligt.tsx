import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export const HeritageHighlight = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="card-hover rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200" 
                alt="Massawa historic port"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-lg rtl:-left-6 rtl:right-auto">
              <div className="text-center">
                <span className="font-serif font-bold text-4xl gradient-text">500+</span>
                <p className="text-muted-foreground text-sm">{t("heritage.years")}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">{t("heritage.label")}</span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mt-4 mb-6">
              {t("heritage.title1")}
              <span className="gradient-text block">{t("heritage.title2")}</span>
            </h2>
            
            <div className="drop-cap text-muted-foreground text-lg leading-relaxed mb-6">
              {t("heritage.p1")}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("heritage.p2")}
            </p>

            <Link to="/heritage">
                <Button
                size="lg"
                className="btn-premium text-primary-foreground px-8 py-6 text-base font-semibold rounded-full"
                >
                <span className="relative z-10">{t("heritage.cta")}</span>
                </Button>
            </Link>
            </div>
        </div>
    </div>
    </section>
);
};
