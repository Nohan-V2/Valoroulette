# Script de nettoyage et rebuild - Valoroulette
# Résout l'erreur: EINVAL: invalid argument, readlink

Write-Host "🧹 Nettoyage du projet Valoroulette..." -ForegroundColor Cyan

# 1. Supprimer .next
Write-Host "`n1️⃣ Suppression du dossier .next..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Path ".next" -Recurse -Force
    Write-Host "✅ Dossier .next supprimé" -ForegroundColor Green
} else {
    Write-Host "ℹ️ Dossier .next n'existe pas" -ForegroundColor Gray
}

# 2. Optionnel: Supprimer node_modules (décommenter si nécessaire)
# Write-Host "`n2️⃣ Suppression de node_modules..." -ForegroundColor Yellow
# if (Test-Path "node_modules") {
#     Remove-Item -Path "node_modules" -Recurse -Force
#     Write-Host "✅ Dossier node_modules supprimé" -ForegroundColor Green
# }

# 3. Optionnel: Réinstaller les dépendances
# Write-Host "`n3️⃣ Installation des dépendances..." -ForegroundColor Yellow
# npm install
# Write-Host "✅ Dépendances installées" -ForegroundColor Green

# 4. Build du projet
Write-Host "`n2️⃣ Build du projet..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build réussi" -ForegroundColor Green
} else {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}

# 5. Message final
Write-Host "`n🎉 Nettoyage terminé!" -ForegroundColor Green
Write-Host "`nPour lancer le serveur, exécutez:" -ForegroundColor Cyan
Write-Host "  npm run dev" -ForegroundColor White

# 6. Proposer de lancer le serveur
$response = Read-Host "`nVoulez-vous lancer le serveur maintenant? (o/n)"
if ($response -eq "o" -or $response -eq "O" -or $response -eq "y" -or $response -eq "Y") {
    Write-Host "`n🚀 Lancement du serveur..." -ForegroundColor Cyan
    npm run dev
}
