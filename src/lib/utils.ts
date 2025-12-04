import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Shared Types ---
export type Reel = {
  id: string;
  creator: string;
  title: string;
  description: string;
  tags: string[];
  likes: number;
  comments: number;
  videoUrl: string;
  isLocal?: boolean;
};

export type UserProfile = {
  name: string;
  xp: number;
  level: string;
  streak: number;
};