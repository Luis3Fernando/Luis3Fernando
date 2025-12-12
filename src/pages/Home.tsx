import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Skills from '@components/sections/Skills';
import Experience from '@components/sections/Experience';
import Projects from '@components/sections/Projects';
import Posts from '@components/sections/Posts';
import Certifications from '@components/sections/Certifications';

const Home: React.FC = () => {
  return (
   <div className="w-full max-w-6xl px-4 md:px-8 pb-20">
      <section id="hero" className="mb-24">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="posts">
        <Posts />
      </section>
    </div>
  );
};

export default Home;