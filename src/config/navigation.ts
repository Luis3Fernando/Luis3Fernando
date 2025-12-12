export interface NavItem {
  name: string;
  href: string;
}

export const NAV_LINKS: ReadonlyArray<NavItem> = [
  { name: 'Experiencia', href: '#experience' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Certificaciones', href: '#certifications' },
  { name: 'Publicaciones', href: '#posts' },
];