/** Sous-pages « par public » (regroupées sous Consultations dans le menu). */
export const consultationsNavChildren = [
  { name: 'Enfants', href: '/psychologue-enfants/' },
  { name: 'Adolescents', href: '/psychologue-adolescents/' },
  { name: 'Adultes', href: '/psychologue-adultes/' },
] as const;

export type ConsultationNavItem = (typeof consultationsNavChildren)[number];

export type MainNavLink = {
  type: 'link';
  name: string;
  href: string;
};

export type MainNavDropdown = {
  type: 'dropdown';
  name: string;
  menuId: string;
  triggerId: string;
  children: readonly ConsultationNavItem[];
};

export type MainNavEntry = MainNavLink | MainNavDropdown;

export const mainNav: readonly MainNavEntry[] = [
  { type: 'link', name: 'Accueil', href: '/' },
  {
    type: 'dropdown',
    name: 'Consultations',
    menuId: 'consultations-submenu',
    triggerId: 'consultations-nav-trigger',
    children: consultationsNavChildren,
  },
  { type: 'link', name: 'Informations pratiques', href: '/informations-pratiques/' },
  { type: 'link', name: 'Parcours professionnel', href: '/florent-simon-psychologue/' },
] as const;

/** Téléphone et e-mail (bloc RDV sur la page informations pratiques). */
export const navContactHref = '/informations-pratiques/#contact' as const;
