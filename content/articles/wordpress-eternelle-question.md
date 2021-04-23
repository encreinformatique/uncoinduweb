---
title: Wordpress ou pas Wordpress? L'éternelle question?
description: "Wordpress est le CMS le plus utilisé du web."
excerpt: "Wordpress est utilisé pour plus de la moitié des sites web."
---

_Cet article est en cours d'écriture. Je souhaitais publier une première version pour ensuite compléter au fur et à mesure._

Depuis toujours, ou presque, une question m'est posée de façon récurrente. La forme diffèreparfois mais le contenu et le sens dont les mêmes.
Wordpress, c'est bien? C'est d'actualité? C'est moderne? C'est rapide?

Déjà, je passe outre le côté "d'actualité" ou moderne. Wordpress est un système de blog qui remonte à l'époque de Dotclear, de Blogspot et de quelques autres. Peut-être même de Caramail pour ceux qui s'en souviennent. Wordpress fonctionne avec un système de plugins et de thèmes. On reviendra sur ces deux points un peu plus loin.

## Techniquement parlant...

Jusque l'année dernière, le code source acceptait jusque PHP 5.2, une version vieille de plus de 20 ans. [Depuis mai 2019](https://displaywp.com/wordpress-minimum-php-version/), c'est la version 5.6 qui est leur minimum syndical. Je suis bien "leur" car ce n'est pas vraiment la version à recommander de manière générale. La 5.6 n'est plus maintenue du tout depuis janvier 2019. En outre, elle est également significativement plus lente que la version 7.0.

Ceci dit, Wordpress a fortement évolué au point de disposer d'une API assez complète. Celle-ci transforme Wordpress en espace d'administration. La partie visible peut être ainsi développé sous une autre technologie comme un framework JavaScript. (React, VueJS, Angular...) En d'autres termes, Wordpress peut être utilisé comme _CMS headless_[^1].

## ...mais côté utilisateur, une pléthore de possibilités!

Du côté utilisateur, on va dire lambda, Wordpress ouvre **un éventail énorme de possibilités**. L'écosystème est gigantesque, avec un nombre énorme de plugins divers et variés. Cette force de Wordpress est également une faiblesse car on trouve de tout et de rien. Cela permet en quelques clics de disposer de fonctionnalités nouvelles comme le partage sur les réseaux sociaux, du e-commerce, l'édition d'articles du type WYSIWYG[^2]...

Concrêtement, tu sens bien que l'utilisateur qui découvre **l'espace d'extensions** a les yeux en soucoupe volante. On dirait un enfant devant un sapin de Noël. Par contre, si c'est ton client, tu peux vite tirer la tronche car tu sais d'avance ce qui va se passer : une catastraphone imminente. Souvent, cela signifie : 

- des incompatibilités entre plugin A et B
- un site de plus en plus lent
- des comportements bizarres voire suspects (surtout s'il s'agit de plugins de cache)
- des risques de sécurité
- et j'en passe...

## Plugins et thèmes en pagaille

Ces plugins sont des fonctions additionnelles proposées par des développeurs ou des entreprises. S'il existe un guide de bonnes pratiques, la qualité d'un plugin reste corrélée à l'entreprise ou développeur qui le maintient. Wordpress évolue et les plugins doivent évoluer avec lui sous peine de devenir obsolètes, de ne plus fonctionner correctement ou même d'être dangereux.

"Dangereux"? Oui. Tout programme informatique ou langage informatique possède des failles. Le revers de la médaille pour Wordpress, comme tout logiciel ou application, est la connaissance de failles. Cela ne veut pas dire que Wordpress est mal développé ou peu sécurisé. Wordpress est exposé et cette exposition implique que les hackers s'y intéressent et recherchent des portes dérobées.

## En conclusion

Wordpress est, comme toute solution informatique, adaptée pour certains cas de figure. Il permet d'aller vite pour arriver à un résultat satisfaisant. En choisissant correctement le thème et en limitant les plugins de qualité, les performances peuvent être correctes, notamment en configurant correctement son serveur et le cache. (nginx cache, Varnish...)

Je suis plus réservé lorsqu'il s'agit d'un projet nécessitant plugins après plugins. C'est souvent le cas avec WooCommerce. Tout s'étudie et parfois le choix est limité, surtout lorsqu'on récupère un projet existant d'un client. (surtout quand son prestataire l'a lâchement laisser tomber...)

[^1] Je n'ai jamais essayé Wordpress de cette façon, préférant un pure player [comme Strapi](https://strapi.io) voire des solutions comme [Nuxt Content](https://content.nuxtjs.org/fr/).

[^2] WYSIWYG : what you see is what you get
