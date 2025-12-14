import { ComicPanel, CaptionBox, ActionLabel } from "@/components/ComicPanel";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  caption: string;
  color: "yellow" | "red" | "blue";
}

export const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      company: "ARCKAI",
      role: "Software Engineer",
      period: "Jul 2025 – Oct 2025",
      highlights: [
        "Built backend modules for EHR systems (patients, orders, reports)",
        "Java, Spring Boot, MySQL stack",
        "React + TypeScript dashboard contributions",
      ],
      caption: "Shipping production-grade healthcare software.",
      color: "red",
    },
    {
      company: "SabPaisa",
      role: "Tech Intern",
      period: "Apr 2025 – Jun 2025",
      highlights: [
        "REST API development with Spring Boot & JPA",
        "DTOs, global exception handling, Swagger",
        "Clean layered architecture implementation",
      ],
      caption: "Learned how real-world APIs are built.",
      color: "blue",
    },
  ];

  return (
    <section id="experience" className="py-16 px-4">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <CaptionBox color="yellow" className="text-2xl md:text-3xl">
            PAGE 4
          </CaptionBox>
          <h2 className="font-comic text-4xl md:text-5xl text-foreground">
            BATTLE EXPERIENCE
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-foreground hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-6 top-6 timeline-dot hidden md:block" />

                <ComicPanel
                  className="md:ml-16 p-6 opacity-0 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
                  halftone
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="font-comic text-2xl text-foreground">{exp.company}</h3>
                      </div>
                      <p className="font-body font-semibold text-lg text-foreground">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-muted px-3 py-1 border-2 border-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-body text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-1">▸</span>
                        <span className="font-body text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Caption */}
                  <CaptionBox color={exp.color} className="text-sm">
                    {exp.caption}
                  </CaptionBox>
                </ComicPanel>
              </div>
            ))}
          </div>
        </div>

        {/* Action Label */}
        <div className="flex justify-end mt-6">
          <ActionLabel color="red" rotate={5}>LEVELED UP!</ActionLabel>
        </div>
      </div>
    </section>
  );
};
