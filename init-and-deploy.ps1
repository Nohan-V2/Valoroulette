# Script d'initialisation Git + Déploiement - Valoroulette
# Initialise Git, lie au repo GitHub et déploie

Write-Host "🔧 Initialisation Git + Déploiement Valoroulette" -ForegroundColor Cyan
Write-Host ""

# 1. Vérifier si .git existe déjà
if (Test-Path ".git") {
    Write-Host "✅ Git déjà initialisé" -ForegroundColor Green
} else {
    Write-Host "1️⃣ Initialisation de Git..." -ForegroundColor Yellow
    git init
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Erreur lors de l'initialisation Git" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Git initialisé" -ForegroundColor Green
}

# 2. Vérifier si le remote existe
Write-Host "`n2️⃣ Configuration du repository distant..." -ForegroundColor Yellow
$remotes = git remote
if ($remotes -contains "origin") {
    Write-Host "⚠️ Remote 'origin' existe déjà" -ForegroundColor Yellow
    $changeRemote = Read-Host "Voulez-vous le remplacer ? (o/n)"
    if ($changeRemote -eq "o" -or $changeRemote -eq "O") {
        git remote remove origin
        git remote add origin https://github.com/Nohan-V2/Valoroulette.git
        Write-Host "✅ Remote mis à jour" -ForegroundColor Green
    }
} else {
    git remote add origin https://github.com/Nohan-V2/Valoroulette.git
    Write-Host "✅ Remote 'origin' ajouté" -ForegroundColor Green
}

# 3. Vérifier la branche principale
Write-Host "`n3️⃣ Configuration de la branche principale..." -ForegroundColor Yellow
$currentBranch = git branch --show-current
if ([string]::IsNullOrWhiteSpace($currentBranch)) {
    # Pas de branche, créer 'main'
    git branch -M main
    Write-Host "✅ Branche 'main' créée" -ForegroundColor Green
} else {
    Write-Host "Branche actuelle : $currentBranch" -ForegroundColor Cyan
    if ($currentBranch -ne "main") {
        $renameBranch = Read-Host "Voulez-vous renommer en 'main' ? (o/n)"
        if ($renameBranch -eq "o" -or $renameBranch -eq "O") {
            git branch -M main
            Write-Host "✅ Branche renommée en 'main'" -ForegroundColor Green
        }
    }
}

# 4. Ajouter tous les fichiers
Write-Host "`n4️⃣ Ajout des fichiers..." -ForegroundColor Yellow
git add .
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du git add" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Fichiers ajoutés" -ForegroundColor Green

# 5. Vérifier le statut
Write-Host "`n5️⃣ Statut Git:" -ForegroundColor Yellow
git status --short
Write-Host ""

# 6. Demander confirmation pour le commit
$confirm = Read-Host "Voulez-vous continuer avec le commit et push ? (o/n)"
if ($confirm -ne "o" -and $confirm -ne "O" -and $confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "❌ Opération annulée" -ForegroundColor Red
    exit 0
}

# 7. Message de commit
Write-Host "`n6️⃣ Création du commit..." -ForegroundColor Yellow
$commitMessage = Read-Host "Message de commit (Entrée pour le message par défaut)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "feat: migration React/Next.js v2.0.3 - production ready"
}

git commit -m "$commitMessage"
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du commit" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Commit créé" -ForegroundColor Green

# 8. Push vers GitHub
Write-Host "`n7️⃣ Push vers GitHub..." -ForegroundColor Yellow
Write-Host "⚠️ Vous devrez peut-être vous authentifier" -ForegroundColor Yellow
Write-Host ""

$branch = git branch --show-current
git push -u origin $branch
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du push" -ForegroundColor Red
    Write-Host "`n💡 Si vous avez une erreur d'authentification:" -ForegroundColor Yellow
    Write-Host "   1. Générez un Personal Access Token sur GitHub" -ForegroundColor White
    Write-Host "      https://github.com/settings/tokens" -ForegroundColor Cyan
    Write-Host "   2. Utilisez le token comme mot de passe lors du push" -ForegroundColor White
    Write-Host ""
    Write-Host "Ou essayez manuellement avec:" -ForegroundColor Yellow
    Write-Host "  git push -u origin $branch" -ForegroundColor White
    exit 1
}
Write-Host "✅ Push réussi !" -ForegroundColor Green

# 9. Message final
Write-Host "`n🎉 Déploiement lancé !" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Prochaines étapes :" -ForegroundColor Cyan
Write-Host "  1. Aller sur Vercel : https://vercel.com/new" -ForegroundColor White
Write-Host "  2. Importer le repo GitHub : Nohan-V2/Valoroulette" -ForegroundColor White
Write-Host "  3. Framework: Next.js (auto-détecté)" -ForegroundColor White
Write-Host "  4. Cliquer 'Deploy'" -ForegroundColor White
Write-Host ""
Write-Host "  OU si déjà lié à Vercel :" -ForegroundColor Cyan
Write-Host "  • Dashboard: https://vercel.com/dashboard" -ForegroundColor White
Write-Host "  • Le déploiement démarre automatiquement" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Site en production: https://valoroulette-five.vercel.app" -ForegroundColor Cyan
Write-Host ""

# 10. Proposer d'ouvrir GitHub
$openGithub = Read-Host "Voulez-vous ouvrir le repository GitHub ? (o/n)"
if ($openGithub -eq "o" -or $openGithub -eq "O" -or $openGithub -eq "y" -or $openGithub -eq "Y") {
    Start-Process "https://github.com/Nohan-V2/Valoroulette"
}

Write-Host "`n✅ Terminé !" -ForegroundColor Green
