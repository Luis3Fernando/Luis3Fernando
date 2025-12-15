import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '@data/skills';

const Skills: React.FC = () => {
  return (
    <section className="relative py-2 px-4 md:px-8" id="skills">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Arsenal <span className="text-neon">Tecnológico</span>
        </h2>
        <div className="h-1 w-24 bg-neon mx-auto rounded-full shadow-[0_0_10px_var(--color-neon)]"></div>
      </motion.div>

      <div className="max-w-380 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {SKILLS_DATA.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="bg-space-lighter/30 backdrop-blur-sm border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="w-1 h-6 bg-neon rounded-full shadow-[0_0_8px_var(--color-neon)]"></div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <motion.a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: `${skill.color}15`,
                      borderColor: skill.color 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-space/40 transition-all duration-200 cursor-pointer h-24 relative overflow-hidden"
                  >
                    <div 
                      className="text-3xl mb-2 text-text-muted transition-colors duration-300"
                      style={{ color: 'inherit' }}
                    >
                      <span 
                        className="transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-text-muted group-hover:text-white text-center leading-tight">
                      {skill.name}
                    </span>
                    <div 
                      className="absolute bottom-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: skill.color }}
                    ></div>
                  </motion.a>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;