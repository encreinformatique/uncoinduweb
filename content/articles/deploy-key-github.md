---
title: "Ajouter une clef SSH dans Github"
description: "L'ajout d'une clef SSH pour Github est simple à réaliser."
excerpt: "L'ajout d'une clef SSH sur Github en quelques étapes."
---

*Cet article est surtout destiné aux chefs de projets ou personnes cherchant à comprendre l'intéret des clefs SSH pour git. Le but n'est donc pas d'être précis d'un point de vue technique mais surtout d'être simple à lire et comprendre.*

Pour la majorité des projets, j'utilise Github. Certains de mes clients utilisent également Github. Un point d'achoppement courant est la gestion des clefs SSH. Il faut régulièrement expliquer aux personnes peu techniques ou peu habituées à Github l'ajout des clefs SSH sur Github, à quoi ça sert et comment le faire.

Initialement, je pensais rédiger cet article pour une *deploy key*. Mais après réflexion, ce type de clef ne permet l'accès qu'**au seul repository**. C'est plus sécurisé mais c'est rapidement contraignant pour des projets de moyenne grande taille possèdant un découpage en *bundle* (modules) ou plusieurs dépendances privées. Une clef SSH ajouté à un compte donne accès aux repository auquel le compte a accès. C'est parfois trop peu sécurisé. Tout dépend de la situation.

## Pourquoi utiliser une *SSH key*?

Lorsqu'on souhaite synchroniser ou déployer le code contenu dans un repository Github, (ou de manière générale sur git) il existe deux façons courantes de le faire : https ou ssh.

La première manière (**https**) nécessite d'entrer l'utilisateur et mot de passe du compte. Autrement dit, c'est non seulement une plaie pour la personne qui doit faire le déploiement mais aussi assez peu sécurisé car cela nécessite de connaître les accès d'un compte github. Entre autres.

La seconde manière, (**SSH**) permet par définition de *faire dialoguer* deux serveurs entre eux. Le serveur est capable d'obtenir les fichiers contenu sur le repository Github, sans avoir besoin d'avoir les accès utilisateur et mot de passe du compte Github.

## Générer une *clef SSH*

L'ajout d'une clef SSH est simple à réaliser. Souvent, c'est l'administrateur système ou le développeur (pour des entreprises plus petites) ou le freelancer qui la crée. La [documentation Github](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) est explicite à ce sujet là.

1. Ouvrir le terminal (et éventuellement se connecter au serveur distant)
2. Entrer le code ci-dessous : 

```shell script
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

3. Lorsque le générateur de clef SSH demande l'emplacement du fichier, vous pouvez utilisateur l'emplacement par défaut.
(`/Users/*utilisateur*/.ssh/id_rsa` pour MacOS ou `/home/*utilisateur*/.ssh/id_rsa` pour Linux)
4. Le générateur de clef SSH demande ensuite la *passphrase*. Elle est optionnelle et conseillée. Si vous la renseignez, il faut bien la mémoriser.[^1]

Deux clef seront générées; la clef publique et la clef privée. Seule la clef publique est à renseigner sur Github. Lorsque l'emplacement est celui par défaut, on l'obtient avec : 

```shell script
cat ~/.ssh/id_rsa.pub
# Le terminal affichera à l'écran la clef qui est au format suivant
# ssh-rsa AAAAB...xyz== your_email@example.com
```

C'est ça que doit recevoir le chef de projet ou le client pour ajouter à Github. Pour lui envoyer, évitez le copier/coller dans Slack.

## Renseigner la clef SSH dans Github

Pour renseigner la clef SSH dans Github, il faut se rendre sur la page de configuration du compte, puis dans [*SSH and GPG keys*](https://github.com/settings/ssh/new). Le formulaire est simple et relativement explicite.

<app-img :filename="'img/github-ssh.png'" :alt="''"></app-img>

Un conseil est de prêter attention au titre. Un titre explicite permet d'identifier l'ordinateur ou le serveur d'où provient la clef SSH. Cela permet par la suite de détruire la clef ou, au contraire, de ne pas la détruire en la confondant avec une autre. Dans mon cas, j'utilise le nom d'hébergeur, le nom du serveur et un tag separé par un tiret. Chacun son choix et sa nomenclature.

Exemple:

> Digital Ocean - XXX-FRA1-01 - production

Une fois le formulaire validé, les repository du compte sont accessibles depuis le serveur ou ordinateur possédant la clef privée.

[^1] Le post-it collé sur l'écran **n'est pas** un emplacement sécurisé!
