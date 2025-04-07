# Puissance-4


Ce projet est une implémentation du célèbre jeu **Puissance 4** en JavaScript, HTML et CSS. Il permet à deux joueurs de s'affronter en plaçant des jetons dans une grille de 6 lignes et 7 colonnes, avec pour objectif d'aligner 4 jetons de la même couleur horizontalement, verticalement ou en diagonale.

## Fonctionnalités

- Interface utilisateur interactive avec une grille dynamique.
- Deux joueurs : Joueur 1 (Rouge) et Joueur 2 (Jaune).
- Détection automatique des victoires et des matchs nuls.
- Animation des jetons lorsqu'ils tombent dans la grille.
- Mise en évidence des cellules gagnantes.
- Bouton pour réinitialiser la partie.

## Structure du projet
. ├── index.html # Fichier HTML principal ├── style.css # Styles CSS pour l'interface ├── src/ │ └── script.js # Code source JavaScript principal ├── lib/ │ └── script.js # Version transpilée du script (via Babel) ├── babel.config.json # Configuration Babel ├── package.json # Dépendances du projet └── .vscode/ └── settings.json # Configuration pour Live Server

## Prérequis

- Un navigateur moderne (Chrome, Firefox, Edge, etc.).
- [Node.js](https://nodejs.org/) (si vous souhaitez utiliser Babel pour transpiler le code).

## Installation

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone <URL_DU_DEPOT>
   cd <NOM_DU_DEPOT>

  2. Installez les dépendances si nécessaire :
     npm install

  3.   Lancez un serveur local (par exemple, avec Live Server dans Visual Studio Code).

Utilisation
1. Ouvrez le fichier index.html dans votre navigateur.
 
2. Jouez à tour de rôle en cliquant sur les colonnes pour placer vos jetons.

3.Le jeu détectera automatiquement les victoires ou les matchs nuls.

4. Cliquez sur le bouton "Nouvelle Partie" pour réinitialiser la grille.
   
Développement
Pour modifier le code source, éditez le fichier src/script.js. Si vous utilisez Babel pour transpiler le code, exécutez la commande suivante après vos modifications :
npx babel src --out-dir lib

Styles
Le fichier style.css contient les styles pour l'interface utilisateur, y compris les animations pour les jetons et les cellules gagnantes.


Ce projet est sous licence libre. Vous êtes libre de l'utiliser, de le modifier et de le partager.
Ce fichier `README.md` fournit une description claire de votre projet, ses fonctionnalités, et les étapes pour l'utiliser ou le développer.



