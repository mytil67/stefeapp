export interface AppProject {
  id: string
  name: string
  tagline: string
  description: string
  color: string
  category: string
  tone: 'red' | 'blue' | 'yellow' | 'black' | 'cream'
  url?: string
}

export const APPS: AppProject[] = [
  {
    id: 'repa',
    name: 'REPA',
    tagline: 'Repas scolaires',
    description: 'Dashboard analytique des commandes de repas pour les écoles de la ville de Strasbourg — maternelles et élémentaires. Suivi en temps réel, statistiques et pilotage.',
    color: '#0D7377',
    category: 'DATA · ÉDUCATION',
    tone: 'blue',
  },
  {
    id: 'oasis',
    name: 'OASIS',
    tagline: 'Inscriptions scolaires',
    description: 'Analytique des inscriptions scolaires de la ville et suivi des dérogations. Vision globale, filtres par école, par secteur, par année.',
    color: '#14919B',
    category: 'DATA · SERVICE PUBLIC',
    tone: 'yellow',
  },
  {
    id: 'zapi',
    name: 'ZAPI',
    tagline: 'Suivi iPads',
    description: 'Outil de suivi des 800 iPads déployés dans les écoles. Statistiques, analyses par établissement, état du parc en un coup d\u2019œil.',
    color: '#F4A261',
    category: 'PARC NUMÉRIQUE',
    tone: 'red',
  },
  {
    id: 'credi',
    name: 'CREDI',
    tagline: 'Lecture PDF auto',
    description: 'Lecture automatique de fichiers PDF de commandes de repas puis synchronisation des données vers REPA. Zéro saisie manuelle.',
    color: '#E76F51',
    category: 'AUTOMATISATION',
    tone: 'black',
  },
  {
    id: 'codec',
    name: 'CODEC',
    tagline: 'Conseils d\u2019école',
    description: 'Gestion complète des conseils d\u2019école : planning, documents, participants, comptes rendus.',
    color: '#7C3AED',
    category: 'COLLABORATION',
    tone: 'cream',
  },
  {
    id: 'qrcode',
    name: 'QRCODE',
    tagline: 'Questions-réponses',
    description: 'Gestion et suivi des questions-réponses des conseils d\u2019école. Chaque question tracée, chaque réponse accessible.',
    color: '#2563EB',
    category: 'SUIVI · TRANSPARENCE',
    tone: 'blue',
  },
  {
    id: 'voxcloud',
    name: 'VOX',
    tagline: 'Plateforme chorales',
    description: 'Plateforme simple et élégante pour les chorales. Gestion des répétitions, partitions, et communication.',
    color: '#0D7377',
    category: 'MUSIQUE · COLLECTIF',
    tone: 'red',
    url: 'https://vox-cloud.com',
  },
  {
    id: 'bauhaus',
    name: 'BAUHAUS',
    tagline: 'Design créatif',
    description: 'Expérimentation créative autour du design, de la géométrie et de la couleur. Un terrain de jeu visuel.',
    color: '#E76F51',
    category: 'DESIGN · EXPÉRIMENTATION',
    tone: 'yellow',
    url: 'https://bauhaus.stefe.app',
  },
  {
    id: 'studio',
    name: 'STUDIO',
    tagline: 'Labo technique',
    description: 'Laboratoire créatif et technique. Prototypage, tests d\u2019idées, exploration de nouvelles technos.',
    color: '#14919B',
    category: 'R&D · PROTOTYPAGE',
    tone: 'black',
    url: 'https://studio.stefe.app',
  },
]
