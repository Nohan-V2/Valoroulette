# 🚀 START HERE - Valoroulette v2.0

## 📋 En 30 Secondes

```bash
npm install    # Installer les dépendances
npm run build  # Builder le projet
npm run dev    # Lancer le site (localhost:3000)
```

**⚠️ Si erreur au démarrage**: Exécutez `.\clean-and-rebuild.ps1` ou voir [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

## 📖 Documentation

**Nouveau ? Lis dans cet ordre :**

1. 👉 **Tu es ici** - START_HERE.md
2. 📖 [README.md](README.md) - Vue d'ensemble (5 min)
3. 🏃 [QUICKSTART.md](QUICKSTART.md) - Guide rapide (3 min)

**Pour déployer :**
- 🚀 [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)

**Pour contribuer :**
- 👥 [CONTRIBUTING.md](CONTRIBUTING.md)

**Toute la doc :**
- 📚 [DOCS_INDEX.md](DOCS_INDEX.md)

---

## 🎯 Qu'est-ce que c'est ?

**Valoroulette** est un outil web pour tirer au sort un agent Valorant.

### Fonctionnalités
- ✅ Sélection aléatoire d'agents
- ✅ Filtrage par rôle (Duelist, Initiator, etc.)
- ✅ Verrouillage d'agents
- ✅ Interface inspirée de Valorant
- ✅ Responsive (mobile, tablet, desktop)

---

## 🛠️ Stack Technique

- **React 18** - UI Framework
- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Vercel** - Déploiement

---

## 📂 Structure Rapide

```
valoroulette/
├── src/
│   ├── app/         # Pages Next.js
│   ├── components/  # Composants React
│   ├── hooks/       # Custom hooks
│   └── types/       # Types TypeScript
├── public/assets/   # Images & vidéos
└── old/             # Ancienne version (HTML/CSS/JS)
```

---

## ⚡ Commandes Principales

```bash
npm install          # Installer
npm run dev          # Développement (localhost:3000)
npm run build        # Build production
npm start            # Lancer le build
npm run lint         # Vérifier le code
```

---

## ✅ Checklist Rapide

Avant de commencer à coder :

- [ ] `npm install` réussi
- [ ] `npm run dev` fonctionne
- [ ] Le site s'ouvre sur http://localhost:3000
- [ ] Les agents se chargent
- [ ] La vidéo de fond joue

**Tout marche ? Tu es prêt ! 🎉**

---

## 🚀 Pour Déployer

```bash
npm run build        # Build
git add .
git commit -m "feat: my changes"
git push origin main # Vercel déploie automatiquement
```

---

## 🆘 Problèmes ?

### Le serveur ne démarre pas
```bash
npx kill-port 3000
npm run dev
```

### Erreurs de build
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Plus de help
- 📖 [QUICKSTART.md](QUICKSTART.md)
- 🔧 [COMMANDS.md](COMMANDS.md)
- ✅ [VERIFICATION.md](VERIFICATION.md)

---

## 📞 Support

- 📧 Issues: [GitHub Issues](https://github.com/Nohan-V2/Valoroulette/issues)
- 📖 Docs complètes: [DOCS_INDEX.md](DOCS_INDEX.md)

---

## 🎨 Contributeurs

- **Nohan-V2** - Créateur original
- **Cascade AI** - Migration React v2.0

---

## 📜 Licence

MIT License - Open Source

---

**Next Steps:**
1. ✅ Lire ce fichier ✓
2. 🏃 Lancer `npm install && npm run dev`
3. 🎮 Tester l'application
4. 📖 Lire [README.md](README.md) pour plus de détails

---

**Version**: 2.0.0  
**Status**: ✅ Production Ready  
**Last Update**: 2025-09-30

---

> *"No need to lock, just spin and go!"* 🎲
