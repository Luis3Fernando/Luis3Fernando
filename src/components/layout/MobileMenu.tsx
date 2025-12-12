import React from 'react';
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

  const handleLinkClick = () => {
     if (isMenuOpen) dispatch(toggleMenu());
  };

  return (
    <div 
      className={`fixed inset-0 z-40 bg-space/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-300 lg:hidden
      ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      style={{ top: '0' }} 
    >
      {navLinks.map((link) => (
        <a 
          key={link.name}
          href={link.href}
          onClick={handleLinkClick}
          className="text-2xl md:text-4xl font-bold text-text-main hover:text-neon transition-colors duration-300 transform hover:scale-105"
        >
          {link.name}
        </a>
      ))}
      <div className="flex flex-row items-center gap-3 text-text-main cursor-pointer hover:scale-105 transition-transform mt-8">
         <img src={ProfileImage} alt="profile image" className='h-10 w-10 rounded-full' />
         <div className='flex flex-col justify-center'>
            <p className='text-sm font-medium'>Luis Fernando Chumbes Ramos</p>
            <span className='text-xs text-text-muted'>Desarrollador de Software</span>
         </div>
      </div>
    </div>
  );
};

export default MobileMenu;