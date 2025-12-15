import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaGraduationCap, FaAward } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { ABOUT_DATA } from '@data/about';

const About: React.FC = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre <span className="text-neon">Mí</span>
          </h2>
          <div className="h-1 w-24 bg-neon mx-auto rounded-full shadow-[0_0_10px_var(--color-neon)]"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-accent/50 border border-white/10 text-neon text-sm font-mono mb-2">
              <HiSparkles />
              <span>Developer Story</span>
            </div>
            
            <h3 className="text-3xl font-bold text-white leading-tight">
              Creando puentes entre el <br />
              <span className="text-primary">Hardware</span> y el <span className="text-primary">Software</span>.
            </h3>
            
            <div className="space-y-4 text-text-muted text-lg leading-relaxed">
              {ABOUT_DATA.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <span className="block text-3xl font-bold text-white">3+</span>
                <span className="text-sm text-text-muted">Años codeando</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">5+</span>
                <span className="text-sm text-text-muted">Proyectos IoT</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-neon via-primary to-neon rounded-2xl blur opacity-30 animate-pulse"></div>
            
            <div className="relative bg-space-lighter/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-space-accent p-3 rounded-lg text-neon">
                  <FaUniversity size={32} />
                </div>
                <div className="px-3 py-1 bg-neon/10 border border-neon/30 text-neon rounded-full text-xs font-bold uppercase tracking-wider">
                  {ABOUT_DATA.education.status}
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">
                {ABOUT_DATA.education.university}
              </h4>
              <p className="text-primary font-medium flex items-center gap-2 mb-4">
                <FaGraduationCap />
                {ABOUT_DATA.education.degree}
              </p>

              <div className="text-sm text-text-muted mb-6 flex justify-between border-b border-white/5 pb-4">
                <span>{ABOUT_DATA.education.location}</span>
                <span className="font-mono text-white">{ABOUT_DATA.education.year}</span>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-mono text-text-muted uppercase opacity-70">Logros Destacados</p>
                <ul className="space-y-2">
                  {ABOUT_DATA.education.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                      <FaAward className="text-yellow-500 mt-1 shrink-0" />
                      <span>{item}</span>
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