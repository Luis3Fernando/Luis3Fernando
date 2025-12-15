import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCopy, FaCheck } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FOOTER_DATA } from '@data/footer';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(FOOTER_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative bg-space-lighter border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-1 bg-linear-to-r from-transparent via-neon/50 to-transparent blur-sm"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <div className="text-2xl font-bold font-mono text-white">
              <span className="text-neon">&lt;</span>
              LouisDev
              <span className="text-neon">/&gt;</span>
            </div>
            <p className="text-text-muted leading-relaxed text-sm">
              {FOOTER_DATA.description}
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full w-fit border border-emerald-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {FOOTER_DATA.contact.availability}
            </div>
          </div>
          {FOOTER_DATA.sections.map((section) => (
            <div key={section.title} className="lg:col-span-2 space-y-6">
              <h4 className="text-white font-bold tracking-wide">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-text-muted hover:text-neon transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-neon transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold tracking-wide">Hablemos</h4>
            <p className="text-text-muted text-sm">
              ¿Tienes un proyecto en mente o una propuesta? Mi bandeja de entrada siempre está abierta.
            </p>
            <div className="relative group">
              <div className="flex items-center bg-space-accent/50 border border-white/10 rounded-lg p-1 pr-1 focus-within:border-neon/50 transition-colors">
                
                <div className="pl-3 text-text-muted">
                  <HiOutlineMail size={20} />
                </div>          
                <input 
                  type="text" 
                  readOnly 
                  value={FOOTER_DATA.contact.email}
                  className="bg-transparent border-none text-text-main text-sm w-full px-3 py-2 focus:ring-0 cursor-default outline-none font-mono"
                />
                <button 
                  onClick={handleCopyEmail}
                  className={`px-4 py-2 rounded-md text-xs font-bold uppercase transition-all duration-300 flex items-center gap-2
                  ${copied 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-neon text-white hover:bg-neon/80'}`}
                >
                  {copied ? <FaCheck /> : <FaCopy />}
                  {copied ? 'Copiado' : 'Copiar'}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted opacity-80">
              <HiOutlineLocationMarker />
              <span>{FOOTER_DATA.contact.location}</span>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} LouisDev. Hecho con <FaHeart className="inline text-neon mx-1 animate-pulse" /> en React.
          </p>
          <div className="flex gap-4">
            {FOOTER_DATA.socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted border border-white/5 transition-colors"
                style={{}}
              >
                 <span 
                   className="text-lg transition-colors duration-300 hover:text-(--hover-color)"
                   style={{ '--hover-color': social.color } as React.CSSProperties}
                 >
                   {social.icon}
                 </span>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;