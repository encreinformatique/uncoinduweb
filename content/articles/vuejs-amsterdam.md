---
title: "VueJS Amsterdam"
description: "Un peu d'air avec les conférences en ligne comme VueJS Amsterdam"
excerpt: "Participer à des évènements en ligne est un bol d'air, surtout avec les restrictrions causées par le COVID-19."
---

Durant cette époque polluée par le COVID-19, participer à des évènements en ligne comme VueJS Amsterdam est un vrai bol d'air. D'un côté, c'est triste mais c'est également très positif de voir que la vie continue pendant ces temps compliqués.

De nombreux intervenants sont apparus, parfois inatendus. Lors d'une conférence de VueJS, voir un intervenant du monde React n'est pas commun. Voici ce que j'ai retenu de cette conférence de deux journées.

## Vue 3 and Vite

Un grand moment de la conférence a été la présence d'Evan You. Sa présentation était très attendue. l expliqua l'histoire de VueJS lors de la seconde journée, depuis les débuts jusqu'au prometteur Vue 3. Ce dernier fut publié 15 minutes avant l'annonce.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vp5ANvd88x0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

VueJS 3 est prometteur a bien des égards. La vitesse est à l'honneur avec l'outil de [build Vite](https://github.com/vitejs/vite). Son nom est bizarre (Vue.js 3.0 "One Piece") mais il parait que ça vient d'un animé japonais. Pour l'anecdote, VueJS utilise ce type de nommage pour ses différentes versions.

Vite pourrait en quelque sorte remplacer webpack pour le développement. Les performances montrées lors de la démo étaient très interessante car le build était presque instantané. Et Vite inclut le __hot module replacement__ à une vitesse très impressionante également.

## Nuxt content

Nuxt content est relativement puisque la [version 1](https://github.com/nuxt/content/releases/tag/v1.0.0) date de mai dernier. Je ne l'utilisais pas et la présentation faite par Debbie m'a donne envie de voir ce que ça donne. Cela fait un moment que je souhaite avancer sur les CMS headless ou gérer simplement le contenu. C'est aussi un peu à cause de lui que j'ai créé ce site.

L'utilisation est simple puisqu'il parse le contenu du dossier `content/`. Sa promesse est d'être un **Git-based Headless CMS**. Pour ce site, j'utilise des fichiers au format markdown. Je suis familier avec ce format très utilisé sur Github.

```markdown
L'utilisation est simple puisqu'il parse le contenu du dossier `content/`. Sa promesse est d'être un **Git-based Headless CMS**.
```

## Cypress, Chakra UI...

Outre le gros morceau avec la mise en ligne de VueJS 3, de nombreuses présentations étaient à suivre. Parmi celles qui m'ont plus et que je souhaite regarder de près, [Cypress](https://www.cypress.io/features/) est un outil de testing très visuel. Les tests utilisent le navigateur et sont soit disant  plus simples qu'utiliser Jasmine et le rendu serait plus fiable que le spaghetti retourné par Jest.

Quant à [Chakra UI](https://vue.chakra-ui.com/), bien implanté dans l'univers React, il m'intéresse pour son apparente simplicité. A voir ce que vaut Chakra comparé avec Tailwind ou Vuetify par exemple.
