import { ComicPanel, CaptionBox, ActionLabel } from "@/components/ComicPanel";
import { ComicButton } from "@/components/ComicButton";
import { Mail, Linkedin, Github, Download, Zap } from "lucide-react";

export const ContactSection = () => {
  const contactLinks = [
    {
      label: "Email Me",
      href: "mailto:manudevtyagi1213@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      variant: "primary" as const,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/manudevtyagi05",
      icon: <Linkedin className="w-5 h-5" />,
      variant: "secondary" as const,
    },
    {
      label: "GitHub",
      href: "https://github.com/manudevtyagi05",
      icon: <Github className="w-5 h-5" />,
      variant: "outline" as const,
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-muted/30">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <CaptionBox color="yellow" className="text-2xl md:text-3xl">
            FINAL PAGE
          </CaptionBox>
        </div>

        <ComicPanel variant="large" className="p-8 md:p-12 text-center" halftone>
          {/* Action Label */}
          <div className="mb-6">
            <ActionLabel color="red" rotate={-2} className="text-3xl md:text-4xl">
              WANT TO BUILD SOMETHING POWERFUL?
            </ActionLabel>
          </div>

          {/* Main CTA */}
          <h2 className="font-comic text-4xl md:text-6xl text-foreground text-shadow-comic-sm mb-4">
            LET'S TEAM UP!
          </h2>

          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Ready to bring your next project to life with clean, scalable backend solutions.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            {contactLinks.map((link) => (
              <ComicButton
                key={link.label}
                variant={link.variant}
                href={link.href}
                icon={link.icon}
              >
                {link.label}
              </ComicButton>
            ))}
          </div>

          {/* Resume Download */}
          <div className="mt-8 pt-8 border-t-4 border-foreground">
            <CaptionBox color="blue" className="text-lg mb-4">
              <Zap className="w-5 h-5 inline mr-2" />
              GET THE FULL STORY
            </CaptionBox>
            <p className="font-body text-muted-foreground mb-4">
              Download my resume for the complete adventure
            </p>
            <ComicButton
              variant="accent"
              href="#"
              icon={<Download className="w-5 h-5" />}
            >
              Download Resume
            </ComicButton>
          </div>
        </ComicPanel>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="font-comic text-xl text-muted-foreground">
            THE END... FOR NOW!
          </p>
          <p className="font-body text-sm text-muted-foreground mt-2">
            © 2025 Manu Dev Tyagi. Built with passion and clean code.
          </p>
        </div>
      </div>
    </section>
  );
};
