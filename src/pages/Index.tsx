import { ComicNav } from "@/components/ComicNav";
import { CoverPage } from "@/components/sections/CoverPage";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Manu Dev Tyagi | Java Backend Developer Portfolio</title>
        <meta 
          name="description" 
          content="Java Backend Developer specializing in Spring Boot, REST APIs, and scalable systems. View my comic-book inspired portfolio showcasing projects and experience." 
        />
        <meta name="keywords" content="Java Developer, Backend Developer, Spring Boot, REST API, Manu Dev Tyagi, Portfolio" />
        <link rel="canonical" href="https://manudevtyagi.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <ComicNav />
        
        <main className="pt-16">
          {/* Page 1: Cover */}
          <CoverPage />
          
          {/* Comic Divider */}
          <div className="comic-divider" />
          
          {/* Page 2: About */}
          <AboutSection />
          
          {/* Comic Divider */}
          <div className="comic-divider" />
          
          {/* Page 3: Skills */}
          <SkillsSection />
          
          {/* Comic Divider */}
          <div className="comic-divider" />
          
          {/* Page 4: Experience */}
          <ExperienceSection />
          
          {/* Comic Divider */}
          <div className="comic-divider" />
          
          {/* Page 5: Projects */}
          <ProjectsSection />
          
          {/* Comic Divider */}
          <div className="comic-divider" />
          
          {/* Page 6: Education */}
          <EducationSection />
          
          {/* Comic Divider */}
          <div className="comic-divider" />
          
          {/* Final Page: Contact */}
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default Index;
