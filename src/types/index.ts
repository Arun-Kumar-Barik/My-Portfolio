export interface NavLink {
  id: string;
  title: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  icon: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon?: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  gpa?: string;
  courses?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}