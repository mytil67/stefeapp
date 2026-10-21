export interface AppProject {
  id: string
  name: string
  tagline: string
  description: string
  category: string
  url?: string
}

export const APPS: AppProject[] = [
  {
    id: 'repa',
    name: 'REPA',
    tagline: 'Repas scolaires',
    description: 'Dashboard analytique des commandes de repas pour les écoles de la ville de Strasbourg — maternelles et élémentaires. Suivi en temps réel, statistiques et pilotage.',
    category: 'DATA · ÉDUCATION',
  },
  {
    id: 'oasis',
    name: 'OASIS',
    tagline: 'Inscriptions scolaires',
    description: 'Analytique des inscriptions scolaires de la ville et suivi des dérogations. Vision globale, filtres par école, par secteur, par année.',
    category: 'DATA · SERVICE PUBLIC',
  },
  {
    id: 'zapi',
    name: 'ZAPI',
    tagline: 'Suivi iPads',
    description: 'Outil de suivi des 800 iPads déployés dans les écoles. Statistiques, analyses par établissement, état du parc en un coup d\u2019œil.',
    category: 'PARC NUMÉRIQUE',
  },
  {
    id: 'credi',
    name: 'CREDI',
    tagline: 'Lecture PDF auto',
    description: 'Lecture automatique de fichiers PDF de commandes de repas puis synchronisation des données vers REPA. Zéro saisie manuelle.',
    category: 'AUTOMATISATION',
  },
  {
    id: 'codec',
    name: 'CODEC',
    tagline: 'Conseils d\u2019école',
    description: 'Gestion complète des conseils d\u2019école : planning, documents, participants, comptes rendus.',
    category: 'COLLABORATION',
  },
  {
    id: 'qrcode',
    name: 'QRCODE',
    tagline: 'Questions-réponses',
    description: 'Gestion et suivi des questions-réponses des conseils d\u2019école. Chaque question tracée, chaque réponse accessible.',
    category: 'SUIVI · TRANSPARENCE',
  },
  {
    id: 'voxcloud',
    name: 'VOX',
    tagline: 'Plateforme chorales',
    description: 'Plateforme simple et élégante pour les chorales. Gestion des répétitions, partitions, et communication.',
    category: 'MUSIQUE · COLLECTIF',
    url: 'https://vox-cloud.com',
  },
  {
    id: 'bauhaus',
    name: 'BAUHAUS',
    tagline: 'Design créatif',
    description: 'Expérimentation créative autour du design, de la géométrie et de la couleur. Un terrain de jeu visuel.',
    category: 'DESIGN · EXPÉRIMENTATION',
    url: 'https://bauhaus.stefe.app',
  },
  {
    id: 'studio',
    name: 'STUDIO',
    tagline: 'Labo technique',
    description: 'Laboratoire créatif et technique. Prototypage, tests d\u2019idées, exploration de nouvelles technos.',
    category: 'R&D · PROTOTYPAGE',
    url: 'https://studio.stefe.app',
  },
]
