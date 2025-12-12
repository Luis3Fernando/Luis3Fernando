import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';
import { ProfileImage } from '@assets/images';

import { toggleMenu } from '@store/slices/uiSlice';
import type { RootState } from '@store/store';
import { NAV_LINKS } from '@config/navigation';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); 
  const [currentLang, setCurrentLang] = useState('ES'); 

  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent
        ${isScrolled 
          ? 'bg-space/80 backdrop-blur-md py-3 shadow-lg shadow-neon/5 border-white/5' 
          : 'bg-transparent py-5'}`}
      >
        <div className="container mx-auto px-6 md:px-8 flex justify-between items-center relative z-50">
          <a href='#hero' className="flex flex-row items-center gap-3 text-text-main cursor-pointer hover:opacity-80 transition-opacity">
             <img src={ProfileImage} alt="profile image" className='h-10 w-10 rounded-full border border-space-accent' />
             <div className='flex flex-col justify-center'>
                <p className='text-sm font-medium leading-tight'>Luis Fernando Chumbes Ramos</p>
                <span className='text-xs text-neon font-mono'>&lt;Software Developer /&gt;</span>
             </div>
          </a>
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-text-muted hover:text-neon text-sm font-medium tracking-wide transition-all duration-300 relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="h-4 w-px bg-space-accent"></div>
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 cursor-pointer text-sm font-mono text-text-muted hover:text-text-main border border-space-accent px-3 py-1.5 rounded-full hover:border-neon transition-all bg-space-lighter/50"
              >
                <MdLanguage size={16} />
                <span>{currentLang}</span>
                <HiChevronDown className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-space-lighter border border-space-accent rounded-xl shadow-xl overflow-hidden animate-fade-in-scale">
                  <button 
                    onClick={() => { setCurrentLang('ES'); setIsLangOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-space-accent transition-colors ${currentLang === 'ES' ? 'text-neon font-bold' : 'text-text-muted'}`}
                  >
                    Español
                  </button>
                  <button 
                    onClick={() => { setCurrentLang('EN'); setIsLangOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-space-accent transition-colors ${currentLang === 'EN' ? 'text-neon font-bold' : 'text-text-muted'}`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </nav>
          <div className="flex items-center gap-4 lg:hidden">
              <button 
                  onClick={() => setCurrentLang(currentLang === 'ES' ? 'EN' : 'ES')}
                  className="text-xs font-mono text-text-muted border border-space-accent px-2 py-1 rounded hover:text-neon"
              >
                  {currentLang}
              </button>
              <button 
                onClick={() => dispatch(toggleMenu())}
                className="text-text-main hover:text-neon transition-colors focus:outline-none"
              >
               {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
              </button>
          </div>
        </div>
        <MobileMenu navLinks={[...NAV_LINKS]} />
      </header>
    </>
  );
};

export default Header;