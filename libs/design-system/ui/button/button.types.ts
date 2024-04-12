import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {ButtonVariant} from "@/libs/design-system/ui/button/button.constants";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: keyof typeof ButtonVariant;
}