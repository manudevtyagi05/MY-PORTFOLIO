import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ComicButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  className?: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  download?: boolean;
}

export const ComicButton = ({
  children,
  variant = "primary",
  className,
  href,
  onClick,
  icon,
  download,
}: ComicButtonProps) => {
  const variants = {
    primary: "comic-button-primary",
    secondary: "comic-button-secondary",
    accent: "comic-button-accent",
    outline: "comic-button-outline",
  };

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        download={download}
        className={cn(
          variants[variant],
          "inline-flex items-center justify-center",
          className
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        variants[variant],
        "inline-flex items-center justify-center",
        className
      )}
    >
      {content}
    </button>
  );
};
