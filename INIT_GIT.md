# 🔧 Initialisation Git + Déploiement

## 🎯 Situation

Le projet local n'a pas de `.git` mais le repository GitHub existe :
**https://github.com/Nohan-V2/Valoroulette**

---

## 🚀 Solution Automatique (Recommandé)

Exécute ce script qui fait tout automatiquement :

```powershell
.\init-and-deploy.ps1
```

**Le script va :**
1. ✅ Initialiser Git localement
2. ✅ Lier au repository GitHub
3. ✅ Ajouter tous les fichiers
4. ✅ Créer le commit
5. ✅ Push vers GitHub
6. ✅ Vercel déploiera automatiquement

---

## 🔧 Solution Manuelle

Si tu préfères faire étape par étape :

### **1. Initialiser Git**
```powershell
git init
```

### **2. Lier au repository GitHub**
```powershell
git remote add origin https://github.com/Nohan-V2/Valoroulette.git
```

### **3. Vérifier le remote**
```powershell
git remote -v
```

Devrait afficher :
```
origin  https://github.com/Nohan-V2/Valoroulette.git (fetch)
origin  https://github.com/Nohan-V2/Valoroulette.git (push)
```

### **4. Créer la branche main**
```powershell
git branch -M main
```

### **5. Ajouter tous les fichiers**
```powershell
git add .
```

### **6. Vérifier ce qui sera commité**
```powershell
git status
```

### **7. Créer le premier commit**
```powershell
git commit -m "feat: migration React/Next.js v2.0.3 - production ready"
```

### **8. Push vers GitHub**
```powershell
git push -u origin main
```

**⚠️ Authentification**
Si demandé, utilise :
- **Username** : Ton nom d'utilisateur GitHub
- **Password** : Un **Personal Access Token** (pas ton mot de passe GitHub)

---

## 🔑 Créer un Personal Access Token (si nécessaire)

1. Va sur https://github.com/settings/tokens
2. Clique "Generate new token" → "Generate new token (classic)"
3. Note : "Valoroulette Deploy"
4. Expiration : 90 days (ou plus)
5. Scopes : Coche **repo** (tous les sous-items)
6. Clique "Generate token"
7. **Copie le token** (tu ne pourras plus le voir)
8. Utilise ce token comme mot de passe lors du `git push`

---

## 📊 Après le Push

### **Si le projet est déjà lié à Vercel**
- Vercel détectera le push automatiquement
- Le déploiement démarrera
- Attends 2-3 minutes
- Vérifie : https://valoroulette-five.vercel.app

### **Si le projet n'est PAS encore lié à Vercel**

1. Va sur https://vercel.com/new
2. Clique "Import Git Repository"
3. Cherche et sélectionne **Nohan-V2/Valoroulette**
4. Framework Preset : **Next.js** (auto-détecté)
5. Root Directory : `./` (par défaut)
6. Laisse les autres paramètres par défaut
7. Clique **"Deploy"**

**Configuration détectée automatiquement :**
- Build Command : `npm run build`
- Output Directory : `.next`
- Install Command : `npm install`

---

## ✅ Vérification

### **1. Repository GitHub**
```powershell
# Ouvrir dans le navigateur
Start-Process "https://github.com/Nohan-V2/Valoroulette"
```

Vérifie que tous les fichiers sont là.

### **2. Vercel Dashboard**
```powershell
# Ouvrir dans le navigateur
Start-Process "https://vercel.com/dashboard"
```

Vérifie que le déploiement est "Ready" ✅

### **3. Site en Production**
```powershell
# Ouvrir dans le navigateur
Start-Process "https://valoroulette-five.vercel.app"
```

---

## 🐛 Problèmes Courants

### **Erreur : "repository 'https://github.com/Nohan-V2/Valoroulette.git' not found"**

**Solution** : Vérifie que le repository existe et que tu as accès.
1. Ouvre https://github.com/Nohan-V2/Valoroulette dans le navigateur
2. Si ça marche, c'est un problème d'authentification → Utilise un Personal Access Token

### **Erreur : "failed to push some refs"**

**Solution** : Le repository distant a des commits que tu n'as pas localement.

```powershell
# Option 1 : Force push (ATTENTION : écrase les fichiers distants)
git push -u origin main --force

# Option 2 : Pull d'abord puis push
git pull origin main --allow-unrelated-histories
git push -u origin main
```

**⚠️ Utilise `--force` uniquement si tu es sûr de vouloir écraser le contenu distant**

### **Erreur : "Authentication failed"**

**Solution** : Utilise un Personal Access Token au lieu du mot de passe.

Ou configure Git pour utiliser le credential manager :
```powershell
git config --global credential.helper wincred
```

---

## 📝 Commandes Git Futures

Une fois initialisé, pour les futurs déploiements :

```powershell
# Ajouter les changements
git add .

# Commit
git commit -m "description des changements"

# Push (déclenche le déploiement Vercel)
git push origin main
```

---

## 🎉 C'est Tout !

Une fois le push réussi :
1. ✅ GitHub a tous les fichiers
2. ✅ Vercel déploie automatiquement
3. ✅ Le site est accessible sur https://valoroulette-five.vercel.app

---

**Scripts disponibles :**
- `init-and-deploy.ps1` - Initialisation + déploiement automatique
- `deploy.ps1` - Déploiement rapide (si Git déjà initialisé)

---

**Date** : 2025-10-01  
**Repository** : https://github.com/Nohan-V2/Valoroulette  
**Production** : https://valoroulette-five.vercel.app
