# 🛠️ Commandes Utiles - Valoroulette

## 📦 Installation & Setup

```bash
# Installer les dépendances
npm install

# Ou avec yarn
yarn install

# Ou avec pnpm
pnpm install
```

## 🚀 Développement

```bash
# Lancer le serveur de développement
npm run dev

# Sur un port différent
npm run dev -- -p 3001

# Ouvrir automatiquement le navigateur
npm run dev -- --open
```

Le site sera accessible sur **http://localhost:3000**

## 🏗️ Build & Production

```bash
# Build pour production
npm run build

# Lancer le build en local
npm start

# Build + Start
npm run build && npm start
```

## 🧪 Quality & Linting

```bash
# Vérifier le code avec ESLint
npm run lint

# Fix automatique des erreurs ESLint
npm run lint -- --fix

# Vérifier les types TypeScript
npx tsc --noEmit
```

## 🧹 Maintenance

```bash
# Nettoyer le cache Next.js
rm -rf .next

# Nettoyer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install

# Nettoyer tout et rebuilder
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

## 📊 Analyse

```bash
# Analyser la taille du bundle
npm run build -- --analyze

# Vérifier les dépendances obsolètes
npm outdated

# Audit de sécurité
npm audit

# Fix des vulnérabilités
npm audit fix
```

## 🔄 Updates

```bash
# Update des dépendances mineures
npm update

# Update de Next.js
npm install next@latest

# Update de React
npm install react@latest react-dom@latest

# Update de TailwindCSS
npm install tailwindcss@latest

# Update de toutes les dépendances (attention!)
npx npm-check-updates -u
npm install
```

## 🚢 Déploiement

### Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Login
vercel login

# Déployer en preview
vercel

# Déployer en production
vercel --prod

# Lister les déploiements
vercel ls

# Voir les logs
vercel logs
```

### Git & Vercel Auto-Deploy

```bash
# Ajouter les changements
git add .

# Commit
git commit -m "feat: description du changement"

# Push (déclenche auto-deploy sur Vercel)
git push origin main
```

## 🐛 Debug

```bash
# Mode debug Next.js
NODE_OPTIONS='--inspect' npm run dev

# Afficher les infos de build
npm run build -- --debug

# Vérifier la configuration Next.js
npx next info
```

## 📦 Cache & Optimization

```bash
# Précharger les dépendances
npm ci

# Cache NPM
npm cache clean --force

# Vérifier l'intégrité des packages
npm install --package-lock-only
```

## 🧪 Testing (si ajouté)

```bash
# Lancer les tests (à configurer)
npm test

# Tests en mode watch
npm test -- --watch

# Coverage
npm test -- --coverage
```

## 📱 Mobile Testing

```bash
# Exposer sur le réseau local
npm run dev -- -H 0.0.0.0

# Puis accéder via: http://[votre-ip]:3000
```

## 🔍 SEO & Performance

```bash
# Générer le sitemap
npm run build  # Génère automatiquement

# Tester les Core Web Vitals
# Utiliser: https://pagespeed.web.dev/

# Lighthouse audit
npx lighthouse http://localhost:3000 --view
```

## 🎨 Styling

```bash
# Générer les classes TailwindCSS
npx tailwindcss -i ./src/app/globals.css -o ./dist/output.css

# Mode watch pour Tailwind
npx tailwindcss -i ./src/app/globals.css -o ./dist/output.css --watch
```

## 📝 Git

```bash
# Voir le statut
git status

# Créer une branche
git checkout -b feature/nouvelle-fonctionnalite

# Merger une branche
git checkout main
git merge feature/nouvelle-fonctionnalite

# Push une branche
git push origin feature/nouvelle-fonctionnalite

# Tag une version
git tag v2.0.0
git push origin v2.0.0
```

## 🔐 Environment Variables

```bash
# Créer le fichier .env.local
cp .env.example .env.local

# Vérifier les variables d'environnement
echo $NEXT_PUBLIC_API_URL

# Sur Windows PowerShell
echo $env:NEXT_PUBLIC_API_URL
```

## 🆘 Troubleshooting

### Port déjà utilisé
```bash
# Windows
npx kill-port 3000

# Linux/Mac
lsof -ti:3000 | xargs kill
```

### Erreurs de build
```bash
# Nettoyer et rebuilder
rm -rf .next node_modules
npm install
npm run build
```

### Erreurs TypeScript
```bash
# Vérifier les types
npx tsc --noEmit

# Régénérer les types Next.js
rm -rf .next
npm run dev
```

### Cache problems
```bash
# Nettoyer tous les caches
rm -rf .next node_modules/.cache
npm cache clean --force
npm run build
```

---

## 📚 Ressources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **TailwindCSS Docs**: https://tailwindcss.com/docs
- **TypeScript Docs**: https://www.typescriptlang.org/docs
- **Vercel Docs**: https://vercel.com/docs

---

## 🎯 Quick Commands Reference

| Commande | Description |
|----------|-------------|
| `npm install` | Installer les dépendances |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production |
| `npm start` | Lancer le build |
| `npm run lint` | Vérifier le code |
| `vercel` | Déployer en preview |
| `vercel --prod` | Déployer en production |

---

**Tip**: Ajoute ces alias dans ton terminal pour aller plus vite :
```bash
alias nrd="npm run dev"
alias nrb="npm run build"
alias nrs="npm start"
alias nrl="npm run lint"
```
