  import React from 'react';
  import { Outlet } from 'react-router-dom';
  import Header from './Header'; 
  import Footer from './Footer';

  const MainLayout: React.FC = () => {
    return (
      <div className="relative min-h-screen w-full bg-space text-text-main overflow-x-hidden font-sans">
        <Header />
        <main className="relative z-10 flex flex-col items-center w-full pt-20"> 
          <Outlet /> 
        </main>
        <Footer />
      </div>
    );
  };

  export default MainLayout;