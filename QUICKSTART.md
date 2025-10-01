# 🚀 Quick Start Guide

## Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Ouvrir dans le navigateur
# http://localhost:3000
```

## Build & Deploy

```bash
# Build pour production
npm run build

# Tester le build localement
npm start

# Lint du code
npm run lint
```

## Déploiement sur Vercel

### Méthode 1: Via Git (Recommandé)
1. Push ton code sur GitHub
2. Connecte ton repo sur [vercel.com](https://vercel.com)
3. Vercel déploie automatiquement à chaque push

### Méthode 2: Via CLI
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## Structure du Projet

```
valoroulette/
├── src/
│   ├── app/           # Pages Next.js
│   ├── components/    # Composants React
│   ├── hooks/         # Custom hooks
│   └── types/         # Types TypeScript
├── public/            # Assets statiques
│   └── assets/
│       ├── img/       # Images
│       └── video/     # Vidéos
└── old/               # Ancienne version
```

## Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm start` - Lance le build en production
- `npm run lint` - Vérifie le code avec ESLint

## Environnement

Copie `.env.example` vers `.env.local` si besoin :
```bash
cp .env.example .env.local
```

## Troubleshooting

### Port déjà utilisé
```bash
# Windows
npx kill-port 3000

# Ou change le port
npm run dev -- -p 3001
```

### Erreurs TypeScript
```bash
# Régénère les types
npm run build
```

### Cache issues
```bash
# Supprime le cache
rm -rf .next
npm run build
```

## Support

- 📧 Issues: [GitHub Issues](https://github.com/Nohan-V2/Valoroulette/issues)
- 📖 Docs: Voir README.md
- 🔧 Optimizations: Voir OPTIMIZATIONS.md
