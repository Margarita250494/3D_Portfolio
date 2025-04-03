import { LucideIcon } from "lucide-react";


// animation: motion.ts

export type Direction = "left" | "right" | "up" | "down" | "";
export type AnimationType = "spring" | "tween"| "";

interface Transition {
    type?: AnimationType;
    duration?: number;
    delay?: number;
    ease?: "easeOut" | "easeIn" | "easeInOut";
    staggerChildren?: number;
    delayChildren?: number;
}

export interface AnimationState {
    hidden: {
      x?: number | string;
      y?: number | string;
      opacity?: number;
      scale?: number;
    };
    show: {
      x?: number;
      y?: number;
      opacity?: number;
      scale?: number;
      transition: Transition;
    };
}

export interface StaggerAnimation {
    hidden: Record<string, never>;
    show: {
      transition: Transition;
    };
}

export interface FadeInOutAnimation {
    initial: { opacity: number };
    animate: { opacity: number };
    exit: { opacity: number };
    transition: { duration: number };
}

/*export interface MenuAnimation {
    hidden: { x: string; opacity: number };
    visible: { x: number; opacity: number; transition: Transition };
    exit: { x: string; opacity: number; transition: Transition };
}*/

//header
 export interface NavLinks {
  id:string,
  title:string
 }

 //hero

 interface SocialLink {
  to: string;
  icon: LucideIcon;
  ariaLabel: string;
}

// Interface for the description object
interface HeroDescription {
  desc: string;
}

// Interface for the social links object
interface HeroSocials {
  soc1als: SocialLink[];
}

// Define the full heroInfo type
export type HeroInfo = (HeroDescription | HeroSocials)[];

export interface Services {
  title: string,
  icon: string,
}

export interface Technologies {
  name: string,
  icon: string,
}

export type About = string;

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}


export type FormState = {
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
  success?: boolean;
  message?: string;
};

interface TechStack {
  name: string;
}

export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: TechStack[];
  image: string;
  live: string;
  github: string;
}