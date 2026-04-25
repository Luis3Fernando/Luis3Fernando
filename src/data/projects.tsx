import type { Project } from '@models/project.model';
import { SiSpring, SiReact, SiPostgresql, SiDjango, SiMysql, SiAngular, SiGodotengine, SiSqlite } from 'react-icons/si';
import apugo from '@assets/screenshots/apugo.png';
import veltu from '@assets/screenshots/veltu.png';
import spoo from '@assets/screenshots/spoo.png';
import echo from '@assets/screenshots/echo.jpg';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Spoo",
    subtitle: "Videojeugo educativo",
    description: "Spoo es un videojuego educativo desarrollado en Godot, diseñado para enseñar a los niños la númeración y reconocimiento de números, debido a que este videojuego esta dirigido a niños de 4 a 5 años.",
    categories: ["Videojuegos", "Mobile"],
    image: spoo,
    tech: [
      { name: "Godot", icon: <SiGodotengine />, color: "#4D90C1" },
    ],
    links: [
      { type: 'github-all', url: 'https://github.com/Luis3Fernando/Spoo-Game', label: 'Ver código' },
      { type: 'article', url: 'https://revistas.unamba.edu.pe/index.php/riqchary/article/view/216', label: 'Leer artículo' }
    ]
  },
  {
    id: 2,
    title: "Veltu",
    subtitle: "Red Social Universitaria",
    description: "VELTU es una plataforma innovadora con la ambición de competir como una red social universitaria ante grandes de la industria. VELTU esta enfocada en conectar estudiantes de diferentes facultades y universidades permitiendo la creación de equipos de trabajo e investigación, incluyendo el intercambio de conocimiento y recursos académicos.",
    categories: ["Full Stack"],
    image: veltu,
    tech: [
      { name: "Spring Boot", icon: <SiSpring />, color: "#6DB33F" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
    ],
    links: [
      { type: 'demo', url: 'https://veltu.sysari.net', label: 'Visitar Sitio' }
    ]
  },
  {
    id: 3,
    title: "Apugo",
    subtitle: "App de turismo local",
    description: "Apugo es una aplicación móvil para descubrir lugares turísticos en Apurímac, con funciones de autenticación y geolocalización, para recomendar lugares cercanos y guardar lugares favoritos.",
    categories: ["Mobile", "Backend"],
    image: apugo,
    tech: [
      { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
      { name: "Django", icon: <SiDjango />, color: "#092E20" },
      { name: "MySql", icon: <SiMysql />, color: "#4169E1" }
    ],
    links: [
      { type: 'demo', url: 'https://play.google.com/store/apps/details?id=com.louis3l3.Apugo&pli=1', label: 'Play Store' }
    ]
  },
  {
    id: 4,
    title: "Echo Music",
    subtitle: "Reproductor de música",
    description: "Echo Music es una aplicación de reproducción de música que permite a los usuarios disfrutar su música con una experiencia personalizada. Echo Music se basa en las estadísticas de escucha, hacer TOPS según las preferencias. Permite leer metadatos de archivos de música, organizar la biblioteca musical y crear playlists personalizadas.",
    categories: ["Mobile"],
    image: echo,
    tech: [
      { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
      { name: "SQLite", icon: <SiSqlite />, color: "#092E20" },
    ],
    links: [
      { type: 'github-all', url: 'https://github.com/Luis3Fernando/Echo-Music', label: 'Ver código' },
    ]
  },
];