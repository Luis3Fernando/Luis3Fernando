import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Iconos de React Icons

const Header: React.FC = () => {
  // Estado UI local solo para el menú móvil y efecto scroll
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto Senior: Detectar scroll para cambiar la transparencia del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lista de navegación (luego la sacaremos a un archivo de configuración si crece)
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 
      ${isScrolled ? 'bg-space/80 backdrop-blur-md py-4 shadow-lg shadow-neon/5' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO AREA */}
        <div className="text-2xl font-bold font-mono text-text-main hover:text-neon transition-colors cursor-pointer">
          &lt;LouisDev /&gt;
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-text-muted hover:text-neon text-sm font-medium tracking-wide transition-all duration-300 relative group"
                >
                  {link.name}
                  {/* Línea animada debajo del link (Underline Effect) */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Botones de Acción (Idioma / Tema) - Placeholders por ahora */}
          <div className="h-6 w-[1px] bg-space-accent mx-2"></div>
          <button className="text-text-muted hover:text-text-main text-xs border border-space-accent px-3 py-1 rounded-full hover:border-neon transition-all">
            ES
          </button>
        </nav>

        {/* MOBILE MENU BUTTON (Hamburger) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-text-main focus:outline-none"
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY (Aparece al abrir el menú) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-space/95 backdrop-blur-xl border-b border-space-accent md:hidden flex flex-col items-center py-8 space-y-6 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-text-main hover:text-neon text-lg font-medium"
              onClick={() => setIsOpen(false)} // Cerrar al hacer click
            >
              {link.name}
            </a>
          ))}
          <button className="text-neon border border-neon px-6 py-2 rounded-full hover:bg-neon/10 transition-all">
            Descargar CV
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;