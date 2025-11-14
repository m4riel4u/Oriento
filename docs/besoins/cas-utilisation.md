---
title: Analyse des besoins - Cas d'utilisation
---

# Cas d'utilisation

## Vue d’ensemble

![alt text](<Capture d’écran 2025-10-03 111800.png>)
## Liste des cas d’utilisation

| ID | Nom | Acteurs principaux | Description |
|----|-----|---------------------|-------------|
| CU01 | Connexion | Utilisateur | L'utilisateur se connecte à la plateforme. |
| CU02 | Recherche de cours | Utilisateur | L'utlisateur peut effectuer une recherche de cours sur l'application. |
| CU03 | Personnalisation du profil | Utilisateur | L'utilisateur peut configurer ses préférences de cours pour obtenir des suggestions personnalisées. |
| CU04 | Comparaison de cours | Utilisateur | L'utilisateur peut comparer des cours pour estimer la charge total de travail d'une combinaison. |
| CU05 | Création d'un compte | Utilisateur | L'utilisateur peut se créer un compte s'il n'en a pas déjà un. |
| CU06 | Recommandations automatiques | Utilisateur | L'utilisateur obtient des recommandatations adaptées à son profil. |
| CU07 | Ajout des intérêts | Utilisateur | L'utilisateur peut ajouter ses intérêts académiques spécifiques à son profil. |
| CU08 | Ajout des cours réussis | Utilisateur | L'utilisateur peut ajouter ses cours réussis à son profil pour obtenir des recommandations de cours avec les préalables déjà acquis. |
| CU09 | Affichage des résultats académiques | Utilisateur | L'utilisateur peut voir les résultats des cours sélectionnés pour estimer la difficulté de ces cours. |
| CU010 | Éligibilité au cours | Utilisateur | L'utilisateur peut vérifier s'il est éligible pour un cours spécifique avec les données de son profil. |
| CU011 | Consulter les avis sur les cours | Utilisateur | L'utilisateur peut voir les avis des autres étudiants sur des cours spécifiques. |
| CU012 | Mettre à jour les avis des cours | Utilisateur | L'utilisateur peut modifier et améliorer un ancien avis publié sous un cours. |
| CU013 | Voir l'horaire des cours | Utilisateur | L'utilisateur peut consulter l'horaire des cours sélectionnés pour organiser sa session. |

## Détail

### CU01 - Connexion

**Acteurs** : 

- Utilisateur (principal)

**Préconditions** : 

- L'étudiant possède un compte activé et valide.  
- Le système d'authentification est adapté au compte de l'étudiant.

**PostConditions** :

- Le système a pu vérifier l'authentification de l'étudiant et le redirige vers le menu principal.

**Déclencheur** : 

- L'étudiant ouvre la page de connexion pour saisir son identifiant et son mot de passe.

**Dépendances** : 

- Système d'authentification (Authentificator)

**But** :

- L'étudiant se connecte à son compte avec ses données enregistrées et protégées.

### CU02 - Rechercher un cours

**Acteurs** :

- Utilisateur 

**Préconditions** :

- L'étudiant est connecté à son compte.  
- La base de données sur les structures des programmes est synchronisée avec Planifium.

**PostConditions** :

- Une liste de cours s'affiche selon les critères de recherche de l'étudiant.

**Déclencheur** :

- L'étudiant écrit des mots-clés ou un titre de cours dans la barre de recherche sur l'application.

**Dépendances** :

- API Planifium

**But** :

- L'étudiant peut découvrir une variété de cours qui correspondent à sa recherche.

### CU03 - Personnalisation du profil

**Acteurs** :

- Utilisateur

**Préconditions** :

- L'étudiant est connecté à son compte avec toutes ses informations valides.

**PostConditions** :

- Les préférences sur les choix de cours et des données personnelles sont spécifiés sur le profil de l'étudiant. 
- Les préférences présents dans le compte sont utilisés pour filtrer les suggestions des programmes de cours donnés.

**Déclencheur** :

- L'étudiant ouvre la section de 'Personnalisation du profil' dans son profil.

**Dépendances** :

- Base de données personnelles des étudiants sauvegardée.
- Moteur de suggestions qui suit les critères du profil de l'étudiant.

**But** :

- Améliorer la précision des suggestions de cours en tenant compte de son profil personnalisé de l'étudiant

### CU04 - Comparaison de cours

**Acteurs** :

- Utilisateur

**Préconditions** :

- L'étudiant sélectionne au moins deux cours à comparer la charge de travail.

**PostConditions** :

- Les données des cours choisis s'affichent avec les données comparées.

**Déclencheur** :

- L'étudiant se dirige dans l'onglet de 'Comparaison de cours' dans l'application et sélectionne les cours au choix.

**Dépendances** :

- Données des cours sont synchronisées avec le Planifium.
- Les préférences de la charge de travail dans le profil de l'étudiant.

**But** :

- Comparaison des cours pour aider l'étudiant à évaluer la charge de travail sur une combinaison de cours.

### CU05 - Création d'un compte

**Acteurs** :

- Utilisateur 

**Préconditions** :

- Vérifier que l'utilisateur n'a pas déjà un compte associé à son identifiant.

**PostConditions** :

- Le système a pu créer le compte de l'utilisateur et le redirige vers le menu principal.

**Déclencheur** :

- L'étudiant ouvre la page de création d'un compte pour créer son profil.

**Dépendances** :

- Aucune

**But** :

- L'utilisateur peut se créer un compte s'il n'en a pas déjà un.

### CU06 - Recommandations automatiques

**Acteurs** : 

- Utilisateur

**Préconditions** : 

- Le profil de l'étudiant possède ses préférences ainsi que ses historiques des cours réussis.

**PostConditions** :

- Affichage d'une liste de cours recommandés et personnalisés pour l'étudiant.

**Déclencheur** : 

- L'étudiant consulte la section de recommandations sur l'application.

**Dépendances** : 

- Personnalisation du profil de l'étudiant.
- Base de données des cours par l'API Planifium.

**But** :

- Offrir une liste de recommandations de cours adaptés à l'étudiant et à ses préférences pour faciliter ses choix de cours.

### CU07 - Ajout des intérêts

**Acteurs** : 

- Utilisateur

**Préconditions** : 

- L'étudiant est connecté à son compte.
- La fonction de personnalisation de profil est opérationnelle.

**PostConditions** :

- Les intérêts au choix de l'étudiant sont rajoutés sur le profil.
- Les intérêts sur le profil sont utilisés pour les recherches et les recommandations.

**Déclencheur** : 

- L'étudiant se dirige vers la personnalisation du profil et sélectionne l'option d'ajouter des intérêts.

**Dépendances** : 

- Base de données du profil de l'étudiant.

**But** :

- Permettre à l'étudiant de choisir ses intérêts académiques pour avoir des recommandations et des recherches personnalisées.

### CU08 - Ajout des cours réussis

**Acteurs** : 

- Utilisateur

**Préconditions** : 

- L'étudiant est connecté à son compte.
- La fonction de personnalisation de profil est opérationnelle.

**PostConditions** :

- Les cours réussis sélectionnés par l'étudiant sont rajoutés sur le profil.
- La recommandation des cours sera basée sur les prérequis des cours de l'étudiant.

**Déclencheur** : 

- L'étudiant se dirige vers la personnalisation du profil et sélectionne l'option d'ajouter des cours réussis.

**Dépendances** : 

- Base de données du profil de l'étudiant.
- API Planifium.

**But** :

- Permettre à l'étudiant de rajouter des cours réussis pour faciliter les choix de cours avec les préalables demandés.

### CU09 - Affichage des résultats académiques

**Acteurs** : 

- Utilisateur

**Préconditions** : 

- Les données académiques disponibles dans le système sous format CSV.

**PostConditions** :

- Les résultats académiques du cours sont affichés clairement.

**Déclencheur** : 

- L'étudiant a sélectionné l'affichage des détails d'un cours ou a effectué une recherche de cours.

**Dépendances** : 

- API Planifium.

**But** :

- L'étudiant peut consulter les notes des cours sélectionnés pour anticiper la difficulté et la charge de travail des cours aux choix.

### CU010 - Éligibilité au cours

**Acteurs** : 

- Utilisateur

**Préconditions** : 

- Le profil de l'étudiant possède assez d'informations par rapport à son parcours et ses cours réussis.
- Les données des cours sont disponibles via Planifium.

**PostConditions** :

- Les cours éligibles pour l'étudiant sont affichés avec des détails.

**Déclencheur** : 

- L'étudiant sélectionne un cours spécifique ou effectue une recherche.

**Dépendances** : 

- API Planifium.
- Profil de l'étudiant avec les personnalisations et intérêts mis à jour.

**But** :

- Présenter à l'étudiant les cours éligibles par rapport à son parcours pour faciliter ses choix de cours.

### CU011 - Consulter les avis sur les cours

**Acteurs** : 

- Utilisateur

**Préconditions** : 

- Les avis des cours sont disponibles sous format JSON.

**PostConditions** :

- Les avis des étudiants sur les cours sont affichés clairement.

**Déclencheur** : 

- L'étudiant sélectionne l'option des avis des étudiants d'un cours.

**Dépendances** : 

- Base de données des avis obtenue via Discord.

**But** :

- L'étudiant peut consulter les avis pertinents des cours afin d'analyser la difficulté et la charge de travail des cours.

### CU012 - Mettre à jour les avis des cours

**Acteurs** : 

- Utilisateur

**Préconditions** : 

- L'étudiant est connecté à son compte.
- La fonction de la gestion des avis est fonctionnelle.

**PostConditions** :

- L'avis de l'étudiant est modifié pour le cours.

**Déclencheur** : 

- L'étudiant clique sur l'option de modifier son avis déjà existant sous un cours.

**Dépendances** : 

- Base de données des avis.

**But** :

- Permettre à l'étudiant de modifier un avis déjà publié pour améliorer la qualité des informations disponibles pour les autres étudiants.

### CU013 - Voir l'horaire des cours

**Acteurs** : 

- Utilisateur

**Préconditions** : 

- Les données des horaires des cours sont disponibles via API Planifium.

**PostConditions** :

- L'affichage clair des horaires des cours sélectionnés par l'étudiant.

**Déclencheur** : 

- L'étudiant sélectionne l'option de voir l'horaire des cours spécifiques ou recherchés.

**Dépendances** : 

- API Planifium.

**But** :

- Permettre à l'étudiant de consulter les horaires des cours choisis pour planifier sa session avec ses autres besoins.
