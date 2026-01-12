export type Category = "Todos" | "Full Stack" | "Backend" | "IoT" | "Mobile" | "Videojuegos";
export type LinkType = 'github-front' | 'github-back' | 'github-all' | 'demo' | 'article';

export interface ProjectLink {
  type: LinkType;
  url: string;
  label?: string;
}

export interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string; 
}

export interface Project {
  id: number;
  title: string;
  subtitle: string; 
  description: string;
  categories: Category[];
  image: string; 
  tech: TechItem[]; 
  links: ProjectLink[]; 
}