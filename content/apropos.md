---
title: "A propos d'un Coin du Web"
description: "Un Coin du Web est développé avec NuxtJS et hebergé sur Vercel."
---

Un des objectifs de Coin du Web est de me permettre de tester ou de valider certains choix techniques. Autrement dit, il me sert d'outil pour confirmer l'utilisation de certains modules ou plugins de NuxtJS, prendre connaissance de telle ou telle extension d'éditeur, de l'hébergeur etc...

Un Coin du Web n'est pas un site institutionnel. D'ailleurs, si vous voulez en savoir plus sur les projets ou services de l'environnement où je travaille, je vous conseille de visiter [WebsetStudio](https://www.websetstudio.com/). Ce site n'est cependant disponible qu'en espagnol.

## Les outils utilisés pour développer ce site

Ce site a été développé avec l'éditeur [Visual Studio Code](https://code.visualstudio.com/) de Microsoft. D'ordinaire, j'utilise l'excellent [PHPStorm](https://www.jetbrains.com/phpstorm) de Jetbrains. Mais je souhaitais tester activement VS Code dont les échos sont très bons.

Visual Studio Code me rappelle parfois Sublime Text pour sa vitesse. Il faut dire que les outils de Jetbrains ne sont pas particulièrement rapide, surtout au lancement.

## Côté système, VueJS et SSR à l'honneur

Pour le système, plutôt que d'utiliser un Wordpress que je connais bien, j'ai préféré utiliser NuxtJS. NuxtJS est un framework VueJS qui permet de simplifier le server-side-rendering tout en utilisant VueJS. Pour faire simple, NuxtJS mélange les avantages de fichiers statiques pré-rendus (côté serveur) au côté interactif du JavaScript. Je suis **déjà utilisateur de VueJS** ainsi que de Nuxt.

<!-- <img src="@/static/img/vue-logo.png" alt="VueJS logo"> -->

Là où cela m'interesse davantage, c'est la recherche et le test d'extensions ou plugins que je n'ai pas l'occasion d'utiliser (pour l'instant) sur d'autres projets. Je pense à [nuxt-content](https://content.nuxtjs.org/fr). Nuxt/content implique l'utilisation de PrismJS et de Markdown. Étant utilisateur de Github, je "mange" du markdown toute la journée.

## Et l'hébergement dans tout ça?

Pour l'hébergement, l'idée est encore une fois de tester. Je souhaitais donc m'amuser un peu avec un hosting prévu pour Nuxt. J'avais retenu Netlify et Vercel. Au final, je me suis décanté pour Vercel sans vraiment de raison. Mais [Guillermo Rauch de Vercel](https://twitter.com/rauchg) était venu présenter l'hébergeur lors du VueJS Amsterdam donc je l'ai retenu. De toute façon, Netlify et Vercel reçoivent de très échos.

## En résumé et conclusion

En conclusion, voici l'environnement de travail pour ce site à ce jour : (octobre 2020) 

* [Visual Studio Code](https://code.visualstudio.com/) de Microsoft
* [Vercel](https://vercel.com/) pour l'hébergement
* [Github](https://github.com/) pour le versioning
* TravisCI pour les tests[^1]
* [NuxtJS](https://nuxtjs.org/) 2
* [nuxt/content](https://content.nuxtjs.org/fr) pour la gestion du contenu en **Markdown**
* _scss_ sans UI type Tailwind, Chakra ou Vuetify

[^1]: Je n'ai pas encore mis en place le CI pour ce site
