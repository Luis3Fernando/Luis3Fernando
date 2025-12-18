import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiLocationMarker, HiExternalLink } from 'react-icons/hi';
import { EXPERIENCES } from '@data/experience'; 

const Experience: React.FC = () => {
  return (
    <section className="relative pt-10 pb-20 px-4 md:px-8" id="experience">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-16"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
          Experiencia <span className="text-neon">profesional</span>
        </h2>
        <div className="h-1 w-16 md:w-24 bg-neon mx-auto rounded-full shadow-[0_0_10px_var(--color-neon)]"></div>
      </motion.div>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-2.5 md:left-8 top-2 bottom-0 w-0.5 bg-linear-to-b from-primary via-neon to-transparent opacity-30"></div>
        <div className="space-y-8 md:space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10 md:pl-20"
            >
              <div className="absolute left-0.75 md:left-6.75 top-1 md:top-0 w-3.5 h-3.5 md:w-4 md:h-4 bg-neon rounded-full border-2 md:border-4 border-space shadow-[0_0_10px_var(--color-neon)] z-10 mt-1">
                 <div className="absolute inset-0 bg-neon animate-ping opacity-75 rounded-full"></div>
              </div>
              <div className="bg-space-lighter/40 backdrop-blur-md border border-white/5 p-5 md:p-6 rounded-xl md:rounded-2xl hover:border-neon/30 transition-all duration-300 hover:bg-space-lighter/60 group shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-white leading-tight">
                      {exp.role}
                    </h3>
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-500 font-medium mt-1 text-sm md:text-base hover:text-blue-400 transition-colors group/link cursor-pointer"
                    >
                      <HiBriefcase className="text-base md:text-lg" />
                      <span className="underline decoration-transparent group-hover/link:decoration-blue-400 underline-offset-4 transition-all">
                        {exp.company}
                      </span>
                      <HiExternalLink className="opacity-100 md:opacity-0 md:-translate-x-2 md:group-hover/link:opacity-100 md:group-hover/link:translate-x-0 transition-all duration-300 text-xs md:text-sm" />
                    </a>
                  </div>
                  <div className="flex flex-wrap md:flex-col md:items-end text-xs md:text-sm text-text-muted gap-2 mt-2 md:mt-0">
                    <div className="flex items-center gap-1 bg-space-accent/50 px-2.5 py-1 rounded-full border border-white/5">
                      <HiCalendar className="text-neon" />
                      <span className="font-mono">{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1 opacity-80 px-1">
                      <HiLocationMarker />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-text-muted leading-relaxed mb-5 border-l-2 border-primary/30 pl-3 md:pl-4 text-sm md:text-base">
                  {exp.description}
                </p>

                {/* 4. TECH CHIPS (Compactos en móvil) */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {exp.tech.map((techItem) => (
                    <span 
                      key={techItem.name} 
                      className="flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-md text-[10px] md:text-xs font-mono bg-space-accent/40 text-text-main border border-white/5 hover:border-white/20 transition-colors"
                    >
                      <span className="text-xs md:text-sm" style={{ color: techItem.color }}>
                        {techItem.icon}
                      </span>
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