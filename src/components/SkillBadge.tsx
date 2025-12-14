import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  className?: string;
}

export const SkillBadge = ({ skill, className }: SkillBadgeProps) => {
  return (
    <span className={cn("skill-badge", className)}>
      {skill}
    </span>
  );
};
