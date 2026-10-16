export interface Skill {
  name: string
  category: 'dev' | 'infra' | 'governance' | 'management'
  level: string
  description: string
  highlight?: boolean
}

export interface Project {
  title: string
  role: string
  badge: string
  impact: string
  highlight: string
  description: string
  tags: string[]
}

export const SKILLS: Skill[] = [
  // Dev & Craft
  { name: 'TypeScript / JavaScript', category: 'dev', level: 'Expert', description: 'Typage strict, architectures modulaires et frameworks modernes', highlight: true },
  { name: 'React & Écosystème Web', category: 'dev', level: 'Avancé', description: 'State management, SSR/SSG, performances et ergonomie soignée', highlight: true },
  { name: 'Node.js / APIs REST & GraphQL', category: 'dev', level: 'Avancé', description: 'Services résilients, contrats d\'API stricts et sécurisation' },
  { name: 'Clean Code & Craftsmanship', category: 'dev', level: 'Approfondi', description: 'TDD/BDD, refactorings sans régression, revues de code exigeantes', highlight: true },
  { name: 'Python & Scripting', category: 'dev', level: 'Avancé', description: 'Automatisation de flux SI, outillage interne et data pipelines' },
  { name: 'SQL & Modélisation de données', category: 'dev', level: 'Avancé', description: 'PostgreSQL, optimisations de requêtes, intégrité transactionnelle' },

  // Infra & Cloud
  { name: 'Cloud AWS / Azure / GCP', category: 'infra', level: 'Avancé', description: 'Architectures serveur & serverless, optimisation des coûts (FinOps)', highlight: true },
  { name: 'Docker & Conteneurs', category: 'infra', level: 'Avancé', description: 'Standardisation des environnements dev/staging/prod' },
  { name: 'CI/CD & Automatisation', category: 'infra', level: 'Avancé', description: 'Pipelines GitLab CI, GitHub Actions, déploiements sans coupure', highlight: true },
  { name: 'Réseaux & Systèmes Linux', category: 'infra', level: 'Avancé', description: 'Administration, DNS, VPN, filtrage, gestion des certificats SSL' },
  { name: 'Supervision & Observabilité', category: 'infra', level: 'Avancé', description: 'Métriques clés, alertes temps réel, centralisation des logs' },

  // Sécurité & Gouvernance SI
  { name: 'Cybersécurité & Zero-Trust', category: 'governance', level: 'Stratégique', description: 'Durcissement des accès, gestion des identités (IAM), MFA systématique', highlight: true },
  { name: 'Plan de Reprise d\u2019Activité (PRA / PCA)', category: 'governance', level: 'Stratégique', description: 'Stratégie de sauvegardes immuables et simulations de sinistre', highlight: true },
  { name: 'Conformité RGPD & Audit SI', category: 'governance', level: 'Avancé', description: 'Cartographie des données sensibles, respect des réglementations' },
  { name: 'Gestion des Licences & Actifs', category: 'governance', level: 'Avancé', description: 'Rationalisation du parc logiciel, négociation fournisseurs et ROI' },

  // Management & Méthodes
  { name: 'Leadership & Conduite du changement', category: 'management', level: 'Avancé', description: 'Fédérer autour d\u2019une vision technique, débloquer les freins opérationnels', highlight: true },
  { name: 'Gestion de Projets & Méthodes Agiles', category: 'management', level: 'Avancé', description: 'Scrum / Kanban adaptés à la réalité du terrain et des plannings' },
  { name: 'Relation Métier & Vulgarisation', category: 'management', level: 'Expert', description: 'Traduire les besoins business en solutions techniques fiables', highlight: true },
  { name: 'Mentoring & Montée en compétences', category: 'management', level: 'Passionné', description: 'Accompagnement des équipes, partage de bonnes pratiques et culture du feedback' },
]

export const PROJECTS: Project[] = [
  {
    title: 'Modernisation & Migration Cloud Hybride',
    role: 'Responsable SI & Architecte',
    badge: 'Infrastructure & Résilience',
    impact: 'Zéro interruption métier & réduction des coûts d\u2019exploitation',
    highlight: 'Migration transparente, zéro coupure — et des déploiements 3x plus rapides.',
    description: 'Transition progressive d\u2019une infrastructure vieillissante vers un modèle hybride sécurisé. Automatisation des déploiements, mise en place d\u2019un PRA opérationnel et migration transparente des bases de données critiques.',
    tags: ['Cloud', 'Docker', 'Terraform / IaC', 'PRA', 'CI/CD'],
  },
  {
    title: 'Refonte de la Plateforme Métier Core-Business',
    role: 'Tech Lead & Codeuse Fullstack',
    badge: 'Application & Ergonomie',
    impact: 'Adoption utilisateur unanime & suppression de la dette technique',
    highlight: 'Les utilisateurs l\u2019ont adoptée du jour au lendemain — la meilleure validation possible.',
    description: 'Conception et développement d\u2019un nouvel écosystème applicatif web sur-mesure pour remplacer un logiciel legacy. Architecture par composants, design system réutilisable, APIs sécurisées et temps de réponse divisés par 3.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'Plan Global de Cyber-Défense & Conformité',
    role: 'Responsable Informatique',
    badge: 'Sécurité & Gouvernance',
    impact: 'Certification des process et sensibilisation proactive des collaborateurs',
    highlight: 'Toute l\u2019entreprise sécurisée, du stagiaire au comité de direction.',
    description: 'Déploiement d\u2019une politique Zero-Trust : audit complet des droits d\u2019accès, bascule SSO/MFA généralisée, gestion centralisée des postes de travail et ateliers immersifs anti-phishing pour l\u2019ensemble des équipes.',
    tags: ['Zero-Trust', 'IAM / SSO', 'RGPD', 'Sensibilisation', 'Audit'],
  },
  {
    title: 'Structuration de l\u2019Équipe Tech & Rituels Agiles',
    role: 'Lead & Management',
    badge: 'Management & Culture Tech',
    impact: 'Climat de confiance, prédictibilité des livraisons et autonomie accrue',
    highlight: 'Une équipe soudée qui livre plus vite, sans sacrifier la qualité.',
    description: 'Mise en place de rituels d\u2019équipe agiles pragmatiques, formalisation des processus de review, sessions de partage technique hebdomadaires et clarification de la roadmap entre direction générale et équipe technique.',
    tags: ['Agile / Scrum', 'Mentoring', 'Revues de code', 'Roadmap SI'],
  }
]
