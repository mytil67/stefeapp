# Carte de visite interactive — stefe.app v3

## Intent & Why

Le site actuel est un portfolio CV : grilles de compétences, badges de niveaux, métriques corporate. Stefe veut une carte de visite interactive — un site personnel qui montre qui elle est à travers ce qu'elle crée, pas à travers une liste de skills. Le design doit refléter une personnalité créative, curieuse, rigoureuse. Pas corporate, pas CV.

## Goals

- **Carte de visite, pas CV** : on arrive, on comprend en 5 secondes qui c'est et ce qu'elle fait
- **Storytelling** : raconter à la première personne, pas lister
- **Showcase visuel** : les projets parlent d'eux-mêmes
- **Ultra simple** : hero + narration + projets + contact, c'est tout
- **À son image** : bleu canard, fond clair, touche eighties subtile, ton conversationnel

## Non-goals

- Pas de section compétences/skills
- Pas de badges de niveaux (Expert, Avancé...)
- Pas de section "double casquette" formelle
- Pas de formulaire de contact
- Pas de métriques/KPIs
- Pas de snippets de code

## Anti-goals

- Un site qui fait CV/LinkedIn amélioré
- Un site corporate avec jargon technique
- Un site qui liste au lieu de raconter
- Un site avec trop de texte — c'est une carte de visite, pas un roman

## Structure de la page

### 1. Hero — plein écran, centré
- **"Stefe"** en grand, typographie forte
- Le trait sunset (dégradé pêche→corail, 48px × 3px) en dessous — le clin d'œil eighties
- Sous-titre discret : "Responsable informatique & développeuse" en stone-400
- Un seul CTA discret vers #contact ou scroll indicator

### 2. Narration — "Ce que je fais"
- 2-3 paragraphes courts à la première personne, ton conversationnel
- Contenu : elle construit des outils métier sur mesure pour la ville de Strasbourg (écoles), elle pilote un SI, elle fait grandir son équipe, elle explore l'IA locale
- Pas de bullet points, pas de sous-titres techniques
- Style : texte centré ou légèrement décalé, taille de lecture confortable (text-lg), bonne respiration

### 3. Showcase projets — grille de cartes
- **Tuiles uniformes 1x1** (non négociable)
- Chaque carte : nom du projet + une phrase d'accroche + lien si en ligne
- Projets :
  - **REPA** — Dashboard analytique des commandes de repas scolaires
  - **OASIS** — Analytique des inscriptions scolaires et dérogations
  - **ZAPI** — Suivi et statistiques de 800 iPads scolaires
  - **CREDI** — Lecture automatique de PDF et synchronisation vers REPA
  - **CODEC** — Gestion des conseils d'école
  - **QRCODE** — Suivi des questions-réponses des conseils d'école
  - **VoxCloud** — Plateforme pour chorales (vox-cloud.com)
  - **Bauhaus** — Projet créatif (bauhaus.stefe.app)
  - **Studio** — Projet créatif (studio.stefe.app)
- Pas de tags technos, pas de badges, pas de rôle affiché
- Hover subtil (card-hover)

### 4. Contact — minimaliste
- Trois liens/icônes : Email, LinkedIn, GitHub
- Centré, pas de formulaire, pas de texte superflu
- Éventuellement le prénom + un mot : "Envie d'échanger ?" au-dessus

### 5. Footer — quasi inexistant
- Une ligne discrète avec "stefe.app" et le petit cœur teal. C'est tout.

## Design System (hérité de v2, confirmé)

- **Fond** : light par défaut (stone-50), dark toggle
- **Couleur primaire** : bleu canard (teal-500 #0D7377 / teal-400 #14919B)
- **Accent eighties** : dégradé sunset pêche→corail (#F4A261 → #E76F51), utilisé en trait décoratif uniquement
- **Typo** : Plus Jakarta Sans
- **Cards** : blanc, border stone-200, shadow-sm, hover shadow-md + lift
- **Dark toggle** : dans la navbar ou en haut à droite, discret

## Navbar

- Ultra légère : logo "Stefe" à gauche, dark toggle à droite, c'est tout
- Pas de liens de navigation (la page est courte, on scrolle)
- Fixée en haut, backdrop blur au scroll

## Composants à supprimer

- `ExpertiseStack.tsx` — supprimé
- `DualIdentity.tsx` — supprimé
- `ContactSection.tsx` — remplacé par un bloc contact minimaliste
- `Projects.tsx` — remplacé par un showcase visuel
- `Hero.tsx` — réécrit complètement

## Composants à garder/adapter

- `Navbar.tsx` — simplifiée (logo + dark toggle uniquement)
- `Footer.tsx` — réduit à une ligne
- `App.tsx` — structure simplifiée
- `useTheme.ts` — inchangé

## Données

- `content.ts` — réécrit : juste un tableau de projets (nom, accroche, url optionnelle) et le texte narratif

## Contraintes

- Stack inchangée : React 19 + TypeScript + Tailwind 3.4 + Vite
- Grille projets : tuiles uniformes 1x1
- Français
- Pas de nouvelles dépendances
