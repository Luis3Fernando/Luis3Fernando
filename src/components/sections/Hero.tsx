import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaJava } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { SiSpring, SiHibernate, SiReact, SiArduino, SiTensorflow } from 'react-icons/si';

const TECH_STACK = [
  { icon: FaJava, name: "Java", color: "#E76F00" },
  { icon: SiSpring, name: "Spring Boot", color: "#6DB33F" },
  { icon: SiHibernate, name: "Hibernate", color: "#59666C" },
  { icon: SiReact, name: "React / Frontend", color: "#61DAFB" },
  { icon: SiTensorflow, name: "Machine Learning", color: "#FF6F00" },
  { icon: SiArduino, name: "IoT / ESP32", color: "#00979D" },
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-6 max-w-4xl"
      >
        <motion.a
          href="/cv.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-space-accent bg-space-lighter/50 backdrop-blur-sm text-xs md:text-sm text-text-muted hover:border-neon hover:text-neon transition-colors cursor-pointer mb-4"
        >
          <FiDownload />
          <span>Descargar CV</span>
        </motion.a>
        <h2 className="text-xl md:text-2xl font-mono text-neon font-medium tracking-widest uppercase">
          Software Developer
        </h2>
        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
          Luis Fernando <span className="text-transparent bg-clip-text bg-linear-to-r from-text-main to-text-muted">Chumbes Ramos</span>
        </h1>
        <div className="text-xl md:text-xl text-text-muted font-light h-10">
          <span>Especialista en </span>
          <TypeAnimation
            sequence={[
              'Java & Spring Ecosystem',
            ]}
            wrapper="span"
            speed={50}
            className="text-[#FBBA1A] font-semibold"
            repeat={1}
          />
        </div>
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
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-sm font-mono text-text-muted opacity-60">STACK TECNOLÓGICO PRINCIPAL</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {TECH_STACK.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
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