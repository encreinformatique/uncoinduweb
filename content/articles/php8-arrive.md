---
title: "PHP8 arrive cet hiver"
description: "Ce fut un long chemin depuis PHP 3 à PHP 8."
---

De PHP 3 à PHP 7.4, ce fut un long voyage. La programmation orientée objet est désormais la norme. La qualité est désormais obligatoire. Et la gestion des packages était très pratique pour améliorer la maintenance.

## De la liberté totale à la rigueur imposée

Au début des années 2000, PHP4 est venu au monde. Mais c'était assez récent et ce n'était pas toujours disponible. C'était le petit nouveau en ville pour les hébergeurs. Je me souviens avoir dû utiliser des astuces comme l'extension `.php4` pour utiliser PHP4 au lieu de PHP3. C'était vraiment facile à apprendre, faisant beaucoup d'erreurs. C'était alors une langue vraiment pardonnable. Et j'adore ça à l'époque.

Aujourd'hui, avec la nouvelle version à venir, PHP va vers la rigueur. Cela ne me dérange pas, j'en suis vraiment content. **Types stricts**, **attributs** ou le "**nullsafe operator**" vont vraiment aider à maintenir le code ou à renforce la qualité de code.

## Quelles nouveautés pour PHP 8

Il y a beaucoup à venir avec PHP 8. Tu trouveras beaucoup d'informations à ce sujet, par exemple dans cet [article de brendt en anglais](https://stitcher.io/blog/new-in-php-8).

Une des grandes nouveautés est la présence des attributs. Si tu es familier avec les annotations de doctrine, (dans Symfony par exemple) c'est le même principe.

On va passer de ça...

```php
use App\Attributes\ExampleAttribute;

/**
 * @ExampleAttribute
 */
class DummyClass
{
    /**
     * @ExampleAttribute
     */
    public function dummyMethod()
    {
        //...
     }
}
```

à ça, mais nativement dans PHP8. Le "bonus" est l'utilisation du `#` qui permet dès maintenant de préparer l'utilisation puisque cela équivaut à un commentaire dans PHP7. Par contre si tu utilises `#` pour les commentaires, prépare toi rapidement à tous les changer!

```php
use App\Attributes\ExampleAttribute;

#[ExampleAttribute]
class DummyClass
{
    #[ExampleAttribute]
    public function dummyMethod()
    {
        //...
     }
}
```

## JIT Compiler

D'autres ajouts concernent la performance. Il est tot pour savoir si le bond de performances sera aussi marqué qu'entre PHP5.6 et PHP7.0. Mais c'est dans cette optique qu'est prévu le **JIT compiler**. On a eu le préchargement avec PHP7.4 qui, à mon avis, n'est pas complétement utilisable. Il faut en effet n'avoir qu'une application sur le serveur ou VPS pour l'activer et en tirer profit.
