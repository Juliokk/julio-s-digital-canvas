import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SocialSidebar } from "@/components/SocialSidebar";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AuroraBackground />
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
