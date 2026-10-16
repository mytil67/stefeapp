export interface Project {
  name: string
  tagline: string
  url?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'REPA',
    tagline: 'Dashboard analytique des commandes de repas pour les écoles strasbourgeoises.',
  },
  {
    name: 'OASIS',
    tagline: 'Analytique des inscriptions scolaires et suivi des dérogations.',
  },
  {
    name: 'ZAPI',
    tagline: 'Suivi et statistiques de 800 iPads déployés dans les écoles.',
  },
  {
    name: 'CREDI',
    tagline: 'Lecture automatique de PDF de commandes et synchronisation vers REPA.',
  },
  {
    name: 'CODEC',
    tagline: 'Gestion complète des conseils d\u2019école.',
  },
  {
    name: 'QRCODE',
    tagline: 'Suivi des questions-réponses des conseils d\u2019école.',
  },
  {
    name: 'VoxCloud',
    tagline: 'Plateforme simple et élégante pour les chorales.',
    url: 'https://vox-cloud.com',
  },
  {
    name: 'Bauhaus',
    tagline: 'Expérimentation créative et design.',
    url: 'https://bauhaus.stefe.app',
  },
  {
    name: 'Studio',
    tagline: 'Laboratoire créatif et technique.',
    url: 'https://studio.stefe.app',
  },
]

export const NARRATIVE = [
  "Je construis des outils qui simplifient le quotidien. Depuis plusieurs années, je conçois des applications sur mesure pour la ville de Strasbourg — des dashboards qui suivent les commandes de repas scolaires, les inscriptions, les dérogations, le parc d'iPads des écoles. Des trucs concrets, utiles, qui tournent tous les jours.",
  "En parallèle, je pilote le système d'information : sécurité, infrastructure, stratégie. Je fais le lien entre les équipes techniques et la direction, je traduis les besoins métier en solutions qui tiennent la route.",
  "Et quand j'ai cinq minutes, j'explore. En ce moment, on teste une IA locale avec mon équipe — parce que comprendre les outils de demain, c'est le meilleur moyen de rester pertinente aujourd'hui.",
]
