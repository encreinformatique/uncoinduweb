---
title: 'Unknown column type "json_array" requested'
description: "Lisez-moi si vous souhaitez savoir comment résoudre une erreur doctrine json_array inconnu"
excerpt: "L'erreur unknown columns type "json_array" est commune et facile à résoudre, si on sait où chercher."
publication: "2022-09-20T22:46:34.640Z"
---

## Un peu de contexte

Je pose ici l'erreur et sa résolution (simple) car cela peut me servir à quelqu'un. La résolution est simple mais pour certains, cela peut apparaître peu évident. Doctrine a été clair puisque cela apparait dans [le changelog de mise à jour](https://github.com/doctrine/dbal/blob/3.4.x/UPGRADE.md).

L'erreur est apparu en migrant de Doctrine Dbal 2.13 à 3.4.4. Dans mon cas, c'était sur une installation de Symfony 5.4 mais cela n'a que peu d'incidence. La base de données est MySQL 8.0.

## L'erreur unknown column type "json_array"

`json_array` est un type de colonne de doctrine qui est déprécié depuis de nombreuses versions. Elle a été supprimé dans la version 3.0.

Lors d'une tentative de création de migration, avec [Doctrine Migrations](https://github.com/doctrine/DoctrineMigrationsBundle), j'ai donc eu l'erreur suivante.

```
Error thrown while running command "make:migration".
Message: "Unknown column type "json_array" requested. Any Doctrine type that you use has to be registered with \Doctrine\DBAL\Types\Type::addType().
You can get a list of all the known types with \Doctrine\DBAL\Types\Type::getTypesMap(). If this error occurs during database introspection then you might have forgotten to register all database types for a Doctrine Type.
Use AbstractPlatform#registerDoctrineTypeMapping() or have your custom types implement Type#getMappedDatabaseTypes(). If the type name is empty you might have a problem with the cache or forgot some mapping information.
```

Cependant, impossible de trouver une quelconque entité dans le projet. Il y a bien une entité avec `type="json"` mais pas json_array.

```php
    /**
     * @ORM\Column(type="json", nullable=true)
     */
    protected $request;
```

## La solution (très simple)

Pour ceux qui ne le savent pas forcément, json_array était un simple champs texte dans la base de données. Doctrine lui assignait un commentaire `(DC2Type:json_array)` permettant de l'identifier comme json_array.

Il suffit, dans mon cas, de transformer le commentaire du champs en `(DC2Type:json)` pour faire disparaitre l'erreur. La migration s'est alors déroulée comme prévu. 
