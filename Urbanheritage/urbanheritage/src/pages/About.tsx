import { Layout } from "@/components/Layout";
import { CheckCircle } from "lucide-react";

const values = [
  "Authentic preservation of historical sites",
  "Community-driven heritage initiatives",
  "Educational outreach programs",
  "Sustainable cultural tourism",
  "International collaboration",
  "Digital documentation of artifacts",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About Urban Heritage
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "150ms" }}>
              We are a passionate team dedicated to preserving and celebrating
              the architectural and cultural heritage of Massawa and the
              greater Red Sea region.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to protect and promote the rich cultural
                  legacy of Massawa, Urban Heritage brings together historians,
                  architects, and community advocates.
                </p>
                <p>
                  Massawa, often called the "Pearl of the Red Sea," boasts a
                  unique blend of Ottoman, Egyptian, and Italian colonial
                  architecture dating back centuries. Our mission is to ensure
                  these treasures are documented, preserved, and celebrated for
                  generations to come.
                </p>
                <p>
                  Through partnerships with local communities, international
                  organizations, and academic institutions, we work tirelessly
                  to maintain the integrity of historic sites while promoting
                  sustainable cultural tourism.
                </p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-8 heritage-shadow animate-scale-in">
              <h3 className="font-display text-xl font-semibold mb-6">
                Our Core Values
              </h3>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li
                    key={value}
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            A diverse group of professionals united by a shared passion for
            cultural preservation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Dr. Amanuel Tesfai", role: "Founder & Director" },
              { name: "Sara Ibrahim", role: "Head of Research" },
              { name: "Yohannes Berhe", role: "Community Liaison" },
            ].map((member, index) => (
              <div
                key={member.name}
                className="p-6 rounded-xl bg-background heritage-shadow animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-primary">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

