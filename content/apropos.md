---
title: "A propos d'un Coin du Web"
description: "Un Coin du Web est développé avec NuxtJS et hebergé sur Vercel."
---

Un des objectifs de Coin du Web est de me permettre de tester ou de valider certains choix techniques. Autrement dit, il me sert d'outil pour confirmer l'utilisation de certains modules ou plugins de NuxtJS, prendre connaissance de telle ou telle extension d'éditeur, de l'hébergeur etc...

Un Coin du Web n'est pas un site institutionnel. D'ailleurs, si vous voulez en savoir plus sur les projets ou services de l'environnement où je travaille, je vous conseille de visiter [WebsetStudio](https://www.websetstudio.com/). Ce site n'est cependant disponible qu'en espagnol.

## Les outils utilisés pour développer ce site

Depuis mes débuts en programmation en 2001, j'ai utilisé de tout en terme d'IDE. Dreamweaver, (pas longtemps car je trouvais le code général trop lourd) Notepad++ (si si...), Sublime Text ou plus récemment un peu Vim. Au quotidien, j'utilise PHPStorm de Jetbrains. Il est complet, englobant dans un même environnement le terminal, le VCS (outils de versionning, en gros **git** ou **svn**) la possibilité d'executer les tests à la volée, etc... Mais pour ce site, je souhaitais utiliser autre chose. PHPStorm est surtout prévu pour le PHP, c'est une sorte de surcouche à Webstorm.

Ce site a donc été développé avec l'éditeur [Visual Studio Code](https://code.visualstudio.com/) de Microsoft. D'ordinaire, j'utilise l'excellent (et payant) [PHPStorm](https://www.jetbrains.com/phpstorm) de Jetbrains. Mais je souhaitais tester activement VS Code dont les échos sont très bons.

Visual Studio Code me rappelle parfois Sublime Text pour sa vitesse. Il faut dire que les outils de Jetbrains ne sont pas particulièrement rapides, surtout au lancement.

## Côté système, VueJS et SSR à l'honneur

Pour le système, plutôt que d'utiliser un Wordpress que je connais bien, j'ai préféré utiliser NuxtJS. NuxtJS est un framework VueJS qui permet de simplifier le server-side-rendering tout en utilisant VueJS. Pour faire simple, NuxtJS mélange les avantages de fichiers statiques pré-rendus (côté serveur) au côté interactif du JavaScript. Je suis **déjà utilisateur de VueJS** ainsi que de Nuxt.

<!-- <img src="@/static/img/vue-logo.png" alt="VueJS logo"> -->

Là où cela m'interesse davantage, c'est la recherche et le test d'extensions ou plugins que je n'ai pas l'occasion d'utiliser (pour l'instant) sur d'autres projets. Je pense à [nuxt-content](https://content.nuxtjs.org/fr). Nuxt/content implique l'utilisation de PrismJS et de Markdown. Étant utilisateur de Github, je "mange" du markdown toute la journée.

En octobre 2020, le site "tournait" sur NuxtJS V2. **Depuis février 2023**, ce site a été migré sur Nuxt V3, incluant VueJS 3 et `@nuxt/content` dans sa dernière version à date. (V2) Ce fut une occasion parfaite pour s'entrainer avec une double migration de framework, (Nuxt, VueJS) ce qui n'est pas toujours simple avec des projets NodeJS.

## Et l'hébergement dans tout ça?

Pour l'hébergement, l'idée est encore une fois de tester. Je souhaitais donc m'amuser un peu avec un hosting prévu pour Nuxt. J'avais retenu Netlify et Vercel. Au final, je me suis décanté pour Vercel sans vraiment de raison. Mais [Guillermo Rauch de Vercel](https://twitter.com/rauchg) était venu présenter l'hébergeur lors du VueJS Amsterdam donc je l'ai retenu. De toute façon, Netlify et Vercel reçoivent de très échos.

## En résumé et conclusion

En conclusion, voici l'environnement de travail pour ce site à ce jour : (février 2023) 

* [Visual Studio Code](https://code.visualstudio.com/) de Microsoft
* [Vercel](https://vercel.com/) pour l'hébergement et la prévisualisation
* [Github](https://github.com/) pour le versioning
* [Nuxt](https://nuxtjs.org/) V3 (après migration depuis NuxtJS V2)
* [nuxt/content](https://content.nuxtjs.org/fr) pour la gestion du contenu en **Markdown**
* [nuxt-matomo](https://github.com/pimlie/nuxt-matomo) pour l'ajout du code Matomo
* _scss_ sans UI type Tailwind, Chakra ou Vuetify
