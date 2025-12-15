import { FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaPython, FaUnity } from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiCplusplus, SiCashapp,
  SiAngular, SiSpring, SiHibernate, SiReact, SiRedux, SiElectron, SiExpo, SiDjango, SiFastapi, SiNestjs, SiExpress, SiFlutter,
  SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiPrisma, SiTensorflow, SiOpencv,
  SiArduino, SiEspressif, SiRaspberrypi, SiFigma, SiNodedotjs
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  url: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Lenguajes de Programación",
    skills: [
      { name: "Java", icon: <FaJava />, color: "#E76F00", url: "https://www.java.com/" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", url: "https://www.typescriptlang.org/" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
      { name: "Python", icon: <FaPython />, color: "#3776AB", url: "https://www.python.org/" },
      { name: "C#", icon: <SiCashapp />, color: "#239120", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C", url: "https://isocpp.org/" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", url: "https://developer.mozilla.org/html" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", url: "https://developer.mozilla.org/css" },
    ]
  },
  {
    title: "Frameworks & Ecosistemas",
    skills: [
      { name: "Spring Boot", icon: <SiSpring />, color: "#6DB33F", url: "https://spring.io/" },
      { name: "Angular", icon: <SiAngular />, color: "#DD0031", url: "https://angular.io/" },
      { name: "React / Native", icon: <SiReact />, color: "#61DAFB", url: "https://react.dev/" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", url: "https://nodejs.org/" },
      { name: "NestJS", icon: <SiNestjs />, color: "#E0234E", url: "https://nestjs.com/" },
      { name: "Express", icon: <SiExpress />, color: "#000000", url: "https://expressjs.com/" },
      { name: "Django", icon: <SiDjango />, color: "#092E20", url: "https://www.djangoproject.com/" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688", url: "https://fastapi.tiangolo.com/" },
      { name: "Flutter", icon: <SiFlutter />, color: "#02569B", url: "https://flutter.dev/" },
      { name: "Electron", icon: <SiElectron />, color: "#47848F", url: "https://www.electronjs.org/" },
      { name: "Unity", icon: <FaUnity />, color: "#FFFFFF", url: "https://unity.com/" },
    ]
  },
  {
    title: "Bases de Datos & Librerías",
    skills: [
      { name: "Hibernate", icon: <SiHibernate />, color: "#59666C", url: "https://hibernate.org/" },
      { name: "Prisma", icon: <SiPrisma />, color: "#2D3748", url: "https://www.prisma.io/" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1", url: "https://www.postgresql.org/" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1", url: "https://www.mysql.com/" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", url: "https://www.mongodb.com/" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC", url: "https://redux.js.org/" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", url: "https://tailwindcss.com/" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00", url: "https://www.tensorflow.org/" },
      { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8", url: "https://opencv.org/" },
    ]
  },
  {
    title: "Herramientas, IoT & DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker />, color: "#2496ED", url: "https://www.docker.com/" },
      { name: "Git", icon: <FaGitAlt />, color: "#F05032", url: "https://git-scm.com/" },
      { name: "ESP32", icon: <SiEspressif />, color: "#E7352C", url: "https://www.espressif.com/" },
      { name: "Arduino", icon: <SiArduino />, color: "#00979D", url: "https://www.arduino.cc/" },
      { name: "Raspberry Pi", icon: <SiRaspberrypi />, color: "#C51A4A", url: "https://www.raspberrypi.org/" },
      { name: "Expo", icon: <SiExpo />, color: "#000020", url: "https://expo.dev/" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E", url: "https://www.figma.com/" },
    ]
  }
];