import { ComicPanel, CaptionBox, ActionLabel } from "@/components/ComicPanel";
import { GraduationCap, Award, Calendar } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-16 px-4">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <CaptionBox color="blue" className="text-2xl md:text-3xl">
            PAGE 6
          </CaptionBox>
          <h2 className="font-comic text-4xl md:text-5xl text-foreground">
            TRAINING ARC
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Education Panel */}
          <ComicPanel variant="large" className="md:col-span-2 p-6 md:p-8" halftone>
            <div className="flex items-start gap-4">
              {/* Graduation Icon */}
              <div className="bg-secondary p-4 border-3 border-foreground hidden sm:block" style={{ boxShadow: "3px 3px 0px hsl(var(--comic-ink))" }}>
                <GraduationCap className="w-12 h-12 text-secondary-foreground" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 sm:hidden">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                
                <h3 className="font-comic text-3xl md:text-4xl text-foreground mb-2">
                  B.Tech
                </h3>
                <p className="font-body text-xl font-semibold text-foreground mb-1">
                  Computer Science Engineering
                </p>
                <p className="font-body text-lg text-muted-foreground mb-4">
                  BTU Bikaner
                </p>

                <div className="flex items-center gap-2 bg-accent px-4 py-2 border-2 border-foreground inline-block" style={{ boxShadow: "2px 2px 0px hsl(var(--comic-ink))" }}>
                  <Calendar className="w-4 h-4" />
                  <span className="font-comic text-lg text-accent-foreground">Graduated 2025</span>
                </div>
              </div>
            </div>
          </ComicPanel>

          {/* Side Panel - Achievement */}
          <ComicPanel className="p-6 bg-accent/20 flex flex-col justify-center items-center text-center">
            <Award className="w-12 h-12 text-accent mb-4" />
            <h4 className="font-comic text-xl text-foreground mb-2">CERTIFIED</h4>
            <p className="font-body text-muted-foreground">
              Ready to build the future
            </p>
            <ActionLabel color="yellow" rotate={-3} className="mt-4">
              COMPLETE!
            </ActionLabel>
          </ComicPanel>
        </div>
      </div>
    </section>
  );
};
