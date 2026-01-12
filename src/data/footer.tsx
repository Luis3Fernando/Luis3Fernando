import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const FOOTER_DATA = {
  description:
    "Soy un desarrollador Full Stack con foco en Java y su ecosistema, complementado por experiencia en frameworks modernos como Angular y .NET. Actualmente me preparo para dar el salto hacia la arquitectura de software, integrando nube e Inteligencia Artificial para construir sistemas robustos y de alto impacto.",

  sections: [
    {
      title: "Navegación",
      links: [
        { name: "Inicio", href: "#hero" },
        { name: "Sobre Mí", href: "#about" },
        { name: "Experiencia", href: "#experience" },
        { name: "Proyectos", href: "#projects" },
      ],
    },
    {
      title: "Proyectos",
      links: [
        { name: "Apugo: App de turismo", href: "https://play.google.com/store/apps/details?id=com.louis3l3.Apugo&pli=1" },
        { name: "Veltu: Red Social Universitaria", href: "https://veltu.sysari.net" },
      ],
    },
  ],

  socials: [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Luis3Fernando",
      color: "#ffffff",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/luis-fernando3/",
      color: "#0077B5",
    },
    {
      name: "Email",
      icon: <SiGmail />,
      url: "mailto:luisfernando3chr@email.com",
      color: "#EA4335",
    },
  ],

  contact: {
    email: "luisfernando3chr@email.com",
    location: "Apurímac, Perú",
    availability: "Disponible para proyectos",
  },
};
