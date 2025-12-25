import { Footer } from "@/components/FooterSection";
import { Navigation } from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const Heritage = () => {
  const { t } = useLanguage();

  const sites = [
    {
      name: "Imperial Palace",
      era: "19th Century",
      description: "The former residence of Ottoman governors, featuring distinctive coral-block construction and intricate wooden balconies.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800",
    },
    {
      name: "Sheikh Hanafi Mosque",
      era: "16th Century",
      description: "One of the oldest mosques in Eritrea, representing centuries of Islamic architectural tradition on the Red Sea coast.",
      image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=800",
    },
    {
      name: "Bank of Italy Building",
      era: "Early 20th Century",
      description: "A stunning example of Italian rationalist architecture, showcasing the colonial era's European influence on local building styles.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800",
    },
    {
      name: "Old Port Warehouses",
      era: "18th-19th Century",
      description: "Historic trading warehouses that once stored goods from across the Indian Ocean trading network.",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">{t("heritage.label")}</span>
            <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-8">
              {t("heritage.title1")} <span className="gradient-text">{t("heritage.title2")}</span>
            </h1>
            <div className="max-w-3xl">
              <div className="drop-cap text-muted-foreground text-lg leading-relaxed">
                {t("heritage.p1")}
              </div>
            </div>
          </div>
        </section>

        {/* Sites Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {sites.map((site) => (
                <article key={site.name} className="group card-hover bg-card rounded-3xl overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={site.image} 
                      alt={site.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-6 px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground rtl:left-auto rtl:right-6">
                      {site.era}
                    </span>
                  </div>
                  <div className="p-8">
                    <h2 className="font-serif font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {site.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{site.description}</p>
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

export default Heritage;
