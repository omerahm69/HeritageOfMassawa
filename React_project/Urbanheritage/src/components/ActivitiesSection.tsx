import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ActivitiesSection = () => {
  const { t } = useLanguage();

  const activities = [
    {
      number: "01",
      title: t("activities.act1.title"),
      description: t("activities.act1.desc"),
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
    },
    {
      number: "02",
      title: t("activities.act2.title"),
      description: t("activities.act2.desc"),
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    },
    {
      number: "03",
      title: t("activities.act3.title"),
      description: t("activities.act3.desc"),
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">{t("activities.label")}</span>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mt-4">
            {t("activities.title")} <span className="gradient-text">{t("activities.title2")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <article 
              key={activity.number}
              className="group card-hover bg-background rounded-3xl overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <span className="absolute bottom-4 left-6 font-serif font-bold text-6xl gradient-text opacity-50">
                  {activity.number}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>
                <Link 
                  to="/activities"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-4 transition-all"
                >
                  {t("activities.learnMore")} <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
