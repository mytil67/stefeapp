# Redesign Stefe.app v2 — "La créative qui code"

## Intent & Why

Le site actuel (dark mode, vert émeraude, glassmorphism, snippets de code, métriques corporate) donne une image trop "geek". Stefe est une créative rigoureuse et curieuse, Gen X, neurodivergente, avec une double casquette dev + manager IT. Le site doit refléter cette personnalité : inventive, humaine, confiante — pas une plaquette corporate ni un terminal.

## Goals

- **Identité visuelle à l'image de Stefe** : lumineuse, moderne, épurée, bleu canard, touche eighties subtile
- **Ton conversationnel** : parler comme une personne, pas comme un slide deck
- **Double facette visible** : montrer autant la codeuse/architecte que la manager/visionnaire
- **Accessible à deux publics** : recruteurs/clients ET profils tech
- **Light mode par défaut** avec bascule dark mode

## Non-goals

- Pas de refonte structurelle (les sections restent les mêmes : hero, dualité, expertises, projets, contact)
- Pas de changement de stack (React, Tailwind, Vite restent)
- Pas d'ajout de nouvelles pages ou fonctionnalités (blog, etc.)

## Anti-goals (ce qui serait un échec même si ça marche)

- Un site qui fait "template corporate LinkedIn"
- Un site trop girly/pastel qui ne dit pas "tech"
- Perdre la crédibilité technique en enlevant le côté geek
- Un résultat criard/Memphis qui crie "EIGHTIES" au lieu de murmurer

## Palette de couleurs

### Light mode (défaut)
- **Background** : blanc cassé `#FAFAF9` / `#F5F5F4` (stone-50/100)
- **Surface/cards** : blanc `#FFFFFF` avec bordures subtiles stone-200
- **Texte principal** : anthracite `#1C1917` (stone-900)
- **Texte secondaire** : `#57534E` (stone-600)
- **Primaire** : bleu canard `#0D7377` (appels à l'action, liens, accents)
- **Primaire hover/light** : `#14919B`
- **Primaire très clair** : `#E0F2F1` (backgrounds subtils)
- **Accent eighties** : dégradé sunset discret pêche→corail `#F4A261` → `#E76F51` — utilisé en touche (traits décoratifs, hovers, petits détails)

### Dark mode
- **Background** : `#1C1917` (stone-900)
- **Surface/cards** : `#292524` (stone-800) avec bordures stone-700
- **Texte principal** : `#FAFAF9` (stone-50)
- **Texte secondaire** : `#A8A29E` (stone-400)
- **Primaire** : `#14919B` (plus lumineux en dark)
- **Accent eighties** : même dégradé, légèrement plus saturé

## Typographie

- **Corps & titres** : Plus Jakarta Sans (déjà en place, moderne et chaleureuse)
- **Accents monospace** : JetBrains Mono conservé mais usage réduit — uniquement pour de petits labels techniques (noms de technos dans les tags), jamais pour des blocs de code décoratifs
- **Tailles** : garder la hiérarchie actuelle, peut-être légèrement plus grande pour les titres hero

## Touche eighties (subtile)

Les clins d'œil que les neurodivergents repèreront vite :
- **Lignes géométriques fines** : un chevron ou triangle en décoration de section, en trait fin bleu canard ou sunset
- **Dégradé sunset** : utilisé sur un trait horizontal, un underline de titre, ou un hover — pas en aplat
- **Formes** : coins légèrement plus arrondis qu'avant, mais un élément angulaire (chevron, ligne diagonale) qui casse le tout-rond moderne
- **Ombre portée douce** au lieu du glow néon émeraude

## Contenu — Réécriture du ton

### Hero
- **Avant** : "L'art du code. La maîtrise du Système d'Information." + snippet de code + 4 métriques
- **Après** : accroche conversationnelle en 2 phrases, directe et humaine. Ex : "Je construis des systèmes qui tiennent la route — et les équipes qui les font tourner." + sous-texte court sur la double casquette. Pas de métriques, pas de code.

### Dualité
- **Ton** : plus personnel. "Je code. Je pilote. Je fais le lien." plutôt que des descriptions à la troisième personne.
- **Contenu** : garder les deux facettes mais racontées comme une histoire, pas comme une fiche de poste

### Expertises
- Garder le système de filtres/recherche (utile)
- Alléger le visuel : tags épurés sur fond clair au lieu de cards sombres avec glow

### Projets
- **Grille uniforme 1x1** (non négociable)
- Enlever les KPIs froids (99.98%, -65%...)
- Remplacer par une phrase d'impact humaine par projet
- Garder les tags technos

### Contact
- Garder simple et direct
- Ton chaleureux : "Envie d'échanger ?" plutôt que "SLA 24h"

## Dark mode toggle

- Bouton dans la navbar (icône soleil/lune)
- Respecter `prefers-color-scheme` du système par défaut
- Persister le choix en localStorage
- Utiliser la classe `dark` sur `<html>` (déjà configuré dans Tailwind avec `darkMode: 'class'`)

## Éléments à supprimer

- Snippet de code dans le hero (ArchitecturePreview)
- Métriques chiffrées (METRICS dans content.ts)
- Effets glassmorphism (backdrop-blur, bg transparents)
- Glow émeraude (box-shadow vert)
- Points pulsants "status système"
- Toute référence "SLA", "Zero-Trust" en accroche (ok en tag technique)

## Éléments à ajouter

- Dark mode toggle dans Navbar
- Dégradé sunset en élément décoratif (trait, accent)
- Ombres douces (shadow-sm/md au lieu de glow)
- Transitions de couleur pour le mode switch

## Contraintes

- Stack inchangée : React 19 + TypeScript + Tailwind 3.4 + Vite
- Contenu dans `content.ts` (data-driven, ne pas hardcoder)
- Responsive (mobile-first déjà en place)
- Français uniquement
- Grille projets : tuiles uniformes 1x1, jamais de tuile agrandie

## Ce qui est laissé au builder

- Choix exact des tailles de titre/espacement (respecter l'harmonie actuelle)
- Implémentation technique du dark toggle (hook React + localStorage)
- Détails d'animation (transitions douces, pas de glow)
- Formulation exacte des textes conversationnels (dans l'esprit décrit)
