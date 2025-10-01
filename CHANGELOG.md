# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2025-09-30

### 🎉 Refonte Majeure - Migration vers React/Next.js

#### Added
- ✨ **Framework moderne**: Migration complète vers React 18 et Next.js 14
- ✨ **TypeScript**: Typage statique pour tous les composants
- ✨ **TailwindCSS**: Framework CSS utility-first pour un styling optimisé
- ✨ **Composants modulaires**: 9 composants React réutilisables
  - `Header` - En-tête avec logo et titre
  - `ActionButtons` - Boutons de sélection/désélection/roll
  - `RoleFilters` - Filtres par rôle d'agent
  - `AgentCard` - Carte individuelle d'agent
  - `AgentList` - Liste des agents
  - `BackgroundVideo` - Vidéo de fond
  - `SelectedAgentName` - Affichage de l'agent sélectionné
  - `LoadingSpinner` - Indicateur de chargement
  - `ErrorMessage` - Messages d'erreur
- ✨ **Custom Hook**: `useAgents` pour centraliser la logique métier
- ✨ **Pages spéciales**:
  - Page 404 personnalisée
  - Page d'erreur avec error boundary
  - Page de chargement
- ✨ **SEO amélioré**:
  - Métadonnées complètes (Open Graph, Twitter Cards)
  - Structured Data (Schema.org)
  - Sitemap dynamique
  - Robots.txt dynamique
  - PWA Manifest
- ✨ **Documentation complète**:
  - README mis à jour
  - OPTIMIZATIONS.md - Rapport des optimisations
  - MIGRATION_SUMMARY.md - Résumé de la migration
  - QUICKSTART.md - Guide de démarrage rapide
  - DEPLOYMENT_CHECKLIST.md - Checklist de déploiement
  - CONTRIBUTING.md - Guide de contribution
  - COMMANDS.md - Référence des commandes
  - CHANGELOG.md - Historique des versions

#### Changed
- 🔄 **Architecture**: Passage de HTML/CSS/JS vanilla à React/Next.js
- 🔄 **Styling**: CSS personnalisé → TailwindCSS
- 🔄 **State Management**: DOM manipulation → React Hooks
- 🔄 **Routing**: Page unique → Next.js App Router
- 🔄 **Images**: Balises `<img>` → Next.js Image Component
- 🔄 **Bundle**: JavaScript global → Code splitting automatique

#### Improved
- ⚡ **Performance**:
  - Lazy loading des images
  - Code splitting automatique
  - Optimisation des images
  - Caching intelligent
  - Bundle size réduit
- ♿ **Accessibilité**:
  - ARIA labels sur tous les éléments interactifs
  - Support complet du clavier
  - Messages d'état annoncés
  - Semantic HTML
  - Ratios de contraste optimaux
- 🔍 **SEO**:
  - Métadonnées enrichies
  - Structured data
  - Sitemap et robots.txt
  - Canonical URLs
  - PWA ready
- 💎 **Code Quality**:
  - TypeScript strict mode
  - ESLint configuré
  - Composants modulaires
  - Architecture propre
  - Documentation complète

#### Security
- 🔐 Headers de sécurité ajoutés:
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - X-XSS-Protection: 1; mode=block
  - Referrer-Policy: strict-origin-when-cross-origin

#### Fixed
- 🐛 Gestion des erreurs améliorée
- 🐛 États de chargement corrects
- 🐛 Messages d'erreur clairs

#### Deprecated
- ⚠️ Ancienne version HTML/CSS/JS (déplacée dans `/old/`)

---

## [1.0.0] - Date antérieure

### Initial Release
- 🎮 Sélection aléatoire d'agents Valorant
- 🔒 Verrouillage/déverrouillage d'agents
- 🎯 Filtrage par rôle
- 📱 Design responsive
- 🎨 Interface utilisateur inspirée de Valorant
- 🎥 Vidéo de fond animée
- ✅ Sélection/désélection en masse

---

## Format du Changelog

### Types de changements
- `Added` - Nouvelles fonctionnalités
- `Changed` - Modifications de fonctionnalités existantes
- `Deprecated` - Fonctionnalités obsolètes
- `Removed` - Fonctionnalités supprimées
- `Fixed` - Corrections de bugs
- `Security` - Corrections de sécurité
- `Improved` - Améliorations

---

## Liens

- [2.0.0] - 2025-09-30 - Migration React/Next.js
- [1.0.0] - Version initiale HTML/CSS/JS
