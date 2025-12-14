import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface ComicPanelProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "large" | "accent" | "primary" | "secondary";
  halftone?: boolean;
  style?: CSSProperties;
}

export const ComicPanel = ({
  children,
  className,
  variant = "default",
  halftone = false,
  style,
}: ComicPanelProps) => {
  const variants = {
    default: "comic-panel",
    large: "comic-panel-lg",
    accent: "comic-panel bg-accent",
    primary: "comic-panel bg-primary text-primary-foreground",
    secondary: "comic-panel bg-secondary text-secondary-foreground",
  };

  return (
    <div
      className={cn(
        variants[variant],
        halftone && "halftone",
        "overflow-hidden",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

interface SpeechBubbleProps {
  children: ReactNode;
  className?: string;
  direction?: "bottom" | "left" | "right";
}

export const SpeechBubble = ({
  children,
  className,
  direction = "bottom",
}: SpeechBubbleProps) => {
  return (
    <div className={cn("speech-bubble", className)}>
      {children}
    </div>
  );
};

interface CaptionBoxProps {
  children: ReactNode;
  className?: string;
  color?: "yellow" | "red" | "blue";
}

export const CaptionBox = ({
  children,
  className,
  color = "yellow",
}: CaptionBoxProps) => {
  const colors = {
    yellow: "bg-accent text-accent-foreground",
    red: "bg-primary text-primary-foreground",
    blue: "bg-secondary text-secondary-foreground",
  };

  return (
    <div
      className={cn(
        "border-3 border-foreground px-4 py-2 font-comic inline-block",
        colors[color],
        className
      )}
      style={{ boxShadow: "2px 2px 0px hsl(var(--comic-ink))" }}
    >
      {children}
    </div>
  );
};

interface ActionLabelProps {
  children: ReactNode;
  color?: "yellow" | "red" | "blue";
  className?: string;
  rotate?: number;
}

export const ActionLabel = ({
  children,
  color = "yellow",
  className,
  rotate = -3,
}: ActionLabelProps) => {
  const colors = {
    yellow: "action-label-yellow",
    red: "action-label-red",
    blue: "action-label-blue",
  };

  return (
    <span
      className={cn(colors[color], className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
};
