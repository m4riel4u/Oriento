---
title: Analyse des besoins - Cas d'utilisation
---

# Cas d'utilisation

## Vue d’ensemble

TODO: Introduction aux cas d’utilisation du système.

## Liste des cas d’utilisation

| ID | Nom | Acteurs principaux | Description |
|----|-----|---------------------|-------------|
| CU01 | Connexion | Utilisateur | L'utilisateur se connecte à l'application |
| CU02 | Recherche de cours | Étudiant | L'étudiant peut effectuer une recherche de cours sur l'application |
| CU03 | Personnalisation du profil | Étudiant | L'étudiant peut configurer ses préférences de cours pour obtenir des suggestions personnalisées |
| CU04 | Charge de travail des cours | Étudiant | L'étudiant peut avoir une idée sur la charge de travail sur plusieurs cours comparés |
| CU05 |  |  |  |

## Détail

### CU01 - Connexion

**Acteurs** : 

- Utilisateur (principal)

**Préconditions** : 

- L'étudiant possède un compte activé et valide  
- Le système d'authentification est adapté au compte de l'étudiant

**PostConditions** :

- Le système a pu vérifier l'authentification de l'étudiant et le redirige vers le menu principal

**Déclencheur** : 

- L'étudiant a accès à la page de connexion pour saisir son identifiant et son mot de passe

**Dépendances** : 

- Système d'authentification (Authentificator)

**But** :

- L'étudiant a accès à son compte avec ses données enregistrées et protégées

### CU02 - Rechercher un cours

**Acteurs** :

- Étudiant

**Préconditions** :

- L'étudiant et connecté à son compte  
- La base de donnée sur les structures des programmes est synchronisée avec Planifium

**PostConditions** :

- Une liste de cours s'affiche selon les critères de recherche de l'étudiant

**Déclencheur** :

- L'étudiant écrit des mots-clés ou un titre de cours dans la barre de recherche sur l'application

**Dépendances** :

- API Planifium

**But** :

- L'étudiant peut découvrir une variété de cours qui correspondent à sa recherche

### CU03 - Personnalisation du profil

**Acteurs** :

- Étudiant

**Préconditions** :

- L'étudiant est connecté à son compte avec toutes ses informations valides

**PostConditions** :

- Les préférences sur les choix de cours et des données personnelles sont spécifiés sur le profil de l'étudiant  
- Les préférences présents dans le compte sont utilisés pour filtrer les suggestions des programmes de cours donnés

**Déclencheur** :

- L'étudiant a accès à la section de 'Personnalisation du profil' dans son profil

**Dépendances** :

- Base de données personnelles des étudiants sauvegardée  
- Moteur de suggestions qui suit les critères du profil de l'étudiant

**But** :

- Améliorer la précision des suggestions de cours en tenant compte de son profil personnalisé de l'étudiant

### CU04 - Charge de travail des cours

**Acteurs** :

- Étudiant

**Préconditions** :

- L'étudiant sélectionne au moins deux cours à comparer la charge de travaille

**PostConditions** :

- Les données des cours choisis s'affichent avec les données comparées

**Déclencheur** :

- L'étudiant se dirige dans l'onglet de 'Comparaison de cours' dans l'application et sélectionne les cours au choix

**Dépendances** :

- Données des cours sont synchronisées avec le Planifium  
- Les préférences de la charge de travail dans le profil de l'étudiant

**But** :

- Comparaison des cours pour aider l'étudiant à évaluer la charge de travail sur une combinaison de cours

### CU05 - 

**Acteurs** :

- 

**Préconditions** :

- 

**PostConditions** :

- 

**Déclencheur** :

- 

**Dépendances** :

- 

**But** :

- 

???? maybe d'autres CU : Créer un compte, Transmettre des avis, Modérer les avis (avec discord?), Vérifier les règles d'admissibilité aux cours, Obtenir les détails d'un cours avec les reviews (5+ reviews)