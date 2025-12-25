import { Footer } from "@/components/FooterSection";
import { Navigation } from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle } from "lucide-react";

const Activities = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("activities.act1.title"),
      status: "In Progress",
      description: t("activities.act1.desc"),
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
      achievements: ["Structural assessment completed", "Traditional materials sourced", "Master craftsmen engaged"],
    },
    {
      title: t("activities.act3.title"),
      status: "Ongoing",
      description: t("activities.act3.desc"),
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800",
      achievements: ["5,000+ photographs digitized", "3D models of key buildings", "Interactive virtual tours"],
    },
    {
      title: t("activities.act2.title"),
      status: "Active",
      description: t("activities.act2.desc"),
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
      achievements: ["120 apprentices trained", "Partnership with local schools", "Certificate program established"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">{t("activities.label")}</span>
            <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-8">
              {t("activities.title")} <span className="gradient-text">{t("activities.title2")}</span>
            </h1>
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              {t("about.description").substring(0, 150)}...
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {projects.map((project, index) => (
                <article 
                  key={project.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="card-hover rounded-3xl overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                      {project.status}
                    </span>
                    <h2 className="font-serif font-bold text-3xl text-foreground mb-4">{project.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                    <div className="space-y-3">
                      {project.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-center gap-3">
                          <CheckCircle size={18} className="text-primary shrink-0" />
                          <span className="text-foreground text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Activities;
