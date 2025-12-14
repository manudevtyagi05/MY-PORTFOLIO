import { ComicPanel, CaptionBox, ActionLabel } from "@/components/ComicPanel";
import { SkillBadge } from "@/components/SkillBadge";
import { Server, Database, Layout, BookOpen, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: "yellow" | "red" | "blue";
  accentColor: string;
}

export const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend Powers",
      icon: <Server className="w-6 h-6" />,
      skills: ["Java", "Spring Boot", "Hibernate", "JPA", "REST APIs", "SQL"],
      color: "red",
      accentColor: "bg-primary/10",
    },
    {
      title: "Data Vaults",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "MongoDB"],
      color: "blue",
      accentColor: "bg-secondary/10",
    },
    {
      title: "Frontend Assist",
      icon: <Layout className="w-6 h-6" />,
      skills: ["TypeScript", "React.js"],
      color: "yellow",
      accentColor: "bg-accent/20",
    },
    {
      title: "Core Knowledge",
      icon: <BookOpen className="w-6 h-6" />,
      skills: ["DSA", "OOPS", "DBMS", "OS", "Networking", "Design Patterns"],
      color: "red",
      accentColor: "bg-primary/10",
    },
    {
      title: "Tools & Gear",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Postman", "Swagger", "Unit Testing"],
      color: "blue",
      accentColor: "bg-secondary/10",
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-muted/30">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <CaptionBox color="blue" className="text-2xl md:text-3xl">
            PAGE 3
          </CaptionBox>
          <h2 className="font-comic text-4xl md:text-5xl text-foreground">
            SUPERPOWERS
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <ComicPanel
              key={category.title}
              className={`p-5 ${category.accentColor} opacity-0 animate-pop-in`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 border-2 border-foreground ${
                  category.color === "red" ? "bg-primary text-primary-foreground" :
                  category.color === "blue" ? "bg-secondary text-secondary-foreground" :
                  "bg-accent text-accent-foreground"
                }`}>
                  {category.icon}
                </div>
                <h3 className="font-comic text-xl text-foreground">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </ComicPanel>
          ))}
        </div>

        {/* Action Labels */}
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <ActionLabel color="yellow" rotate={-5}>JAVA!</ActionLabel>
          <ActionLabel color="red" rotate={3}>SPRING!</ActionLabel>
          <ActionLabel color="blue" rotate={-2}>APIs!</ActionLabel>
        </div>
      </div>
    </section>
  );
};
