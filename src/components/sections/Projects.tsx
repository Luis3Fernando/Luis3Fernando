import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaNewspaper,
  FaServer,
  FaDesktop,
  FaSearch,
} from "react-icons/fa";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { PROJECTS_DATA, type Category, type LinkType } from "@data/projects";

const CATEGORIES: Category[] = [
  "Todos",
  "Full Stack",
  "Backend",
  "IoT",
  "Mobile",
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filteredProjects = PROJECTS_DATA.filter((project) =>
    activeCategory === "Todos" ? true : project.category === activeCategory
  );

  const renderLinkButton = (type: LinkType, url: string, label?: string) => {
    let icon = <FaExternalLinkAlt />;
    let defaultLabel = "Demo";
    let bgClass = "bg-white/5 hover:bg-white/10 text-text-main";

    switch (type) {
      case "github-front":
        icon = <FaDesktop />;
        defaultLabel = "Frontend";
        bgClass = "bg-space-accent hover:bg-space-accent/80 text-white";
        break;
      case "github-back":
        icon = <FaServer />;
        defaultLabel = "Backend";
        bgClass = "bg-space-accent hover:bg-space-accent/80 text-white";
        break;
      case "github-all":
        icon = <FaGithub />;
        defaultLabel = "Repositorio";
        bgClass = "bg-white/10 hover:bg-white/20 text-white";
        break;
      case "article":
        icon = <FaNewspaper />;
        defaultLabel = "Noticia";
        bgClass = "bg-neon/10 hover:bg-neon/20 text-neon border border-neon/30";
        break;
      case "demo":
        icon = <FaExternalLinkAlt />;
        defaultLabel = "Live Demo";
        bgClass =
          "bg-primary/20 hover:bg-primary/30 text-white border border-primary/30";
        break;
    }

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${bgClass}`}
      >
        {icon}
        <span>{label || defaultLabel}</span>
      </a>
    );
  };

  return (
    <section className="relative py-20 px-4 md:px-8" id="projects">
      <div className="max-w-6xl mx-auto mb-16 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos <span className="text-neon">Realizados</span>
          </h2>
          <div className="h-1 w-24 bg-neon mx-auto rounded-full shadow-[0_0_10px_var(--color-neon)]"></div>
        </motion.div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-1 p-1 bg-space-lighter/50 backdrop-blur-md rounded-full border border-white/10">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? "text-white bg-white/10 shadow-lg"
                    : "text-text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto min-h-100">
        {" "}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-neon/20 blur-xl rounded-full"></div>
                <HiOutlineEmojiSad className="relative text-6xl text-neon opacity-80" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Sin resultados para "{activeCategory}"
              </h3>
              <p className="text-text-muted max-w-md mb-8">
                Aún no he subido proyectos en esta categoría específica, pero
                estoy trabajando en cosas nuevas constantemente.
              </p>

              <button
                onClick={() => setActiveCategory("Todos")}
                className="px-6 py-2 bg-space-accent hover:bg-white/10 border border-white/10 rounded-full text-white transition-all flex items-center gap-2 group"
              >
                <span>Ver todos los proyectos</span>
                <FaSearch className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </motion.div>
          ) : (
            filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={project.id}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24 last:mb-0"
              >
                <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1 text-left">
                  <div>
                    <span className="text-neon font-mono text-sm tracking-widest uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xl text-primary font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <p className="text-text-muted leading-relaxed text-base md:text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, i) => (
                      <React.Fragment key={i}>
                        {renderLinkButton(link.type, link.url, link.label)}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-xs font-mono text-text-muted mb-3 opacity-60">
                      TECNOLOGÍAS:
                    </p>
                    <div className="flex flex-wrap gap-4 text-2xl text-text-muted">
                      {project.tech.map((icon, i) => (
                        <div
                          key={i}
                          className="hover:text-neon transition-colors transform hover:scale-110 duration-200 cursor-help"
                          title="Tecnología usada"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div className="relative rounded-xl bg-space-lighter border border-white/10 p-2 shadow-2xl group-hover:shadow-neon/20 transition-all duration-500 transform group-hover:-translate-y-2">
                    <div className="h-6 bg-black/20 rounded-t-lg flex items-center gap-1.5 px-3 mb-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter brightness-[0.8] group-hover:brightness-100 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-tr from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
