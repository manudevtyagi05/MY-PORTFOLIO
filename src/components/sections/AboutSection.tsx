import { ComicPanel, CaptionBox, ActionLabel, SpeechBubble } from "@/components/ComicPanel";
import { Zap, Shield, Gauge } from "lucide-react";

export const AboutSection = () => {
  const traits = [
    { icon: <Shield className="w-5 h-5" />, text: "Clean Architecture" },
    { icon: <Gauge className="w-5 h-5" />, text: "Performance Obsessed" },
    { icon: <Zap className="w-5 h-5" />, text: "API Master" },
  ];

  return (
    <section id="about" className="py-16 px-4">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <CaptionBox color="red" className="text-2xl md:text-3xl">
            PAGE 2
          </CaptionBox>
          <h2 className="font-comic text-4xl md:text-5xl text-foreground">
            ORIGIN STORY
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Main Story Panel */}
          <ComicPanel className="p-6 md:p-8" halftone>
            <div className="space-y-4">
              <div className="mb-4">
                <ActionLabel color="yellow" rotate={-2}>WHO AM I?</ActionLabel>
              </div>
              
              {/* Narration box */}
              <div className="bg-accent border-3 border-foreground p-4" style={{ boxShadow: "2px 2px 0px hsl(var(--comic-ink))" }}>
                <p className="font-body text-accent-foreground italic text-sm">
                  The narrator speaks...
                </p>
              </div>

              <p className="font-body text-lg leading-relaxed text-foreground">
                <strong>Java Backend Developer</strong> with hands-on experience building 
                <span className="bg-secondary/20 px-1 mx-1 font-semibold">scalable, high-performance RESTful APIs</span> 
                using Java, Spring Boot, Hibernate, and MySQL.
              </p>
              
              <p className="font-body text-lg leading-relaxed text-foreground">
                Focused on <span className="font-semibold text-primary">clean architecture</span>, 
                <span className="font-semibold text-secondary mx-1">security</span>, and 
                <span className="font-semibold text-comic-green mx-1">performance optimization</span> 
                in real-world products.
              </p>
            </div>
          </ComicPanel>

          {/* Character Traits Panel */}
          <div className="space-y-4">
            {/* Speech Bubble Panel */}
            <ComicPanel className="p-6">
              <SpeechBubble className="mb-8">
                <p className="font-comic text-xl text-foreground">
                  "I don't just write code. I architect solutions."
                </p>
              </SpeechBubble>
            </ComicPanel>

            {/* Traits Grid */}
            <div className="grid grid-cols-1 gap-3">
              {traits.map((trait, index) => (
                <ComicPanel
                  key={trait.text}
                  className="p-4 flex items-center gap-3 opacity-0 animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  <div className="bg-primary p-2 border-2 border-foreground text-primary-foreground">
                    {trait.icon}
                  </div>
                  <span className="font-comic text-lg text-foreground">{trait.text}</span>
                </ComicPanel>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
