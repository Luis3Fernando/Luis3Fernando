import { FaAws, FaReact } from 'react-icons/fa';

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
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Dic 2024",
    credentialId: "AWS-SCA-2024-XYZ",
    url: "#", // Link a Credly o similar
    icon: <FaAws />,
    color: "#FF9900", // AWS Orange
    skills: [
      "Arquitectura Cloud Serverless",
      "Diseño de Microservicios Escalables",
      "Seguridad y Gestión de IAM",
      "Despliegue con CI/CD en AWS"
    ]
  },
  {
    id: 2,
    title: "Meta React Native Specialization",
    issuer: "Meta (vía Coursera)",
    date: "Ago 2024",
    credentialId: "COURSERA-RN-5678",
    url: "#",
    icon: <FaReact />,
    color: "#61DAFB",
    skills: [
      "Desarrollo Móvil Multiplataforma",
      "Gestión de Estado Avanzada",
      "Integración de APIs Nativas",
      "UX/UI para Móviles"
    ]
  }
];