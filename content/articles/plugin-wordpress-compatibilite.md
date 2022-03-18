---
title: "La joie des plugins Wordpress et PHP par l'exemple"
description: "Si Wordpress est pratique, c'est parfois la galère et source d'erreurs."
excerpt: "Si Wordpress est pratique, c'est parfois la galère et source de prise de tête. Un exemple."
---

Avec la chasse aux performances imposée par Google, la moindre milliseconde est importante. Sur certains environnements, c'est plus simple et parfois,
ça l'est beaucoup moins. Aujourd'hui, je prends un exemple concrêt avec un [plugin Wordpress](https://uncoinduweb.com/blog/wordpress-eternelle-question):
**Essential Addons for Elementor**. Pourquoi ai-je choisi ce plugin? Tout simplement car c'est le dernier cas à date que j'ai eu.

## Le contexte

Comme je faisais remarquer plus haut, la guerre du SEO fait que les sites doivent prêter attention à la vitesse. Dans cette optique, certaines technologies
peuvent tirer leur épingle du jeu. Mais même au sein d'une technologie, une version récente peut parfois permettre de gagner du temps de chargement. Un article 
sur [Kinsta](https://kinsta.com/fr/blog/comparaison-php/#rsultats-de-lvaluation-comparative) (il existe plusieurs bechmark du genre) permet de voir la différence.
Voici leurs résultats en requêtes par seconde. Plus c'est élevé, mieux c'est.

* Résultats du benchmark WordPress 5.9-RC2 PHP 7.2 : 106,56 req/sec
* Résultats du benchmark WordPress 5.9-RC2 PHP 7.3 : 108,45 req/sec
* Résultats du benchmark WordPress 5.9-RC2 PHP 7.4 : 110.24 req/sec
* Résultats du benchmark WordPress 5.9-RC2 PHP 8.0 : 111.10 req/sec
* Résultats du benchmark WordPress 5.9-RC2 PHP 8.1 : 163.43 req/sec 

Même si les comparatifs sont toujours un peu biaisé, cela donne un bon ordre d'idée et une validation avec Pagespeed ou GT Metrix montrent une différence assez
nette entre PHP 7.4 et PHP 8.1.

## Le problème

Fort de ce contexte, parce qu'on est mi-mars et que j'aimerais bien pouvoir migrer la quasi totalité des sites sur PHP 8.1, je suis tombé sur un os. Un site
Wordpress qui ne "passe pas" sur PHP 8.0. C'était la première étape de migration puisque PHP 8.0 apporte de [sacré changements](https://uncoinduweb.com/blog/php8-arrive). 
PHP 8.1 n'est pas disponible sur cet hébergeur mais c'est un détail. Le point important est le passage de PHP 7.4 à PHP 8.0 car cette dernière version est plus
stricte et avec un hébergeur mutualisé, les réglages ne sont pas toujours non plus les mêmes par défaut.

Le problème est qu'un des plugins, **Essential Addons for Elementor**, génère une belle erreur de PHP. Du coup, c'est le syndrome de la page blanche sur Wordpress.
En général, c'est la panique à bord mais heureusement, il existe des moyens assez simples de s'y retrouver avec Wordpress, même avec un hébergeur mutualisé.

Dans l'ordre, dans `wp-config.php`, on peut ajouter ces trois lignes pour activer le débogage dans un fichier log, situé par défaut dans `wp-content/debug.log`.

```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
```

Et là, dans le fichier, la belle erreur : 

```log
PHP Fatal error:  Uncaught TypeError: Cannot access offset of type string on string in /home/XXX/public_html/wp-content/plugins/essential-addons-for-elementor-lite/includes/Traits/Generator.php:343
```

La ligne 342 à 344 sont les suivantes :

```php
					foreach ( $this->registered_elements[ $element ][ 'dependency' ][ $type ] as $file ) {
				      ${$file[ 'type' ]}[ $file[ 'context' ] ][] = $file[ 'file' ];
					}
```

Pour ceux qui n'y pigent rien (pourquoi es-tu sur cette page du coup?) l'erreur est tout simplement de considérer que `$file` est un _array_ alors qu'il s'agit d'un _string_
comme l'indique les logs.

## Le monde idéal

Dans un monde idéal, le développeur corrige son plugin. D'ailleurs, cela me parait bizarre que personne n'ait remarqué cette erreur puisque PHP 8.0 est assez vieux.
(novembre 2020) Donc c'est sans aucun doute dû à une configuration particulière ou au contenu du site. Dans tous les tickets, je crée un ticket auprès du
développeur (apparemment une agence) qui au final répond que "nous n'avons pas pu reproduire le problème avec PHP 8.0.0" (????? ils auraient pu tester sur une 
version plus récente comme 8.0.15 par exemple) et ils ont fermé le ticket. En gros, le problème n'est pas un souci pour eux. Oooookay. Même avec les logs, ils 
refusent de chercher et de corriger l'erreur ? Du coup, ça ne va pas être simple. J'ai réouvert le ticket sur wordpress.org et un nouveau sur leur site.
On verra bien.

En attendant, cela me laisse avec une problématique : comment mettre à jour la version de PHP si le plugin **Essential Addons for Elementor** bloque et que l'éditeur
refuse de corriger ou mettra du temps?

## La solution (temporaire)

Sachant que c'est le seul problème sur ce site, et que cela m'embête vraiment, j'ai opté pour la solution (temporaire, j'espère) suivante : 

1. corriger l'erreur (qui s'applique aussi à la ligne 349)
2. bloquer les mises à jour du plugin jusqu'à correction du fichier incriminé

Est-ce une bonne pratique ? Non. Une mise à jour du plugin (sans correction de ce problème) pourrait provoquer une page blanche du site. (d'où le blocage de mise à
jour) Pire, l'éditeur pourrait ajouter d'autres erreurs du style sans s'en rendre compte puisqu'"il n'arrive pas à reproduire le problème."

Mais ce problème existe depuis novembre 2020 et nous sommes en mars 2022. Une autre solution serait tout simplement d'utiliser un autre plugin. Cela implique de
revoir une partie du contenu (que je n'édite pas donc je ne sais pas sur quelles pages il est utile) donc cela ne peut pas être la solution à court terme.
Donc j'ai pris le parti de corriger l'erreur **après avoir remonté le problème à l'éditeur**.

### 1. corriger l'erreur (qui s'applique aussi à la ligne 349)

**ligne 342 à 346**

```php
					foreach ( $this->registered_elements[ $element ][ 'dependency' ][ $type ] as $file ) {
					    if ( is_array( $file ) ) {
						      ${$file[ 'type' ]}[ $file[ 'context' ] ][] = $file[ 'file' ];
					    }
					}
  ```

Les standards de programmation de Wordpress me piquent un peu les yeux avec les espaces dans les parenthèses mais il faut s'y faire dans ce cas précis.
  
  ### 2. bloquer les mises à jour du plugin jusqu'à correction du fichier incriminé

J'ai tout simplement enlevé les droits d'écriture au dossier. Comme ça, Wordpress ne peut pas mettre à jour le dossier du plugin.
 
 ## En conclusion
 
 Faites attention aux plugins que vous utilisez. Plus vous accumulez de plugins, plus c'est probable de connaître ce genre de problème. Pire, vous vous exposez à 
 des failles de sécurité de modules qui ne sont plus maintenus.
 
 Un moindre mal, comme ici, est un blocage dans la version de PHP. Cela ne rend pas le site inopérant. Mais cela peut empécher de profiter d'avantages de versions
 récentes de PHP. Dans mon cas, c'est la vitesse que je recherchais.
