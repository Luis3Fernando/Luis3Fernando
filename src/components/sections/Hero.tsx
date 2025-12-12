import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaJava } from 'react-icons/fa'; // Java suele estar en FontAwesome
import { FiDownload } from 'react-icons/fi';
// Importamos Spring, Hibernate y tus secundarios
import { SiSpring, SiHibernate, SiReact, SiArduino, SiTensorflow } from 'react-icons/si';

const TECH_STACK = [
  { icon: FaJava, name: "Java", color: "#E76F00" },
  { icon: SiSpring, name: "Spring Boot", color: "#6DB33F" },
  { icon: SiHibernate, name: "Hibernate", color: "#59666C" },
  { icon: SiReact, name: "React / Frontend", color: "#61DAFB" },
  { icon: SiTensorflow, name: "Machine Learning", color: "#FF6F00" }, // Representando ML
  { icon: SiArduino, name: "IoT / ESP32", color: "#00979D" },
];

const Hero: React.FC = () => {
  return (
    // CORRECCIÓN DE CENTRADO:
    // Cambiamos 'min-h-screen' por 'min-h-[calc(100vh-5rem)]'
    // Esto resta los 80px (pt-20) del Layout para que el centro sea perfecto.
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* Fondo Nebula */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-6 max-w-4xl"
      >
        
        {/* Badge CV */}
        <motion.a
          href="/cv.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-space-accent bg-space-lighter/50 backdrop-blur-sm text-xs md:text-sm text-text-muted hover:border-neon hover:text-neon transition-colors cursor-pointer mb-4"
        >
          <FiDownload />
          <span>Descargar CV / Resumé</span>
        </motion.a>

        {/* Título Principal */}
        <h2 className="text-xl md:text-2xl font-mono text-neon font-medium tracking-widest uppercase">
          Software Developer
        </h2>

        {/* Nombre */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2">
          Louis <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-main to-text-muted">Chumbes</span>
        </h1>

        {/* Type Animation con tu Perfil Real */}
        <div className="text-xl md:text-3xl text-text-muted font-light h-10">
          <span>Especialista en </span>
          <TypeAnimation
            sequence={[
              'Java & Spring Ecosystem', // Tu fuerte
              2000,
              'Arquitectura Backend',
              2000,
              'Full Stack & Web Moderno', // React
              2000,
              'Soluciones IoT (ESP32)',
              2000,
              'Machine Learning & IA',
              2000
            ]}
            wrapper="span"
            speed={50}
            className="text-primary font-semibold"
            repeat={Infinity}
          />
        </div>

        {/* Botones Redes */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <motion.a 
            href="https://linkedin.com/in/tu-usuario" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3 bg-[#0A66C2] text-white rounded-full font-medium hover:bg-[#004182] transition-colors shadow-lg shadow-blue-900/20"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </motion.a>

          <motion.a 
            href="https://github.com/tu-usuario" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3 bg-[#2b3137] text-white rounded-full font-medium hover:bg-white hover:text-black transition-colors border border-white/10"
          >
            <FaGithub size={20} />
            GitHub
          </motion.a>
        </div>

        {/* Carrusel Tech Stack (Actualizado a Java/Spring) */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-sm font-mono text-text-muted opacity-60">STACK TECNOLÓGICO PRINCIPAL</p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {TECH_STACK.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                whileHover={{ y: -5, color: tech.color }}
                className="text-text-muted transition-colors duration-300 cursor-pointer p-2"
                title={tech.name}
              >
                <tech.icon size={32} className="md:w-10 md:h-10" />
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;