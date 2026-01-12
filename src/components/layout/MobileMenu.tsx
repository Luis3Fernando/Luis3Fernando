import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
     if (isMenuOpen) dispatch(toggleMenu());
     if (href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        } else {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const el = document.getElementById(targetId);
                    el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
     }
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
          onClick={(e) => handleLinkClick(e, link.href)} 
          className="text-3xl font-bold text-text-main hover:text-neon transition-colors duration-300 transform hover:scale-105"
        >
          {link.name}
        </a>
      ))}

      <div className="flex flex-col items-center gap-3 text-text-main mt-auto mb-12 animate-fade-in-scale">
         <div className="p-1 rounded-full border-2 border-neon/50 shadow-[0_0_15px_var(--color-neon)]">
            <img src={ProfileImage} alt="profile image" className='h-16 w-16 rounded-full object-cover' />
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