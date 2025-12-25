
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Building2, Users } from "lucide-react";

export const AboutSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Building2,
      title: t("about.feature1.title"),
      description: t("about.feature1.desc"),
    },
    {
      icon: Users,
      title: t("about.feature2.title"),
      description: t("about.feature2.desc"),
    },
    {
      icon: BookOpen,
      title: t("about.feature3.title"),
      description: t("about.feature3.desc"),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">{t("about.label")}</span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mt-4 mb-8">
              {t("about.title1")}
              <span className="gradient-text block">{t("about.title2")}</span>
            </h2>
            
            <div className="drop-cap text-muted-foreground text-lg leading-relaxed mb-8">
              {t("about.description")}
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex gap-4 items-start group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="card-hover rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800" 
                  alt="Historic architecture"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="card-hover rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=800" 
                  alt="Cultural heritage"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="card-hover rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800" 
                  alt="Historic doorway"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="card-hover rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544376798-76e7e7eb5c78?q=80&w=800" 
                  alt="Ancient ruins"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
