import { ComicPanel, CaptionBox, ActionLabel } from "@/components/ComicPanel";
import { ComicButton } from "@/components/ComicButton";
import { Code2, Server, Database } from "lucide-react";
export const CoverPage = () => {
  return <section className="min-h-screen flex items-center justify-center py-8 px-4 relative overflow-hidden">
      {/* Background halftone effect */}
      <div className="absolute inset-0 halftone" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 hidden md:block">
        <ActionLabel color="blue" rotate={-12}>CODE!</ActionLabel>
      </div>
      <div className="absolute top-20 right-16 hidden md:block">
        <ActionLabel color="red" rotate={8}>BUILD!</ActionLabel>
      </div>
      <div className="absolute bottom-32 left-20 hidden md:block">
        <ActionLabel color="yellow" rotate={-5}>DEPLOY!</ActionLabel>
      </div>

      <div className="container max-w-4xl relative z-10">
        <ComicPanel variant="large" className="p-8 md:p-12">
          {/* Issue number */}
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground font-comic text-sm px-3 py-1 border-2 border-foreground">
            ISSUE #1
          </div>
          
          {/* Price tag style */}
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground font-comic text-sm px-3 py-1 border-2 border-foreground transform rotate-3">
            2025
          </div>

          <div className="text-center space-y-6 mt-8">
            {/* Hero Icons */}
            <div className="flex justify-center gap-4 mb-6">
              <div className="comic-panel p-3 bg-secondary">
                <Server className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div className="comic-panel p-3 bg-primary animate-float">
                <Code2 className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="comic-panel p-3 bg-accent">
                <Database className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="font-comic text-5xl md:text-7xl lg:text-8xl text-foreground text-shadow-comic leading-tight">
              MANU DEV TYAGI
            </h1>
            
            {/* Subtitle */}
            <div className="inline-block">
              <CaptionBox color="yellow" className="text-lg md:text-2xl">
                JAVA BACKEND DEVELOPER
              </CaptionBox>
            </div>

            {/* Description in caption box style */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-accent/20 border-3 border-foreground p-4 md:p-6 mt-6" style={{
              boxShadow: "3px 3px 0px hsl(var(--comic-ink))"
            }}>
                <p className="font-body text-lg md:text-xl text-foreground italic">
                  "Building scalable systems, one API at a time."
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <ComicButton variant="primary" href="#about">
                Read My Story
              </ComicButton>
              <ComicButton variant="outline" href="#contact">
                Hire This Hero
              </ComicButton>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
            
          </div>
        </ComicPanel>
      </div>
    </section>;
};