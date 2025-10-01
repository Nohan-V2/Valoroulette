# 🚀 Commandes de Déploiement - Vercel

## 📋 Étapes pour Déployer

### **1. Vérifier le statut Git**
```powershell
git status
```

### **2. Ajouter tous les fichiers modifiés**
```powershell
git add .
```

### **3. Commit avec un message descriptif**
```powershell
git commit -m "feat: migration React v2.0.3 - optimizations mobile + role filters + responsive"
```

### **4. Push vers GitHub**
```powershell
git push origin main
```

**⚠️ Note** : Si la branche principale est `master` au lieu de `main`, utilise :
```powershell
git push origin master
```

---

## 🔄 Déploiement Automatique Vercel

Une fois le push effectué sur GitHub :

1. ✅ Vercel détecte automatiquement le push
2. ✅ Lance le build (`npm run build`)
3. ✅ Déploie sur `https://valoroulette-five.vercel.app`
4. ⏱️ Temps estimé : 2-3 minutes

---

## 📊 Vérifier le Déploiement

### **Dashboard Vercel**
1. Va sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique sur le projet **Valoroulette**
3. Vérifie que le déploiement est "Ready" ✅

### **En Live**
Ouvre : **https://valoroulette-five.vercel.app**

---

## 🔍 Si le Projet n'est pas Encore Lié à Vercel

### **Option 1 : Via Vercel Dashboard (Recommandé)**
1. Va sur [vercel.com/new](https://vercel.com/new)
2. Clique "Import Git Repository"
3. Sélectionne le repo **Valoroulette**
4. Framework Preset : **Next.js** (détecté automatiquement)
5. Clique "Deploy"

### **Option 2 : Via Vercel CLI**
```powershell
# Installer Vercel CLI globalement
npm install -g vercel

# Se connecter
vercel login

# Déployer (première fois)
vercel

# Suivre les instructions :
# - Setup and deploy? Yes
# - Which scope? [Ton compte]
# - Link to existing project? No
# - Project name? valoroulette
# - Directory? ./
# - Override settings? No

# Déployer en production
vercel --prod
```

---

## 📝 Commandes Git Complètes (Copy-Paste)

```powershell
# Tout en une seule fois
git add .
git commit -m "feat: migration React v2.0.3 - optimizations mobile + role filters + responsive"
git push origin main
```

---

## ✅ Checklist Post-Déploiement

### **Tests Basiques**
- [ ] Le site charge sur https://valoroulette-five.vercel.app
- [ ] Le logo s'affiche
- [ ] Les agents se chargent
- [ ] Les boutons fonctionnent
- [ ] Le responsive fonctionne (tester sur mobile)

### **Tests Fonctionnels**
- [ ] Select All fonctionne
- [ ] Deselect All fonctionne + message d'erreur
- [ ] Roll fonctionne
- [ ] Filtres de rôle fonctionnent
- [ ] Les agents se verrouillent correctement

### **Performance**
- [ ] Lighthouse audit : Performance > 85
- [ ] Images chargent rapidement
- [ ] Vidéo se charge (ou gradient sur connexion lente)
- [ ] Pas d'erreurs dans la console

---

## 🐛 Troubleshooting Déploiement

### **Erreur : "Build failed"**
```powershell
# Tester le build localement
npm run build

# Si erreurs, les corriger puis recommiter
git add .
git commit -m "fix: build errors"
git push origin main
```

### **Erreur : "Not a git repository"**
```powershell
# Initialiser git
git init
git remote add origin [URL_DU_REPO]
git branch -M main
git add .
git commit -m "feat: initial commit v2.0.3"
git push -u origin main
```

### **Le site ne se met pas à jour**
1. Vérifier que le push a bien été effectué sur GitHub
2. Aller sur Vercel Dashboard → Deployments
3. Cliquer sur "Redeploy" si nécessaire
4. Vider le cache du navigateur (Ctrl+Shift+R)

---

## 📚 Ressources

- **Dashboard Vercel** : https://vercel.com/dashboard
- **Documentation Vercel** : https://vercel.com/docs
- **Documentation Next.js** : https://nextjs.org/docs

---

## 🎯 Variables d'Environnement (si nécessaire)

Si tu as besoin d'ajouter des variables d'environnement :

1. Vercel Dashboard → Ton projet → Settings → Environment Variables
2. Ajouter les variables
3. Redéployer

**Note** : Pour le projet actuel, aucune variable d'environnement n'est nécessaire (l'API Valorant est publique).

---

**Date** : 2025-10-01  
**Version** : 2.0.3  
**URL Production** : https://valoroulette-five.vercel.app
