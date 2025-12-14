import { ComicPanel, CaptionBox, ActionLabel } from "@/components/ComicPanel";
import { ComicButton } from "@/components/ComicButton";
import { SkillBadge } from "@/components/SkillBadge";
import { Github, ExternalLink, Rocket } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  github?: string;
  color: "yellow" | "red" | "blue";
}

export const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Team Engagement Platform",
      subtitle: "Backend",
      description: [
        "Scalable backend for chat, rewards, badges, surveys",
        "Secure role-based access control",
        "Modular architecture for easy scaling",
      ],
      tech: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/manudevtyagi05",
      color: "red",
    },
    {
      title: "Blog Management System",
      subtitle: "Backend",
      description: [
        "Content creation & management backend",
        "Robust validation & exception handling",
        "Clean REST API design",
      ],
      tech: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/manudevtyagi05",
      color: "blue",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-muted/30">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <CaptionBox color="red" className="text-2xl md:text-3xl">
            PAGE 5
          </CaptionBox>
          <h2 className="font-comic text-4xl md:text-5xl text-foreground">
            MISSIONS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ComicPanel
              key={project.title}
              variant="large"
              className="p-6 opacity-0 animate-pop-in flex flex-col"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              {/* Project Badge */}
              <div className="flex items-center gap-2 mb-3">
                <Rocket className={`w-5 h-5 ${
                  project.color === "red" ? "text-primary" : "text-secondary"
                }`} />
                <span className={`font-comic text-sm px-2 py-0.5 border-2 border-foreground ${
                  project.color === "red" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}>
                  {project.subtitle}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-comic text-2xl md:text-3xl text-foreground mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <ul className="space-y-2 mb-4 flex-grow">
                {project.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">★</span>
                    <span className="font-body text-foreground">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <SkillBadge key={tech} skill={tech} />
                ))}
              </div>

              {/* GitHub Link */}
              {project.github && (
                <ComicButton
                  variant={project.color === "red" ? "primary" : "secondary"}
                  href={project.github}
                  icon={<Github className="w-5 h-5" />}
                  className="w-full sm:w-auto"
                >
                  View on GitHub
                </ComicButton>
              )}
            </ComicPanel>
          ))}
        </div>

        {/* Action Labels */}
        <div className="flex justify-center gap-6 mt-8">
          <ActionLabel color="yellow" rotate={-4}>SHIPPED!</ActionLabel>
          <ActionLabel color="blue" rotate={6}>DEPLOYED!</ActionLabel>
        </div>
      </div>
    </section>
  );
};
