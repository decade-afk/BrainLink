import { IconType } from "react-icons";

export interface BLButtonProps {
  context?: string;
  icon: IconType;
  click: () => void;
}