---
title: Wordpress ou pas Wordpress? L'éternelle question?
description: "Wordpress est le CMS le plus utilisé du web."
excerpt: "Wordpress est utilisé pour plus de la moitié des sites web."
---

_Cet article est en cours d'écriture. Je souhaitais publier une première version pour ensuite compléter au fur et à mesure._

Depuis toujours, ou presque, une question m'est posée de façon récurrente. La forme diffère parfois mais le contenu et le sens dont les mêmes.
**Wordpress, est-ce bien?** C'est toujours d'actualité? C'est facile? Ou parfois _c'est rapide?_.

Déjà, je passe outre le côté "d'actualité" ou moderne. **Wordpress est un système de blog** qui remonte à l'époque de Dotclear, de Blogspot et de quelques autres. Peut-être même de Caramail pour ceux qui s'en souviennent. A l'échelle d'internet, c'est donc un dinosaure. En même temps, est-ce le plus important ?  
Tout dépend de l'angle adopté et si l'expérience utilisateur (UX) est privilégiée ou si c'est le DX (expérience de développement) qui prime. Pour ma part, j'ai tendance à penser que l'UX doit prendre le dessus pour les sites vitrine ou de e-commerce.

## "Logiciel libre [..] pour créer de superbes sites [..]"

Wordpress est donc un "système de blog". Sur le [site français](https://fr.wordpress.org), ils expliquent que c'est "un logiciel libre utilisé pour créer de superbes sites, blogs ou applications." Il est important de savoir qu'il existe un écosystème de plugins et de thèmes. On reviendra sur ces deux points un peu plus loin mais les plugins permettent d'ajouter des fonctionalités supplémentaires. Quant aux thèmes, il s'agit du design du site.

Le concept est forcément intéressant pour les personnes ayant un peu peur de tout ce qui se rapproche de la programmation. Parmi les sites utilisant Wordpress, on retrouve football365.fr, autojournal.fr ou encore [ecrannoir.fr](https://www.ecrannoir.fr/).

## Techniquement parlant...

Jusque l'année dernière, le code source acceptait jusque PHP 5.2, une version vieille de plus de 20 ans. [Depuis mai 2019](https://displaywp.com/wordpress-minimum-php-version/), c'est la version 5.6 qui est leur minimum syndical. Je suis bien "leur" car ce n'est pas vraiment la version à recommander de manière générale. La [5.6 n'est plus maintenue](https://www.php.net/supported-versions.php) du tout depuis janvier 2019. En outre, elle est également significativement plus lente que la version 7.0. Hormis si des plugins anciens sont utilisés, on peut (doit?) installer une version récente de PHP comme la 7.4, voire la 8.0? Je ne l'ai pas encore testé avec Wordpress.

On prend souvent Wordpress en exemple d'outil dépassé, ne respectant pas les bonnes pratiques et hors du temps. Sans arriver aux extrêmes, la prise en compte de versions de PHP dépassés n'aide pas à avoir un bon DX en profitant de tout le bon que propose les [dernières versions comme PHP 8.0](/blog/php8-arrive). Ce revers de la médaille ne doit pas occulter le fait que Wordpress est stable et continue d'évoluer. Son développement est actif et va dans le bon sens. (actualisation automatique, système d'API etc..)

Ceci dit, Wordpress a fortement évolué au point de disposer d'une API assez complète. Celle-ci transforme Wordpress en espace d'administration. La partie visible peut être ainsi développé sous une autre technologie comme un framework JavaScript. (React, VueJS, Angular...) En d'autres termes, Wordpress peut être utilisé comme _CMS headless_[^1]. Ceci dit, quand il existe des _pures players_ pour le CMS headless, c'est à réfléchir. Mais cela peut être une solution pour ne pas dérouter un client habitué à Wordpress.

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

## Quel thème utiliser pour Wordpress ?

Je vais être clair dès le départ : je n'ai pas la prétention de savoir quel est le **meilleur thème pour Wordpress**. Et puis je trouve que cela ne rime à rien. Cela revient à déclarer connaître quelle est la meilleure voiture, hors contexte, sans savoir quels sont les pré-requis.  
Par expérience, j'ai mes préférences après avoir acheté plusieurs thèmes sur themeforest, sur des sites officiels ou encore après avoir créé mes propres thèmes. Le [thème Wordpress Astra](https://wpastra.com/) me convient bien, tant en vitesse qu'en configuration.

Mon ressenti sur les thèmes acheté sur les sites généralistes, c'est qu'ils sont souvent lourds et blindés d'options. Mais du genre **vraiment blindés** d'options. La vitesse n'est pas toujours au rendez-vous et la maintenance laisse vraiment parfois à désirer. En contre exemple, les thèmes de BK Ninja me plaisent. Mais c'est à prendre avec des pincettes car tous ne se valent pas.

Souvent, on retrouve Astra dans les comparatifs des thèmes les plus performants. Comparé à Divi et parfois un autre thème (dont j'ai oublié le nom). En regardant les thèmes que des concurrents utilisent, j'ai trouvé Divi puis Astra. Et au final, Astra est devenu le thème de plusieurs de nos sites. Couplé à Gutenberg ou Elementor, il transforme Wordpress de façon parfois magistrale. Tu trouveras un exemple en consultant [Univers Moto, un site sur la moto](https://www.universmoto.com/).

## Quels plugins Wordpress sont indispensables ?

Encore une fois, les plugins sont nombreux et chacun remplit une fonction spécifique. (ou parfois 36 000 fonctions non spécifiques) Mais voici les plugins que nous utilisons[^3] de manières systèmatique.

| Plugin Wordpress | Catégorie | 
| - | - | 
| Rank Math SEO | SEO | 
| Admin Columns | Gestion de backoffice | 
| Nginx Cache | Gestion de backoffice | 
| Redirections by Rank Math | SEO |


## En conclusion

Wordpress est, comme toute solution informatique, adaptée pour certains cas de figure. Il permet d'aller vite pour arriver à un résultat satisfaisant. En choisissant correctement le thème et en limitant les plugins de qualité, les performances peuvent être correctes, notamment en configurant correctement son serveur et le cache. (nginx cache, Varnish...)

Je suis plus réservé lorsqu'il s'agit d'un projet nécessitant plugins après plugins. C'est souvent le cas avec WooCommerce. Tout s'étudie et parfois le choix est limité, surtout lorsqu'on récupère un projet existant d'un client. (surtout quand son prestataire l'a lâchement laisser tomber...)

[^1] Je n'ai jamais essayé Wordpress de cette façon, préférant un pure player [comme Strapi](https://strapi.io) voire des solutions comme [Nuxt Content](https://content.nuxtjs.org/fr/).

[^2] WYSIWYG : what you see is what you get

[^3] Par "nous", j'entends au sein de l'agence ou pour mes projets personnels (ou freelance)
