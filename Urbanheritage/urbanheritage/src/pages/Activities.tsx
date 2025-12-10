import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Camera, FileText, Globe, Landmark, Users } from "lucide-react";

const activities = [
  {
    icon: Camera,
    title: "Documentation Projects",
    status: "Ongoing",
    description:
      "Systematic photography and 3D scanning of historic buildings and artifacts to create comprehensive digital archives.",
  },
  {
    icon: BookOpen,
    title: "Educational Workshops",
    status: "Monthly",
    description:
      "Regular workshops for students and community members about local history, traditional crafts, and preservation techniques.",
  },
  {
    icon: Users,
    title: "Community Tours",
    status: "Weekly",
    description:
      "Guided heritage walks through the old town, led by local historians and trained community guides.",
  },
  {
    icon: Landmark,
    title: "Restoration Projects",
    status: "Ongoing",
    description:
      "Active restoration of key historical buildings using traditional materials and techniques.",
  },
  {
    icon: FileText,
    title: "Research Publications",
    status: "Quarterly",
    description:
      "Academic papers and public reports documenting our findings and preservation methodologies.",
  },
  {
    icon: Globe,
    title: "International Partnerships",
    status: "Active",
    description:
      "Collaborations with UNESCO, universities, and heritage organizations worldwide.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Digital Archive Launch",
    description: "Launching comprehensive online archive of Massawa's heritage",
  },
  {
    year: "2023",
    title: "Community Guide Training",
    description: "Trained 20+ local guides in heritage interpretation",
  },
  {
    year: "2022",
    title: "Sheikh Hanafi Mosque Survey",
    description: "Complete architectural survey and documentation",
  },
  {
    year: "2021",
    title: "Foundation Established",
    description: "Urban Heritage officially registered as non-profit",
  },
];

const Activities = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Activities
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "150ms" }}>
              From documentation to education, explore the various initiatives
              we undertake to preserve and promote Massawa's cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card
                key={activity.title}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <activity.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{activity.status}</Badge>
                  </div>
                  <CardTitle className="font-display text-lg mt-4">
                    {activity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Recent Milestones
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`hidden md:block flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="inline-block p-6 rounded-xl bg-background heritage-shadow">
                      <span className="text-sm font-semibold text-accent">
                        {item.year}
                      </span>
                      <h3 className="font-display text-lg font-semibold mt-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-2" />
                  <div className="md:hidden ml-16 p-6 rounded-xl bg-background heritage-shadow flex-1">
                    <span className="text-sm font-semibold text-accent">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-semibold mt-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
