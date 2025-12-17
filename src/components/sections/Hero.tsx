import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaJava, FaDocker } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { SiSpring, SiHibernate, SiAngular, SiPostgresql } from 'react-icons/si';
import StarBackground from '@components/common/StarBackground'; 
import { PROFILE } from '@data/profile';

const TECH_STACK = [
  { icon: FaJava, name: "Java", color: "#E76F00" }, 
  { icon: SiSpring, name: "Spring Boot", color: "#6DB33F" }, 
  { icon: SiHibernate, name: "Hibernate", color: "#59666C" }, 
  { icon: SiAngular, name: "Angular", color: "#DD0031" }, 
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: FaDocker, name: "Docker", color: "#2496ED" }, 
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-dvh flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-space">
      <StarBackground /> 
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative -mt-36 z-10 flex flex-col items-center gap-x-6 max-w-4xl w-full"
      >
        <motion.a
          href={PROFILE.cvUrl}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-space-accent bg-space-lighter/50 backdrop-blur-sm text-xs md:text-sm text-text-muted hover:border-neon hover:text-neon transition-colors cursor-pointer mb-2"
        >
          <FiDownload />
          <span>Descargar CV</span>
        </motion.a>
        <h2 className="text-lg md:text-2xl font-mono text-neon font-medium tracking-widest">
          {PROFILE.role}
        </h2>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-2 leading-tight">
          {PROFILE.firstName} <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-text-main to-text-muted">
            {PROFILE.lastName}
          </span>
        </h1>
        <div className="text-lg md:text-2xl text-text-muted font-light h-14 md:h-10 flex flex-col md:flex-row gap-2 items-center justify-center">
          <span>{PROFILE.subTitle} </span>
          <TypeAnimation
            sequence={PROFILE.typewriterSentences}
            wrapper="span"
            speed={50}
            className="text-blue-400 font-semibold"
            repeat={Infinity}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-8 w-full">
          <motion.a 
            href={PROFILE.social.linkedin} 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-full font-medium hover:bg-[#004182] transition-colors shadow-lg shadow-blue-900/20 text-sm md:text-base w-full sm:w-auto justify-center"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </motion.a>
          <motion.a 
            href={PROFILE.social.github} 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-[#2b3137] text-white rounded-full font-medium hover:bg-white hover:text-black transition-colors border border-white/10 text-sm md:text-base w-full sm:w-auto justify-center"
          >
            <FaGithub size={20} />
            GitHub
          </motion.a>
        </div>
        <div className="mt-12 md:mt-16 flex flex-col items-center gap-4 w-full">
          <p className="text-xs md:text-sm font-mono text-text-muted opacity-60 uppercase tracking-wider">
            Tecnologías Principales
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-2">
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
                <tech.icon className="w-7 h-7 md:w-10 md:h-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;