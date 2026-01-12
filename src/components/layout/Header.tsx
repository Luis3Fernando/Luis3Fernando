import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { ProfileImage } from "@assets/images";

import { toggleMenu } from "@store/slices/uiSlice";
import type { RootState } from "@store/store";
import { NAV_LINKS } from "@config/navigation";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent
        ${
          isScrolled
            ? "bg-space/80 backdrop-blur-md py-3 shadow-lg shadow-neon/5 border-white/5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-8 flex justify-between items-center relative z-50">
          <a
            href="#hero"
            className="group flex flex-row items-center gap-3 text-text-main cursor-pointer transition-opacity"
          >
           <div className="relative z-50">
              <img
                src={ProfileImage}
                alt="profile image"
                className='h-10 w-10 object-cover border border-space-accent rounded-full origin-top-left transition-all duration-300 ease-out hover:scale-[6] hover:rounded-md hover:border-neon hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:z-50'
              />
            </div>
            <div className="flex flex-col justify-center transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-medium leading-tight group-hover:text-white transition-colors">
                Luis Fernando Chumbes Ramos
              </p>
              <span className="text-xs text-neon font-mono">
                &lt;Software Developer /&gt;
              </span>
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
          </nav>
          <div className="flex items-center gap-4 lg:hidden">
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
