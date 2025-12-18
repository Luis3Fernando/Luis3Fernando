import {
  SiSpring,
  SiReact,
  SiDjango,
  SiArduino,
  SiAngular,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiFigma,
  SiMysql,
  SiInternetcomputer,
} from "react-icons/si";
import { DiDotnet } from "react-icons/di";

export interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  companyUrl: string;
  date: string;
  location: string;
  description: string;
  tech: TechItem[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    role: "Programador Full Stack Junior",
    company: "CODIDEEP E.I.R.L.",
    companyUrl: "https://codideep.com/",
    date: "Ago 2025 - Nov 2025",
    location: "Abancay, Apurímac",
    description:
      "Implementé soluciones full stack utilizando Angular y Spring Boot. Desarrollé funcionalidades clave como manejo asincrono de peticiones, paginación y consumo de API REST. Participé en el ciclo completo del desarrollo de software desde diseño hasta despliegue.",
    tech: [
      { name: "Angular", icon: <SiAngular />, color: "#FF2D20" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "MySQL", icon: <SiMysql />, color: "#08668E" },
      { name: "Git", icon: <SiGit />, color: "#F35530" },
      { name: "Java", icon: <SiSpring />, color: "#E76F00" },
      { name: "Spring Boot", icon: <SiSpring />, color: "#6DB33F" },
    ],
  },
  {
    id: 2,
    role: "Practicante Analista Programador",
    company: "CODIDEEP E.I.R.L.",
    companyUrl: "https://codideep.com/",
    date: "Abr 2025 - Ago 2025",
    location: "Abancay, Apurímac",
    description:
      "Desarrollé el front-end del sistema de empleos en línea Codijobs con Angular, implementé la migración y actualización de proyectos para mejorar rendimiento y mantenibilidad, y realicé análisis de sistemas en C# y SQL Server, contribuyendo a la integración de lógica de negocio.",
    tech: [
      { name: "Angular", icon: <SiAngular />, color: "#FF2D20" },
      { name: ".NET", icon: <DiDotnet />, color: "#512BD4" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "MySQL", icon: <SiMysql />, color: "#08668E" },
      { name: "Git", icon: <SiGit />, color: "#F35530" },
    ],
  },
  {
    id: 3,
    role: "Full Stack Developer Junior",
    company: "Sysari",
    companyUrl: "https://www.sysari.net",
    date: "Sep 2024 - Abr 2025",
    location: "Abancay, Apurímac",
    description:
      "Participé como arquitecto de software, desarrollador backend y frontend. Implementé autenticación JWT, paginación, consumo de API REST. Gestioné el ciclo completo del producto: diseño, desarrollo, despliegue y mantenimiento. Creando proyectos que me permitieron aplicar conocimientos en ingeniería de software, liderazgo técnico y experiencia de usuario.",
    tech: [
      { name: "Django", icon: <SiDjango />, color: "#316D5E" },
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Figma", icon: <SiFigma />, color: "#FF082D" },
      { name: "MySQL", icon: <SiMysql />, color: "#08668E" },
      { name: "Git", icon: <SiGit />, color: "#F35530" },
    ],
  },
  {
    id: 4,
    role: "Profesor ponente invitado",
    company: "I.E. Antonio Ocampo",
    companyUrl: "",
    date: "Sep 2024",
    location: "Curahuasi, Apurímac",
    description:
      "Colaboré en un taller de Robótica educativa como ponente, enseñando a docentes a construir robots móviles, desde conocimientos básicos como fundamentos de electrónica básica, hasta el uso de módulos y microcontroladores. Obteniendo como resultado prototipos funcionales como un robot seguidor de línea, seguidor de luz, robot evasor de obstáculos y un robot dibujador de figuras geométricas.",
    tech: [
      { name: "IoT", icon: <SiInternetcomputer />, color: "#0C67AD" },
      { name: "Arduino", icon: <SiArduino />, color: "#0A949C" },
    ],
  },
];
