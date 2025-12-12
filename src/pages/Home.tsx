import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <div className="w-full max-w-6xl px-4 md:px-8 space-y-24 pb-20">
      {/* space-y-24: Añade separación vertical consistente entre secciones.
         Esto es mejor que poner margin-bottom en cada componente individual.
      */}

      {/* SECCIÓN 1: IMPACTO (Nombre + Role) */}
      <section id="hero">
        <Hero />
      </section>

      {/* SECCIÓN 2: IDENTIDAD (Lo que haces: Web, IoT, Backend) */}
      <section id="about">
        <About />
      </section>

      {/* SECCIÓN 3: CAPACIDAD TÉCNICA (Validación rápida) */}
      <section id="skills">
        <Skills />
      </section>

      {/* SECCIÓN 4: TRAYECTORIA (Cronología) */}
      <section id="experience">
        <Experience />
      </section>

      {/* SECCIÓN 5: EVIDENCIA (Proyectos Reales) */}
      <section id="projects">
        <Projects />
      </section>

      {/* SECCIÓN 6: ACCIÓN (Formulario) */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;