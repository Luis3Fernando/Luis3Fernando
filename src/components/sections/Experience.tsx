import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { EXPERIENCES } from '@data/experience'; 

const Experience: React.FC = () => {
  return (
    <section className="relative px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Trayectoria <span className="text-neon">Profesional</span>
        </h2>
        <div className="h-1 w-24 bg-neon mx-auto rounded-full shadow-[0_0_10px_var(--color-neon)]"></div>
      </motion.div>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-neon to-transparent opacity-30 md:left-8"></div>
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-12 md:pl-20"
            >
              <div className="absolute left-2.75 md:left-6.75 top-0 w-4 h-4 bg-space rounded-full border-2 border-neon shadow-[0_0_10px_var(--color-neon)] z-10 mt-1.5">
                <div className="absolute inset-0 bg-neon opacity-50 blur-sm rounded-full animate-pulse"></div>
              </div>
              <div className="bg-space-lighter/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:border-neon/30 transition-all duration-300 hover:bg-space-lighter/60 group shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-neon transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium mt-1">
                      <HiBriefcase className="text-lg" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-text-muted gap-1 mt-2 md:mt-0">
                    <div className="flex items-center gap-1 bg-space-accent/50 px-3 py-1 rounded-full">
                      <HiCalendar className="text-neon" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1 opacity-80">
                      <HiLocationMarker />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-text-muted leading-relaxed mb-6 border-l-2 border-primary/30 pl-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((techItem) => (
                    <span 
                      key={techItem.name} 
                      className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-space-accent/40 text-text-main border border-white/5 hover:border-primary transition-colors"
                    >
                      <span className="text-primary text-sm">{techItem.icon}</span>
                      {techItem.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;