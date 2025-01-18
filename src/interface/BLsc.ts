import { ReactNode } from "react";

export interface SideContextType {
  content: ReactNode;
  isVisible: boolean;
  updateContent: (newContent: ReactNode, newTitle: string) => void;
  toggleVisibility: () => void;
}
