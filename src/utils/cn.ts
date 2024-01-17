import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ClassValue = string | undefined;

export function cn(...classNames: ClassValue[]): string {
  return twMerge(clsx(classNames));
}
