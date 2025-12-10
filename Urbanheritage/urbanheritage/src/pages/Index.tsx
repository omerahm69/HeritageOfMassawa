import heroImage from "@/assets/hero-massawa.jpg";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Heart, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Building2, title: t("mission.preservation.title"), description: t("mission.preservation.description") },
    { icon: Users, title: t("mission.community.title"), description: t("mission.community.description") },
    { icon: Heart, title: t("mission.education.title"), description: t("mission.education.description") },
  ];

  return (
    <Layout>
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {t("hero.title")}
            <span className="block text-accent">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button asChild size="lg" className="text-base">
              <Link to="/massawa">{t("hero.exploreMassawa")}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <Link to="/about">{t("hero.learnMore")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{t("mission.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("mission.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-xl bg-background heritage-shadow hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">{t("cta.subtitle")}</p>
          <Button asChild size="lg" variant="secondary" className="text-base">
            <Link to="/contact">{t("cta.getInvolved")}<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
