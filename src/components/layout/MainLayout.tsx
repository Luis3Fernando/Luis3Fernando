import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StarBackground from '../common/StarBackground';

// Definimos los props si quisiéramos pasar algo extra, pero por ahora está vacío
interface MainLayoutProps {
  children?: React.ReactNode; // Opcional si usas Outlet
}

const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    // Contenedor Maestro: Controla el fondo base y el scroll
    <div className="relative min-h-screen w-full bg-[#020617] text-slate-200 overflow-x-hidden">
      
      {/* 1. Fondo de Estrellas (Fixed, z-index bajo) */}
      <StarBackground />

      {/* 2. Navbar (Fixed o Sticky en el tope) */}
      <Navbar />

      {/* 3. Contenido Dinámico (Aquí se inyectan tus páginas: Home o Resume) */}
      <main className="relative z-10 flex flex-col items-center w-full">
         {/* Outlet es un placeholder de React Router */}
         <Outlet /> 
      </main>

      {/* 4. Footer (Siempre al final) */}
      <Footer />
      
    </div>
  );
};

export default MainLayout;