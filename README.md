# 🎲 Valoroulette

Un site de roulette inspiré de Valorant, conçu pour offrir une expérience fun et interactive entre potes ou pour décider de ton setup aléatoire en jeu !

---

## ✨ Fonctionnalités

- 🎯 **Roulette de rôles** : Choisis aléatoirement ton rôle (Duelist, Sentinel, etc.)
- 🔫 **Roulette d'agents** : Tire un agent au hasard pour spice up tes games
- 🎮 **UI moderne & responsive** : Adapté PC et mobile, avec une interface clean
- ⚡ **Performance optimisée** : Chargement rapide avec Next.js et optimisation d'images
- ♿ **Accessibilité** : Conforme aux standards WCAG avec ARIA labels
- 🔍 **SEO optimisé** : Métadonnées complètes et structured data

---

## 📸 Aperçu

![Valoroulette Preview](https://valoroulette-five.vercel.app/assets/img/preview.png)

---

## 🛠️ Technologies utilisées

- **React 18** - Framework UI moderne
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour plus de robustesse
- **TailwindCSS** - Framework CSS utility-first
- **Valorant API** - Données d'agents en temps réel
- Hébergé sur **[Vercel](https://vercel.com/)**

---

## 🔧 Installation & Développement

### Prérequis
- Node.js 18+ et npm/yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

---

## 📂 Structure du projet

```
valoroulette/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal avec SEO
│   │   ├── page.tsx         # Page d'accueil
│   │   └── globals.css      # Styles globaux
│   ├── components/
│   │   ├── ActionButtons.tsx
│   │   ├── AgentCard.tsx
│   │   ├── AgentList.tsx
│   │   ├── BackgroundVideo.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── Header.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── RoleFilters.tsx
│   │   └── SelectedAgentName.tsx
│   ├── hooks/
│   │   └── useAgents.ts     # Hook personnalisé pour la gestion d'état
│   └── types/
│       └── agent.ts         # Types TypeScript
├── public/
│   └── assets/              # Images & vidéos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## ⚡ Optimisations implémentées

### Performance
- ✅ Image optimization avec Next.js Image
- ✅ Lazy loading des composants
- ✅ Code splitting automatique
- ✅ Compression automatique des assets
- ✅ Caching intelligent

### SEO
- ✅ Métadonnées complètes (Open Graph, Twitter Cards)
- ✅ Structured Data (Schema.org)
- ✅ Sitemap et robots.txt
- ✅ Canonical URLs
- ✅ Google Search Console verification

### Accessibilité
- ✅ ARIA labels sur tous les composants interactifs
- ✅ Navigation au clavier
- ✅ Lecteurs d'écran supportés
- ✅ Contrast ratios respectés
- ✅ Semantic HTML

### Best Practices
- ✅ TypeScript pour la sécurité des types
- ✅ ESLint pour la qualité du code
- ✅ Hooks React pour la gestion d'état
- ✅ Responsive design mobile-first
- ✅ Error boundaries et gestion d'erreurs

---

## 💡 Améliorations futures possibles

- Ajouter une roulette d'**armes**
- Ajouter des **animations sonores**
- Ajout d'un mode **"full random challenge"**
- Générer un **lien de partage du tirage**
- Mode sombre/clair
- Sauvegarde des préférences utilisateur (localStorage)
- Animations de transition plus fluides
- Support multilingue (i18n)

---

## 📜 Licence

Projet open source sous licence **MIT**.

---

## 👨‍💻 Développé par

**[Nohan-V2](https://github.com/Nohan-V2)**
Dév front & Valorant enjoyer 💥

---

> *"No need to lock, just spin and go!"*
