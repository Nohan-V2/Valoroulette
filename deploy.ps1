# Script de déploiement automatique - Valoroulette
# Commit et push vers GitHub pour déclencher le déploiement Vercel

Write-Host "🚀 Déploiement Valoroulette sur Vercel" -ForegroundColor Cyan
Write-Host ""

# 1. Vérifier le statut Git
Write-Host "1️⃣ Vérification du statut Git..." -ForegroundColor Yellow
git status
Write-Host ""

# 2. Demander confirmation
$confirm = Read-Host "Voulez-vous continuer le déploiement ? (o/n)"
if ($confirm -ne "o" -and $confirm -ne "O" -and $confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "❌ Déploiement annulé" -ForegroundColor Red
    exit 0
}

# 3. Ajouter tous les fichiers
Write-Host "`n2️⃣ Ajout des fichiers..." -ForegroundColor Yellow
git add .
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du git add" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Fichiers ajoutés" -ForegroundColor Green

# 4. Demander le message de commit (ou utiliser un par défaut)
Write-Host "`n3️⃣ Message de commit" -ForegroundColor Yellow
$commitMessage = Read-Host "Message de commit (Entrée pour le message par défaut)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "feat: migration React v2.0.3 - optimizations mobile + role filters + responsive"
}

# 5. Commit
Write-Host "`n4️⃣ Création du commit..." -ForegroundColor Yellow
git commit -m "$commitMessage"
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️ Aucun changement à commiter ou erreur" -ForegroundColor Yellow
    $pushAnyway = Read-Host "Voulez-vous quand même essayer de push ? (o/n)"
    if ($pushAnyway -ne "o" -and $pushAnyway -ne "O") {
        exit 0
    }
} else {
    Write-Host "✅ Commit créé" -ForegroundColor Green
}

# 6. Déterminer la branche
Write-Host "`n5️⃣ Détection de la branche..." -ForegroundColor Yellow
$branch = git branch --show-current
Write-Host "Branche actuelle : $branch" -ForegroundColor Cyan

# 7. Push vers GitHub
Write-Host "`n6️⃣ Push vers GitHub..." -ForegroundColor Yellow
git push origin $branch
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du push" -ForegroundColor Red
    Write-Host "`nEssayez manuellement avec :" -ForegroundColor Yellow
    Write-Host "  git push origin $branch" -ForegroundColor White
    exit 1
}
Write-Host "✅ Push réussi !" -ForegroundColor Green

# 8. Message final
Write-Host "`n🎉 Déploiement lancé !" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Suivi du déploiement :" -ForegroundColor Cyan
Write-Host "  • Vercel Dashboard: https://vercel.com/dashboard" -ForegroundColor White
Write-Host "  • Site en production: https://valoroulette-five.vercel.app" -ForegroundColor White
Write-Host ""
Write-Host "⏱️ Le déploiement prendra 2-3 minutes..." -ForegroundColor Yellow
Write-Host ""

# 9. Proposer d'ouvrir le site
$openSite = Read-Host "Voulez-vous ouvrir le site en production ? (o/n)"
if ($openSite -eq "o" -or $openSite -eq "O" -or $openSite -eq "y" -or $openSite -eq "Y") {
    Start-Process "https://valoroulette-five.vercel.app"
}

Write-Host "`n✅ Terminé !" -ForegroundColor Green
