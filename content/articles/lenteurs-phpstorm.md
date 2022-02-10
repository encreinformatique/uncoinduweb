---
title: "PHPStorm et Mac OS, à la limite de l'utilisable ?"
description: "Depuis près d'un an, l'utilisation de PHPStorm sur Mac OS est de plus en plus compliqué."
excerpt: "L'indexaction fréquente de PHPStorm pose d'énormes problèmes sur Mac OS."
publication: "2022-02-10"
---

Depuis plusieurs années, j'utilise PHPStorm de Jetbrains pour tous les projets PHP. Ce logiciel est un IDE très complet qui propose un environnement de travail de qualité. Auparavant sur Windows, cela fait bientôt 4 ans que je travaille avec du matériel Apple, avec plus ou moins de réussite. Pour l'environnement de travail, j'utilise Docker et donc certains pourraient commencer à penser que j'aime avoir mal, mais ce n'est pas le cas! C'est plus simple à gérer que Vagrant que j'utilisais avant.

## Des lenteurs et maintenant des freeze

L'indexation de PHPStorm sur Mac OS est un problème connu depuis longtemps. (voir [ici](https://intellij-support.jetbrains.com/hc/en-us/community/posts/360010117759-PHPStorm-2020-3-very-slow) ou [là](https://stitcher.io/blog/phpstorm-performance))
Cette indexation permet justement à l'IDE de retrouver les fichiers rapidement, de proposer l'aide sur les classes et fichiers et de proposer une auto-complétion
efficace.

Dans certains projets sur lesquels, le projet possède un système d'API en PHP et une interface en JavaScript, VueJS la plupart du temps. Et en travaillant certains fichiers VueJS, PHPStorm se congelait pendant de longues secondes, plusieurs fois par heures. Et sur une journée de travail, c'est vite agaçant.  
Ajoutez à cela l'indexation des fichiers sur un gros projet et la conception foireuse du MacBook Pro (double écran mal géré, ventilation très mauvaise) et vous obtenez un cocktail explosif : CPU à 90º, ventirard qui tourne à fond etc... Je tiens à préciser que l'ordinateur est placé sur un support dont l'air circule en dessous. Donc ne pensez pas que je travaille avec l'ordinateur sur les genoux ou sur une table en verre!

<img width="305" alt="macbookpro-temperatures" src="https://user-images.githubusercontent.com/22235605/153456504-1a7f71e5-b6a6-469e-8251-388bc73eb94d.png">

Pour résumer jusqu'ici, en utilisant **Docker**, **PHPStorm** et **MacBook Pro avec Intel**, j'obtiens un ordinateur qui chauffe rendant la touch bar inutilisable (bon, l'usage est limité) et qui s'éteind en mode sécurité si jamais j'ai eu la brillante idée de travailler sur batterie ou si je suis en déplacement.  
A qui la faute ? Ça se discute. Quelque part, cela m'est égal mais je considère que ça devrait mieux fonctionner surtout qu'une simple recherche sur [DuckDuckGo](https://duckduckgo.com/?q=phpstorm+slow+macos&t=h_&ia=web) montre que je suis loin d'être le seul à avoir ce genre de problèmes.

## Morale de l'histoire

J'ai contacté le support de Jetbrains plusieurs fois. Au départ sans trop d'espoir. Heureusement, le support Jetbrains est réactif, très réactif. Le fait de pouvoir fournir des logs depuis PHPStorm est intéressant. Ce fut possible d'avoir une discussion avec plusieurs membres du support en fonction de la période. Et ils ouvrent des tickets, aide à tester certaines préférences ou voir si c'est un vrai bug. C'était le cas lorsque l'IDE travaillait, dans certains cas, avec VueJS. Il faut noter que PHPStorm est prévu pour PHP et pour travailler (selon la bonne pratique) sur JavaScript, ça serait plutôt Webstorm mais les IDE de Jetbrains sont polyvalents.  
Le problème est en théorie déjà résolu avec la dernière version à date. (2021.3.2) Je verrai bien avec le temps en travaillant sur ce type de projets.

La morale de l'histoire : contactez le support lorsque c'est possible, aidez-le lorsque vous pouvez en fournissant les informations et manipulations proposées.
