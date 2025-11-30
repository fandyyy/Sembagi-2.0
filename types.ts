import { LucideIcon } from 'lucide-react';

export interface Official {
  name: string;
  role: string;
  image: string;
}

export interface Captain {
  name: string;
  role: string;
  image: string;
}

export interface Korwil {
  name: string;
  role: string;
  area: string;
  image: string;
}

export interface CoCaptain {
  name: string;
  area: string;
  image: string;
}

export interface Teacher {
  name: string;
  points: number;
  school: string;
  image: string;
}

export interface ResourceItem {
  title: string;
  icon: LucideIcon;
  link: string;
  color: string;
  description: string;
}