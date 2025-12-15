import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export const FOOTER_DATA = {
  description: "Desarrollador Full Stack & Especialista IoT. Creando soluciones que conectan el mundo físico con el digital mediante código limpio y arquitecturas escalables.",

  sections: [
    {
      title: "Navegación",
      links: [
        { name: "Inicio", href: "#hero" },
        { name: "Sobre Mí", href: "#about" },
        { name: "Trayectoria", href: "#experience" },
        { name: "Proyectos", href: "#projects" },
      ]
    },
    {
      title: "Servicios", 
      links: [
        { name: "Desarrollo Web", href: "#" },
        { name: "Sistemas IoT", href: "#" },
        { name: "Apps Móviles", href: "#" },
        { name: "Consultoría", href: "#" },
      ]
    }
  ],

  socials: [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/", color: "#ffffff" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/", color: "#0077B5" },
    { name: "Email", icon: <SiGmail />, url: "mailto:tu@email.com", color: "#EA4335" },
  ],

  contact: {
    email: "louis.dev@example.com",
    location: "Apurímac, Perú",
    availability: "Disponible para proyectos"
  }
};