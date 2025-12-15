import React from 'react';
import { SiSpring, SiReact, SiDocker, SiArduino, SiPostgresql, SiMongodb, SiFlutter, SiNestjs, SiNextdotjs } from 'react-icons/si';
export type Category = "Todos" | "Full Stack" | "Backend" | "IoT" | "Mobile";

// Definimos los tipos de enlaces posibles
export type LinkType = 'github-front' | 'github-back' | 'github-all' | 'demo' | 'article';

export interface ProjectLink {
  type: LinkType;
  url: string;
  label?: string; // Opcional, por si quieres sobrescribir el texto
}

export interface Project {
  id: number;
  title: string;
  subtitle: string; // Ej: "Sistema de Gestión Agrícola"
  description: string;
  category: Category;
  image: string; 
  tech: React.ReactNode[]; 
  links: ProjectLink[]; // Array flexible de enlaces
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "EcoSmart Greenhouse",
    subtitle: "IoT & Agricultura de Precisión",
    description: "Plataforma integral para la gestión de invernaderos inteligentes. Permite la lectura de sensores (humedad, temperatura) en tiempo real mediante ESP32 y activa sistemas de riego automáticos basados en umbrales configurables desde la web.",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop", 
    tech: [<SiArduino title="ESP32" />, <SiSpring title="Spring Boot" />, <SiReact title="React" />, <SiMongodb title="MongoDB" />],
    links: [
      { type: 'github-all', url: 'https://github.com/user/ecosmart' },
      { type: 'article', url: 'https://noticias.com/tu-tesis', label: 'Ver Publicación' }
    ]
  },
  {
    id: 2,
    title: "TaskMaster Pro",
    subtitle: "SaaS de Productividad",
    description: "Organizador de tareas colaborativo en tiempo real. Arquitectura hexagonal con Spring Boot y frontend optimizado con Next.js. Incluye sistema de suscripciones y chat integrado.",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    tech: [<SiNextdotjs />, <SiSpring />, <SiPostgresql />, <SiDocker />],
    links: [
      { type: 'github-front', url: '#' },
      { type: 'github-back', url: '#' },
      { type: 'demo', url: '#' }
    ]
  },
  {
    id: 3,
    title: "Delivery Tracker",
    subtitle: "App Móvil Logística",
    description: "Aplicación para seguimiento de flotas en tiempo real. Algoritmo de optimización de rutas y notificaciones push. Panel administrativo web para despachadores.",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop",
    tech: [<SiFlutter />, <SiNestjs />, <SiReact />], // NestJS backend
    links: [
      { type: 'github-all', url: '#' },
      { type: 'demo', url: '#', label: 'Play Store' }
    ]
  }
];