import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { closeMenu } from '@store/slices/uiSlice';
import { HiX } from 'react-icons/hi';
import type { RootState } from '@store/store';

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Sobre Mí', href: '#about' }, // Incluye Educación/Certs internamente
  { name: 'Skills', href: '#skills' },
  { name: 'Certificaciones', href: '#certifications' },
  { name: 'Publicaciones', href: '#publications' },
  { name: 'Contacto', href: '#contact' },
];

const FullScreenMenu: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.isMenuOpen);

  // Variantes de animación para el contenedor
  // const menuVariants = {
  //   closed: { opacity: 0, y: "-100%" },
  //   open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
  //   exit: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
  // };

  // Variantes para que los links entren uno por uno (Stagger)
  const listVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="exit"
          className="fixed inset-0 z-40 bg-space/98 backdrop-blur-xl flex flex-col justify-center items-center"
        >
          {/* Botón Cerrar Gigante (Opcional, ya que el header tiene el toggle) */}
          <button 
            onClick={() => dispatch(closeMenu())}
            className="absolute top-8 right-8 text-text-muted hover:text-neon transition-colors"
          >
            <HiX size={40} />
          </button>

          <motion.nav variants={listVariants} initial="hidden" animate="show">
            <ul className="flex flex-col items-center gap-6 md:gap-8">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <a
                    href={link.href}
                    onClick={() => dispatch(closeMenu())}
                    className="text-3xl md:text-5xl font-bold text-text-main hover:text-neon transition-colors duration-300 font-sans tracking-tight"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Decoración extra: Email en el fondo */}
          <div className="absolute bottom-10 text-text-muted font-mono text-sm">
            louis@dev.com
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;