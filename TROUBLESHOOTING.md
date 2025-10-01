# 🔧 Troubleshooting - Valoroulette

Guide de résolution des problèmes courants.

---

## 🚨 Erreur: `EINVAL: invalid argument, readlink`

### **Symptômes**
```
Error: EINVAL: invalid argument, readlink 'C:\...\Valoroulette\.next\server\app-paths-manifest.json'
```

### **Cause**
Le dossier `.next` est corrompu ou contient des fichiers en conflit.

### **Solutions**

#### **Solution Rapide (Recommandée)**

**Option A - Script automatique (PowerShell)**:
```powershell
.\clean-and-rebuild.ps1
```

**Option B - Script automatique (Batch)**:
```cmd
clean-and-rebuild.bat
```

**Option C - Manuel**:
```powershell
# 1. Supprimer le dossier .next
Remove-Item -Path ".next" -Recurse -Force

# 2. Rebuilder
npm run build

# 3. Lancer le serveur
npm run dev
```

#### **Solution Complète (Si la rapide ne marche pas)**

```powershell
# 1. Tout supprimer
Remove-Item -Path ".next","node_modules" -Recurse -Force

# 2. Réinstaller les dépendances
npm install

# 3. Rebuilder
npm run build

# 4. Lancer
npm run dev
```

---

## 🐌 Performance Lente sur Mobile

### **Symptômes**
- Lag lors du scroll
- Boutons répondent lentement
- Images chargent lentement
- Animations saccadées

### **Causes Possibles**
1. Connexion lente
2. Trop d'images chargées en même temps
3. Vidéo de fond trop lourde
4. Browser cache

### **Solutions**

#### **1. Vérifier la connexion**
- Ouvrir DevTools (F12)
- Onglet Network
- Throttling: "Fast 3G" ou "Slow 3G"
- Tester les performances

#### **2. Désactiver la vidéo temporairement**
La vidéo se désactive automatiquement sur connexions lentes (2G).
Pour forcer la désactivation, modifier `src/components/BackgroundVideo.tsx`:

```typescript
// Ligne 14-16, changer:
if (!isSlow) {
  setShouldLoadVideo(true)
}

// En:
// Ne jamais charger la vidéo
setShouldLoadVideo(false)
```

#### **3. Vider le cache**
```powershell
# Navigateur: Ctrl+Shift+Del
# OU
# Hard refresh: Ctrl+Shift+R
```

#### **4. Optimisations déjà appliquées**
Les optimisations suivantes sont déjà dans le code:
- ✅ Lazy loading des images
- ✅ Vidéo conditionnelle
- ✅ Touch feedback optimisé
- ✅ GPU acceleration
- ✅ Réduction de la qualité d'image

---

## 🖼️ Images ne Chargent Pas

### **Symptômes**
- Logo n'apparaît pas
- Icônes de rôles manquantes
- Agents ne s'affichent pas
- Icône de verrouillage absente

### **Solutions**

#### **1. Vérifier que les assets existent**
```powershell
# Vérifier les images
ls public/assets/img/

# Devrait afficher:
# - logo.png
# - duelist.png
# - initiator.png
# - controller.png
# - sentinel.png
# - lock.svg
# - favicon.png
# - preview.png

# Vérifier la vidéo
ls public/assets/video/
# - valo-bg.mp4
```

#### **2. Si les fichiers manquent**
```powershell
# Les fichiers doivent être dans public/, pas dans src/
# Vérifier qu'ils n'ont pas été déplacés dans old/
ls old/assets/
```

#### **3. Problème avec l'API Valorant**
Si les agents ne chargent pas, c'est probablement l'API:
- Ouvrir DevTools → Console
- Chercher les erreurs rouges
- Vérifier : https://valorant-api.com/v1/agents

---

## 🎮 Fonctionnalités ne Marchent Pas

### **Problème: Cliquer sur un agent ne fait rien**

**Causes**:
1. JavaScript désactivé
2. Erreur dans la console
3. État React corrompu

**Solutions**:
```powershell
# 1. Ouvrir DevTools → Console
# 2. Chercher les erreurs rouges
# 3. Si erreurs, rebuilder:
Remove-Item .next -Recurse -Force
npm run build
npm run dev
```

### **Problème: Le bouton Roll ne fonctionne pas**

**Causes**:
1. Tous les agents sont verrouillés
2. Erreur JavaScript

**Solutions**:
1. Cliquer sur "Select All"
2. Vérifier la console pour les erreurs
3. Rafraîchir la page (Ctrl+R)

### **Problème: Les filtres de rôle ne marchent pas**

**Solutions**:
1. Cliquer sur "Select All" pour réinitialiser
2. Vérifier la console
3. Rafraîchir la page

---

## 🔄 Port 3000 Déjà Utilisé

### **Symptôme**
```
Error: listen EADDRINUSE: address already in use :::3000
```

### **Solutions**

#### **Option A - Tuer le process**
```powershell
# Windows
npx kill-port 3000

# OU
netstat -ano | findstr :3000
# Noter le PID
taskkill /PID [PID] /F
```

#### **Option B - Utiliser un autre port**
```powershell
npm run dev -- -p 3001
# Site accessible sur http://localhost:3001
```

---

## 🚀 Build Échoue

### **Symptômes**
```
npm run build
# Erreurs TypeScript ou ESLint
```

### **Solutions**

#### **1. Erreurs TypeScript**
```powershell
# Vérifier les erreurs
npx tsc --noEmit

# Si trop d'erreurs, réinstaller
Remove-Item node_modules,package-lock.json -Recurse -Force
npm install
```

#### **2. Erreurs ESLint**
```powershell
# Vérifier
npm run lint

# Fix automatique
npm run lint -- --fix
```

#### **3. Problème de dépendances**
```powershell
# Réinstaller tout
Remove-Item node_modules,package-lock.json -Recurse -Force
npm install
npm run build
```

---

## 🌐 Le Site ne Fonctionne Pas sur Mobile

### **Solutions**

#### **1. Tester en local sur mobile**
```powershell
# Exposer sur le réseau
npm run dev -- -H 0.0.0.0

# Trouver votre IP
ipconfig
# Chercher "IPv4 Address"

# Sur mobile, ouvrir:
# http://[votre-ip]:3000
```

#### **2. Problèmes de cache mobile**
Sur mobile:
1. Paramètres du navigateur
2. Effacer les données du site
3. Rafraîchir

---

## 📱 Responsive ne Marche Pas

### **Symptômes**
- Layout cassé sur mobile
- Boutons trop petits
- Texte trop grand ou trop petit

### **Solutions**

#### **1. Vérifier le viewport**
Le tag viewport doit être dans `layout.tsx`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

#### **2. Tester les breakpoints**
- DevTools → Toggle device toolbar (Ctrl+Shift+M)
- Tester plusieurs tailles
- Responsive: < 640px, 768px, 1024px

#### **3. Cache CSS**
```powershell
# Hard refresh
Ctrl+Shift+R

# OU rebuilder
npm run build
```

---

## 🔍 Debugging Général

### **Checklist de Debug**

1. **Console navigateur**
   ```
   F12 → Console → Chercher erreurs rouges
   ```

2. **Network tab**
   ```
   F12 → Network → Rafraîchir
   Vérifier les requêtes en erreur (rouge)
   ```

3. **React DevTools**
   ```
   Installer React DevTools extension
   Vérifier les props des composants
   ```

4. **Logs serveur**
   ```
   Terminal où tourne npm run dev
   Chercher les erreurs
   ```

### **Commandes de Debug**

```powershell
# 1. Info système
node --version
npm --version

# 2. Info Next.js
npx next info

# 3. Dépendances
npm list --depth=0

# 4. Vérifier les ports
netstat -ano | findstr :3000

# 5. Test build
npm run build -- --debug
```

---

## 🆘 Problème Non Résolu?

### **Si rien ne marche**

#### **Reset Complet**
```powershell
# 1. Sauvegarder les modifications
git status
git diff

# 2. Tout supprimer
Remove-Item .next,node_modules,package-lock.json -Recurse -Force

# 3. Réinstaller
npm install

# 4. Rebuilder
npm run build

# 5. Tester
npm run dev
```

#### **Vérifier les Fichiers**
```powershell
# Lister tous les fichiers importants
ls src/app/
ls src/components/
ls public/assets/
```

#### **Version Propre**
```powershell
# Cloner à nouveau depuis Git
cd ..
git clone [url-du-repo] valoroulette-clean
cd valoroulette-clean
npm install
npm run build
npm run dev
```

---

## 📚 Ressources

- **Documentation**: [QUICKSTART.md](QUICKSTART.md)
- **Corrections**: [FIXES_APPLIED.md](FIXES_APPLIED.md)
- **Commandes**: [COMMANDS.md](COMMANDS.md)
- **Vérification**: [VERIFICATION.md](VERIFICATION.md)

---

## 📞 Support

Si le problème persiste:
1. Ouvrir DevTools → Console
2. Copier les erreurs exactes
3. Créer une issue sur GitHub
4. Inclure:
   - Version Node.js (`node --version`)
   - Version npm (`npm --version`)
   - OS et version
   - Message d'erreur complet
   - Steps pour reproduire

---

**Dernière mise à jour**: 2025-10-01  
**Version**: 2.0.1
