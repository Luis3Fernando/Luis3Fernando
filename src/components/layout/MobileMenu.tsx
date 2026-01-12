import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom'; // <--- IMPORTANTE
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '@store/slices/uiSlice';
import type { RootState } from '@store/store';
import { ProfileImage } from '@assets/images';

interface MobileMenuProps {
  navLinks: { name: string; href: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks }) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
     if (isMenuOpen) dispatch(toggleMenu());
  };

  if (!mounted) return null;
  return createPortal(
    <div 
      className={`fixed inset-0 z-40 bg-space/95 backdrop-blur-xl flex flex-col justify-start pt-32 items-center gap-8 transition-all duration-300
      ${isMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}`}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 blur-[100px] rounded-full pointer-events-none"></div>
      {navLinks.map((link) => (
        <a 
          key={link.name}
          href={link.href}
          onClick={handleLinkClick}
          className="text-3xl font-bold text-text-main hover:text-neon transition-colors duration-300 transform hover:scale-105"
        >
          {link.name}
        </a>
      ))}
      <div className="flex flex-col items-center gap-3 text-text-main mt-auto mb-12 animate-fade-in-scale">
         <div className="p-1 rounded-full border-2 border-neon/50 shadow-[0_0_15px_var(--color-neon)]">
            <img src={ProfileImage} alt="profile image" className='h-16 w-16 rounded-full' />
         </div>
         <div className='flex flex-col items-center'>
            <p className='text-lg font-medium text-white'>Luis Fernando</p>
            <span className='text-sm text-neon font-mono'>&lt;Software Developer /&gt;</span>
         </div>
      </div>
    </div>,
    document.body
  );
};

export default MobileMenu;