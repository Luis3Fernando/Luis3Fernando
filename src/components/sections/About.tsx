import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { HiSparkles, HiLocationMarker } from 'react-icons/hi';
import { ABOUT_DATA } from '@data/about';

const About: React.FC = () => {
  return (
    <section className="relative py-8 md:py-10 px-4 md:px-8 overflow-hidden" id="about">
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre <span className="text-neon">Mí</span>
          </h2>
          <div className="h-1 w-20 md:w-24 bg-neon mx-auto rounded-full shadow-[0_0_10px_var(--color-neon)]"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-accent/50 border border-white/10 text-neon text-xs md:text-sm font-mono">
              <HiSparkles />
              <span>Developer Story</span>
            </div>
            <div className="space-y-4 text-text-muted text-base md:text-lg leading-relaxed text-justify md:text-left">
              {ABOUT_DATA.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div>
                <span className="block text-3xl md:text-4xl font-bold text-white mb-1">2+</span>
                <span className="text-sm text-text-muted">Años de Experiencia</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-bold text-white mb-1">5+</span>
                <span className="text-sm text-text-muted">Proyectos Desplegados</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-4 lg:mt-0"
          >
            <div className="absolute -inset-1 bg-linear-to-tr from-neon via-primary to-neon rounded-2xl blur opacity-20 animate-pulse"></div>
            <div className="relative bg-space-lighter backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg overflow-hidden shrink-0">
                  <img 
                    src={ABOUT_DATA.education.logo} 
                    alt="UNAMBA Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="px-3 py-1 bg-neon/10 border border-neon/30 text-neon rounded-full text-xs font-bold uppercase tracking-wider self-start sm:self-auto">
                  {ABOUT_DATA.education.status}
                </div>
              </div>
              <div className="mb-6">
                <a 
                  href={ABOUT_DATA.education.universityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg md:text-xl font-bold text-white hover:text-blue-500 transition-colors mb-1"
                >
                  {ABOUT_DATA.education.university}
                  <FaExternalLinkAlt className="text-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <p className="text-primary font-medium flex items-center gap-2 text-sm md:text-base">
                  <FaGraduationCap className="shrink-0" />
                  {ABOUT_DATA.education.degree}
                </p>
              </div>
              <div className="text-xs md:text-sm text-text-muted mb-6 flex flex-wrap justify-between gap-2 border-b border-white/5 pb-4">
                <div className="flex items-center gap-1">
                  <HiLocationMarker />
                  <span>{ABOUT_DATA.education.location}</span>
                </div>
                <span className="font-mono text-white bg-white/5 px-2 py-0.5 rounded">
                  {ABOUT_DATA.education.year}
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-mono text-text-muted uppercase opacity-70">Hitos Académicos</p>
                <ul className="space-y-3">
                  {ABOUT_DATA.education.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                      <FaAward className="text-neon mt-0.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;