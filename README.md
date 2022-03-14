[L'application testée](/#application)

[Les tests avec Jest](/#jest)

[Les tests End-to-End avec Cypress](/#cypress)


# [L'architecture du projet :](#application)
Ce projet, dit frontend, est connecté à un service API backend que vous devez aussi lancer en local.

Le projet backend se trouve ici: https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-back

## Organiser son espace de travail :
Pour une bonne organization, vous pouvez créer un dossier bill-app dans lequel vous allez cloner le projet backend et par la suite, le projet frontend:

Clonez le projet backend dans le dossier bill-app :
```
$ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Back.git
```

```
bill-app/
   - Billed-app-FR-Back
```

Clonez le projet frontend dans le dossier bill-app :
```
$ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Front.git
```

```
bill-app/
   - Billed-app-FR-Back
   - Billed-app-FR-Front
```

## Comment lancer l'application en local ?

### étape 1 - Lancer le backend :

Suivez les indications dans le README du projet backend.

### étape 2 - Lancer le frontend :

Allez au repo cloné :
```
$ cd Billed-app-FR-Front
```

Installez les packages npm (décrits dans `package.json`) :
```
$ npm install
```

Installez live-server pour lancer un serveur local :
```
$ npm install -g live-server
```

Lancez l'application :
```
$ live-server
```

Puis allez à l'adresse : `http://127.0.0.1:8080/`

&nbsp;
# [Les tests Jest](#jest)
## Comment lancer tous les tests en local avec Jest ?

```
$ npm run test
```

## Comment lancer un seul test ?

Installez jest-cli :

```
$npm i -g jest-cli
$jest src/__tests__/your_test_file.js
```

## Comment voir la couverture de test ?

`http://127.0.0.1:8080/coverage/lcov-report/`

## Comptes et utilisateurs :

Vous pouvez vous connecter en utilisant les comptes:

### administrateur :
```
utilisateur : admin@test.tld
mot de passe : admin
```
### employé :
```
utilisateur : employee@test.tld
mot de passe : employee
```

&nbsp;
# [Les tests End-to-End avec le framework Cypress](#cypress)
J'ai à titre personnel développé une suite de tests concernant la partie "employé" du projet, avec le <a href="https://www.cypress.io/" target="_blank">framework de test Cypress</a> qui est un framework all-in-one facile à utiliser, et qui dispose d'une représentation graphique de la réalisation des tests ( gros avantage pour un débutant ! ). La syntaxe de programmation, proche de celle de Jest, est fortement sémantique et très intuitive.

&nbsp;
<a href="https://docs.cypress.io/guides/getting-started/installing-cypress#Opening-Cypress" target="_blank">Le lancement du framework</a> se fait avec :
* Vous disposez de npx :
```
npx cypress open
```
* Vous ne disposez pas de npx :
```
./node_modules/.bin/cypress open
```
On peut choisir en haut à droite de la fenêtre qui s'ouvre le navigateur de test qu'on désire utiliser (firefox, chrome, ...).
Il suffit ensuite de sélectionner le seul test disponible : *End-to-End.spec.js*

&nbsp;
Ce fichier de test se trouve ici : *./cypress/integration/End-to-End.spec.js*