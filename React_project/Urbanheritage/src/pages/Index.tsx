import { AboutSection } from "@/components/AboutSection";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { Footer } from "@/components/Footer";
import { HeritageHighlight } from "@/components/HeritageHighlight";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <HeritageHighlight />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
