@echo off
REM Script de nettoyage et rebuild - Valoroulette
REM Résout l'erreur: EINVAL: invalid argument, readlink

echo.
echo ========================================
echo   Nettoyage Valoroulette
echo ========================================
echo.

REM 1. Supprimer .next
echo 1. Suppression du dossier .next...
if exist ".next" (
    rmdir /s /q ".next"
    echo [OK] Dossier .next supprime
) else (
    echo [INFO] Dossier .next n'existe pas
)

REM 2. Build du projet
echo.
echo 2. Build du projet...
call npm run build
if errorlevel 1 (
    echo [ERREUR] Le build a echoue
    pause
    exit /b 1
)
echo [OK] Build reussi

REM 3. Message final
echo.
echo ========================================
echo   Nettoyage termine !
echo ========================================
echo.
echo Pour lancer le serveur, executez:
echo   npm run dev
echo.

pause
