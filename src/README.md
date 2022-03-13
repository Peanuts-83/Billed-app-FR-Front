
# Rappel des tâches demandées :
Ce projet comporte deux parcours:
* Employé
* Administrateur

&nbsp;
# Traiter le bug - report :

## 1. Tri des notes de frais par date
### Description
Le test Bills / les notes de frais s'affichent par ordre décroissant est passé au rouge.

### To-do
Faire passer le test au vert en réparant la fonctionnalité.

&nbsp;
## 2. Login administrateur
### Description

Dans le rapport de test "Login, si un administrateur remplit correctement les champs du Login, il devrait naviguer sur la page Dashboard", le test est passé au rouge (cf. copie d'écran).

### To-do

Faire passer le test au vert en réparant la fonctionnalité.

&nbsp;
# Traiter le bug - hunt :

## 1. Gestion du type de justificatif
### Description

Je suis connecté en tant qu'employé, je saisis une note de frais avec un justificatif qui a une extension différente de jpg, jpeg ou png, j'envoie. J'arrive sur la page Bills, je clique sur l'icône "voir" pour consulter le justificatif : la modale s'ouvre, mais il n'y a pas d'image.

Si je me connecte à présent en tant qu'Admin, et que je clique sur le ticket correspondant, le nom du fichier affiché est null. De même, lorsque je clique sur l'icône "voir" pour consulter le justificatif : la modale s'ouvre, mais il n'y a pas d'image.

### To-do

Comportements attendus :

- [ ]  la modale doit afficher l'image.
- [ ]  dans le dashboard, le formulaire correspondant au ticket doit afficher le nom du fichier.

&nbsp;
## 2. Affichage du dashboard administrateur
### Description

Je suis connecté en tant qu'administrateur RH, je déplie une liste de tickets (par exemple : statut "validé"), je sélectionne un ticket, puis je déplie une seconde liste (par exemple : statut "refusé"), je ne peux plus sélectionner un ticket de la première liste.

### To-do

Comportement attendu : pourvoir déplier plusieurs listes, et consulter les tickets de chacune des deux listes.

&nbsp;
# Ajout de tests unitaires et fonctionnels
Les fichiers à traiter en priorité sont les *UX/containers* - **Bills.js** & **NewBill.js**.

&nbsp;
Un **test coverage minimal de 80%** est requis au niveau des statements.

&nbsp;
Les **erreurs 404 et 500** doivent être testées au niveau des accès API, tant en GET qu'en POST.


&nbsp;
# Fournir un plan de test End-to-End  employé
Il doit envisager l'ensemble des cas d'usage sur ce parcours afin de pemettre un test manuel complet de l'interface coté employé.