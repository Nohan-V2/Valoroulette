# 📁 Source Code - Valoroulette

Ce dossier contient tout le code source de l'application React/Next.js.

---

## 📂 Structure

```
src/
├── app/              # Next.js App Router
├── components/       # Composants React réutilisables
├── hooks/            # Custom React Hooks
└── types/            # Définitions TypeScript
```

---

## 🗂️ Détails des Dossiers

### `app/` - Next.js App Router (9 fichiers)

Pages et configurations Next.js :

- **layout.tsx** - Layout global avec SEO et métadonnées
- **page.tsx** - Page d'accueil principale
- **globals.css** - Styles globaux avec TailwindCSS
- **error.tsx** - Page d'erreur avec error boundary
- **not-found.tsx** - Page 404 personnalisée
- **loading.tsx** - État de chargement
- **manifest.ts** - Manifest PWA
- **sitemap.ts** - Sitemap dynamique
- **robots.ts** - Robots.txt dynamique

### `components/` - Composants React (9 fichiers)

Composants UI modulaires et réutilisables :

| Composant | Description | Props |
|-----------|-------------|-------|
| **Header.tsx** | Logo et titre | - |
| **ActionButtons.tsx** | Boutons Select/Roll/Deselect | onSelectAll, onDeselectAll, onRoll |
| **RoleFilters.tsx** | Filtres par rôle | activeRoles, onToggleRole |
| **AgentCard.tsx** | Carte d'agent individuelle | agent, isLocked, isSelected, isNotSelected, onToggleLock |
| **AgentList.tsx** | Liste de toutes les cartes | agents, lockedAgents, selectedAgent, onToggleLock |
| **BackgroundVideo.tsx** | Vidéo de fond | - |
| **SelectedAgentName.tsx** | Affichage du nom sélectionné | agentName |
| **LoadingSpinner.tsx** | Spinner de chargement | - |
| **ErrorMessage.tsx** | Message d'erreur | message |

### `hooks/` - Custom Hooks (1 fichier)

Hook personnalisé pour la logique métier :

- **useAgents.ts** - Gestion complète de l'état des agents
  - Chargement depuis l'API
  - Verrouillage/déverrouillage
  - Filtrage par rôle
  - Tirage aléatoire
  - Gestion des erreurs

### `types/` - Types TypeScript (1 fichier)

Définitions de types :

- **agent.ts** - Types pour les agents Valorant
  - `Agent` - Interface agent
  - `ApiResponse` - Réponse de l'API
  - `RoleName` - Types de rôles

---

## 🎯 Principes de Design

### **Modularity**
Chaque composant est indépendant et réutilisable.

### **Single Responsibility**
Chaque composant a une seule responsabilité claire.

### **Type Safety**
Tout est typé avec TypeScript pour éviter les bugs.

### **Composition**
Les composants sont composables et peuvent être combinés.

---

## 🔧 Conventions de Code

### **Naming**
- Composants: PascalCase (`AgentCard.tsx`)
- Hooks: camelCase avec préfixe `use` (`useAgents.ts`)
- Types: PascalCase (`Agent`, `RoleName`)
- Fonctions: camelCase (`toggleLock`, `selectAll`)

### **File Structure**
```typescript
// Imports
import React from 'react'
import type { Props } from '@/types'

// Interface
interface ComponentProps {
  prop1: string
  prop2: number
}

// Component
export default function Component({ prop1, prop2 }: ComponentProps) {
  // Logic
  
  // Render
  return (
    <div>
      ...
    </div>
  )
}
```

### **TypeScript**
- Toujours typer les props
- Utiliser `interface` pour les props
- Utiliser `type` pour les unions/intersections
- Éviter `any`, utiliser `unknown` si nécessaire

### **React**
- Composants fonctionnels uniquement
- Hooks pour la logique
- Props destructurées
- JSX retourné à la fin

---

## 🚀 Comment Ajouter...

### **Un Nouveau Composant**
```bash
# 1. Créer le fichier
touch src/components/NewComponent.tsx

# 2. Template de base
```typescript
'use client'

interface NewComponentProps {
  // props
}

export default function NewComponent({ }: NewComponentProps) {
  return (
    <div>
      {/* content */}
    </div>
  )
}
```

### **Un Nouveau Hook**
```bash
# 1. Créer le fichier
touch src/hooks/useNewHook.ts

# 2. Template de base
```typescript
'use client'

import { useState } from 'react'

export function useNewHook() {
  const [state, setState] = useState()
  
  // Logic
  
  return {
    state,
    // functions
  }
}
```

### **Un Nouveau Type**
```bash
# 1. Ajouter dans src/types/
touch src/types/newType.ts

# 2. Template de base
```typescript
export interface NewType {
  id: string
  name: string
}

export type NewUnion = 'value1' | 'value2'
```

---

## 📝 Best Practices

### **Performance**
- Utiliser `React.memo()` si nécessaire
- Optimiser les re-renders
- Lazy loading des composants lourds

### **Accessibilité**
- ARIA labels sur tous les éléments interactifs
- Semantic HTML
- Navigation au clavier

### **SEO**
- Métadonnées dans `layout.tsx`
- Structured data
- Sitemap et robots.txt

### **Code Quality**
- ESLint pour la qualité
- TypeScript strict mode
- Tests pour les fonctionnalités critiques

---

## 🧪 Testing

```bash
# Lancer les tests (si configurés)
npm test

# Tests en mode watch
npm test -- --watch
```

---

## 📚 Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [React Hooks](https://react.dev/reference/react)
- [TailwindCSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

---

_Code maintenu par Nohan-V2_
