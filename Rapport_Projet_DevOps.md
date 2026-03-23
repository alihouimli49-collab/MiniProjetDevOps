# Rapport Mini-Projet DevOps - CI/CD et Docker
**Auteur : Ali Houimli**
**Date : 23 Mars 2026**

## 1. Introduction
Ce projet consiste en une application API Node.js conteneurisée avec Docker, avec un pipeline CI/CD automatisé via GitHub Actions.

## 2. Architecture du Projet
L'arborescence du projet est structurée comme suit :
- `app.js` : Point d'entrée de l'application API.
- `app.test.js` : Tests unitaires (Jest/Supertest).
- `Dockerfile` : Instructions de conteneurisation.
- `.github/workflows/ci.yml` : Configuration du pipeline CI/CD.

## 3. Fonctionnement du Pipeline CI/CD
Le pipeline GitHub Actions se déclenche à chaque `push` sur la branche `main`. Il se compose de deux étapes majeures :

### Étape 1 : Build & Test
- Récupération du code source.
- Installation des dépendances Node.js.
- Exécution des tests unitaires avec Jest.
- **Sécurité** : Si les tests échouent, le déploiement est stoppé.

### Étape 2 : Docker Deploy
- Connexion sécurisée à Docker Hub via GitHub Secrets.
- Construction de l'image Docker.
- Publication (Push) de l'image sur Docker Hub.

## 4. Commandes Docker utilisées
Voici les commandes principales pour gérer le conteneur localement :

**Construction de l'image :**
```bash
docker build -t alihouimli/mini-projet-devops:v1 .
```

**Exécution du conteneur :**
```bash
docker run -p 3000:3000 alihouimli/mini-projet-devops:v1
```

## 5. Liens du Projet
- **GitHub Repository** : [https://github.com/alihouimli49-collab/MiniProjetDevOps](https://github.com/alihouimli49-collab/MiniProjetDevOps)
- **Docker Hub Image** : [https://hub.docker.com/r/alihouimli/mini-projet-devops](https://hub.docker.com/r/alihouimli/mini-projet-devops)

---
*Note : Pour générer le PDF final, ouvrez ce fichier dans VS Code et utilisez l'extension "Markdown PDF" ou imprimez-le depuis votre navigateur.*
