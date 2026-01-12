import { FaDocker } from 'react-icons/fa';
import {SiDjango, SiSpring} from 'react-icons/si';

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
  icon: React.ReactNode;
  color: string; 
  skills: string[];
}

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 1,
    title: "Java Spring Boot Microservices eCommerce Project Masterclass",
    issuer: "Udemy",
    date: "Dic 2025",
    credentialId: "UC-07c93e45-1f2e-43c4-aae5-58d1e18f6a16",
    url: "https://www.udemy.com/certificate/UC-07c93e45-1f2e-43c4-aae5-58d1e18f6a16/",
    icon: <SiSpring />,
    color: "#6DB33F",
    skills: [
      "Arquitectura de Microservicios",
      "JPA, Kafka, RabbitMQ",
      "Aplicación de Spring Cloud Gateway",
      "Kubernetes y Docker"
    ]
  },
  {
    id: 2,
    title: "Build a Backend REST API with Python & Django - Advanced",
    issuer: "Udemy",
    date: "Ago 2025",
    credentialId: "UC-9ed06ecb-1efd-4b01-9d1c-173b10c6b416",
    url: "https://www.udemy.com/certificate/UC-9ed06ecb-1efd-4b01-9d1c-173b10c6b416/",
    icon: <SiDjango />,
    color: "#092E20",
    skills: [
      "Programación Avanzada en Django",
      "Testing y Depuración",
      "Despliegue en Producción",
      "TDD y Buenas Prácticas"
    ]
  },
  {
    id: 2,
    title: "Docker & Kubernetes: The Practical Guide",
    issuer: "Udemy",
    date: "Jun 2025",
    credentialId: "UC-f1ffb6dc-d4a7-4523-b128-a30e38627a62",
    url: "https://www.udemy.com/certificate/UC-f1ffb6dc-d4a7-4523-b128-a30e38627a62/",
    icon: <FaDocker />,
    color: "#2494E8",
    skills: [
      "AWS ECS",
      "Desplegue de Contenedores",
      "Kubernetes Inicialización y Gestión",
    ]
  }
];