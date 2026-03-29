export const mainNav = [
  { name: 'Accueil', href: '/' },
  { name: 'Enfants', href: '/psychologue-enfants/' },
  { name: 'Adolescents', href: '/psychologue-adolescents/' },
  { name: 'Adultes', href: '/psychologue-adultes/' },
  { name: 'Informations pratiques', href: '/informations-pratiques/' },
  { name: 'Parcours professionnel', href: '/florent-simon-psychologue/' },
] as const;

export type NavItem = (typeof mainNav)[number];
