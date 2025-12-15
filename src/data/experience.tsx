import { SiSpring, SiReact, SiDocker, SiHibernate, SiArduino, SiLaravel, SiPostgresql, SiTailwindcss } from 'react-icons/si';

export interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
  tech: TechItem[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Backend Developer",
    company: "TechSolutions Inc.",
    date: "Ene 2024 - Presente",
    location: "Remoto / Lima, PE",
    description: "Lideré la migración de un monolito a microservicios utilizando Java 17 y Spring Boot 3. Optimicé consultas SQL reduciendo tiempos de respuesta en un 40%. Implementación de CI/CD pipelines.",
    tech: [
      { name: "Java", icon: <SiSpring /> },
      { name: "Spring Boot", icon: <SiSpring /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ]
  },
  {
    id: 2,
    role: "IoT Full Stack Developer",
    company: "AgroTech Solutions",
    date: "Jun 2022 - Dic 2023",
    location: "Abancay, Apurímac",
    description: "Desarrollo de un sistema de monitoreo para invernaderos inteligentes. Integración de sensores ESP32 con protocolo MQTT hacia un backend Laravel. Panel de control en tiempo real con React.",
    tech: [
      { name: "IoT / ESP32", icon: <SiArduino /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "React", icon: <SiReact /> },
      { name: "MQTT", icon: <SiArduino /> },
    ]
  },
  {
    id: 3,
    role: "Frontend Developer Junior",
    company: "Creative Web Agency",
    date: "Ene 2021 - May 2022",
    location: "Híbrido",
    description: "Maquetación y desarrollo de interfaces de usuario modernas para clientes internacionales. Colaboración estrecha con diseñadores UX/UI para asegurar fidelidad visual y accesibilidad.",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Hibernate", icon: <SiHibernate /> },
    ]
  }
];