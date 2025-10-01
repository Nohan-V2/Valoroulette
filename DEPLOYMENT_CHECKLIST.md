# ✅ Deployment Checklist

## Pre-Deployment

### 1. Tests Locaux
- [ ] `npm install` fonctionne sans erreurs
- [ ] `npm run dev` lance le serveur sur http://localhost:3000
- [ ] Toutes les fonctionnalités marchent :
  - [ ] Sélection/désélection d'agents
  - [ ] Filtrage par rôle
  - [ ] Tirage aléatoire
  - [ ] Verrouillage/déverrouillage
  - [ ] Message d'erreur si tous verrouillés
- [ ] Le design est responsive (mobile, tablet, desktop)
- [ ] `npm run build` réussit sans erreurs
- [ ] `npm run lint` ne retourne aucune erreur

### 2. Qualité
- [ ] Les images s'affichent correctement
- [ ] La vidéo de fond fonctionne
- [ ] Pas d'erreurs dans la console navigateur
- [ ] Navigation au clavier fonctionne
- [ ] Les ARIA labels sont présents

### 3. SEO
- [ ] Balise title correcte
- [ ] Meta description présente
- [ ] Open Graph tags configurés
- [ ] Favicon visible
- [ ] Sitemap accessible

---

## Deployment sur Vercel

### Option 1: Via Interface Vercel (Recommandé)

1. **Préparer Git**
```bash
git add .
git commit -m "feat: migration to React/Next.js v2.0"
git push origin main
```

2. **Connecter à Vercel**
- Va sur [vercel.com](https://vercel.com)
- Connecte-toi avec GitHub
- Clique "Add New Project"
- Sélectionne le repo `Valoroulette`
- Framework Preset: **Next.js** (auto-détecté)
- Laisse les paramètres par défaut
- Clique "Deploy"

3. **Configuration (si nécessaire)**
- Build Command: `npm run build` (déjà configuré)
- Output Directory: `.next` (auto)
- Install Command: `npm install` (auto)

### Option 2: Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Login
vercel login

# Déployer
vercel

# Production deployment
vercel --prod
```

---

## Post-Deployment

### 1. Vérifications Vercel
- [ ] Le déploiement est réussi (status ✅)
- [ ] L'URL de production fonctionne
- [ ] Pas d'erreurs dans les logs Vercel

### 2. Tests en Production
- [ ] Ouvrir l'URL de production
- [ ] Tester toutes les fonctionnalités
- [ ] Vérifier le temps de chargement
- [ ] Tester sur mobile
- [ ] Tester sur différents navigateurs

### 3. Performance & SEO
- [ ] Lancer Lighthouse audit
  - Performance: 90+ ✅
  - Accessibility: 95+ ✅
  - Best Practices: 95+ ✅
  - SEO: 95+ ✅
- [ ] Vérifier Core Web Vitals sur [PageSpeed Insights](https://pagespeed.web.dev/)

### 4. SEO Setup
- [ ] Soumettre le sitemap à Google Search Console
  - URL: `https://valoroulette-five.vercel.app/sitemap.xml`
- [ ] Vérifier l'indexation Google
- [ ] Tester les Open Graph tags sur [opengraph.xyz](https://www.opengraph.xyz/)
- [ ] Tester les Twitter Cards sur [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## Custom Domain (Optionnel)

Si tu veux un domaine personnalisé :

1. **Dans Vercel Dashboard**
   - Va dans Settings → Domains
   - Ajoute ton domaine custom
   - Suis les instructions DNS

2. **Mettre à jour les URLs**
   - Dans `src/app/layout.tsx`: modifier `metadataBase`
   - Dans `src/app/sitemap.ts`: modifier l'URL
   - Dans `src/app/robots.ts`: modifier l'URL
   - Redéployer

---

## Monitoring (Optionnel)

### Analytics
Si tu veux ajouter Google Analytics :

1. Créer un compte GA
2. Récupérer le GA_ID
3. Ajouter dans Vercel Environment Variables :
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Ajouter le script dans `layout.tsx`

### Error Tracking
Pour tracker les erreurs en production :
- Sentry
- LogRocket
- Rollbar

---

## Rollback Plan

Si problème en production :

### Via Vercel Dashboard
1. Va dans Deployments
2. Trouve le dernier déploiement stable
3. Clique sur "..." → "Promote to Production"

### Via Git
```bash
# Revenir au commit précédent
git revert HEAD
git push origin main
# Vercel redéploiera automatiquement
```

---

## Maintenance

### Updates régulières
```bash
# Vérifier les updates
npm outdated

# Update des dépendances
npm update

# Update de Next.js
npm install next@latest react@latest react-dom@latest

# Tester après update
npm run build
npm run dev
```

---

## Support

- 📊 **Analytics Vercel**: Dashboard → Analytics
- 📝 **Logs**: Dashboard → Deployments → Function Logs
- 🔍 **Errors**: Dashboard → Deployments → Build Logs
- 📧 **Issues**: GitHub Issues

---

## Status

- [ ] Déploiement effectué
- [ ] Tests en production OK
- [ ] Performance validée
- [ ] SEO configuré
- [ ] Monitoring en place

**Date**: ___________  
**URL Production**: https://valoroulette-five.vercel.app  
**Status**: ⏳ En attente / ✅ Deployed
