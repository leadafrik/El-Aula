import {
  Book,
  GraduationCap,
  Briefcase,
  Play,
  FileText,
  PenTool,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Book,
  GraduationCap,
  Briefcase,
  Play,
  FileText,
  PenTool,
  TrendingUp,
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Book;
}
