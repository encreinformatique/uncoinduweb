---
title: "Extensions PHP pour VS Code"
description: "Lisez-moi si vous souhaitez connaître les extensions indispensables pour développer PHP sur VS Code."
excerpt: "Parmi la longue liste d'extensions disponibles pour PHP, certaines sont indispensables."
publication: "2022-08-22T23:51:41.640Z"
---

Dans mon environnement de travail, PHPStorm fut pendant longtemps indispensable. Le problème dans mon cas est qu'il a une fâcheuse tendance à alourdir l'ordinateur en consommant énormément de ressources. Loin de rejeter la pierre à Jetbrains, l'éditeur de PHPStorm, c'est surtout la conception douteuse des MacBook Pro qui pose problème. Le refroidissement des machines d'Apple est déficient pour les machines Intel.

Mais tout cela est un autre débat. Visual Studio Code est un IDE de Microsoft qui se détache par deux aspects : il est gratuit et il est léger. Un autre avantage est qu'il s'adapte à de nombreux langages de programmation. PHP et JavaScript en font évidemment partie.

La légèreté et cette polyvalence viennent avec un inconvénient : il faut installer les extensions VS Code pour obtenir un IDE sur mesure alors que PHPStorm vient _out of the box_ avec de nombreuses installations pré-installées. (mais pas forcément indispensables) Voici la liste des plugins Code qui me sont indispensables.

## 1. PHP Intelephense

L'extension [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client) apporte plusieurs fonctionnalités à VS Code. Mise en avant de références, _code completion_, lecture des metadonnées de PHPStorm, il s'agit de la première extension que j'ajoute à une nouvelle installation de Code. 

## 2. PHP Namespace Resolver

Ce plugin vient compléter l'environnement en permettant de résoudre les namespaces. L'extension propose de configurer différents raccourcis ou d'actions pour la résolution des namepsaces. Simple mais indispensable.

[PHP Namespace resolver](https://marketplace.visualstudio.com/items?itemName=MehediDracula.php-namespace-resolver) permet de corriger ce qui fut longtemps désagréable (pour moi) avec VS Code : l'import des namespaces. Ajouter manuellement le namespace d'une classe n'est ni gratifiant ni intéressant. Problème résolu.

## 3. PHP Debug

A l'image de l'extension précédente, la promesse est simple et dans le titre. Le plugin permet de débugger le code PHP et c'est également important dans l'environnement.

