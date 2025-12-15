import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { CERTIFICATIONS_DATA } from '@data/certifications';

const Certifications: React.FC = () => {
  return (
    <section className="relative py-20 px-4 md:px-8" id="certifications">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          Certificaciones
        </h2>
        <div className="h-0.5 w-16 bg-neon mx-auto"></div>
      </motion.div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative bg-space-lighter/40 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-space-lighter/60 transition-colors"
          >
            <div 
              className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full"
              style={{ backgroundColor: cert.color }}
            ></div>
            <div className="pl-4">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center">
                  <div 
                    className="text-2xl"
                    style={{ color: cert.color }}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-text-muted mt-0.5">
                      {cert.issuer} • <span className="text-white/60">{cert.date}</span>
                    </p>
                  </div>
                </div>
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-white transition-colors"
                  title="Ver Credencial"
                >
                  <HiExternalLink size={18} />
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-text-muted border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Certifications;