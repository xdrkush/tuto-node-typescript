# 08-tuple-enum

Les tuples en TypeScript sont des tableaux à longueur fixe de différents types de données. Ils vous permettent de stocker des données de différents types dans un seul objet, ce qui peut être utile dans certains cas.

Voici un exemple simple de tuple en TypeScript :

```js
const person: [string, number] = ['John', 30];
Dans cet exemple, la variable person est un tuple qui contient une chaîne de caractères et un nombre. Vous pouvez accéder aux éléments du tuple en utilisant l'index de l'élément. Par exemple :
```

```js
console.log(person[0]); // Affiche 'John'
console.log(person[1]); // Affiche 30
```

Voici quelques autres points à savoir sur les tuples en TypeScript :

Vous pouvez utiliser les tuples pour contraindre le type de données passé en paramètre dans une fonction ou de retour de fonction. Par exemple :

```js
function getFullName(person: [string, string]): string {
  return `${person[0]} ${person[1]}`;
}
```

console.log(getFullName(['John', 'Doe'])); // Affiche 'John Doe'
Vous pouvez utiliser les tuples pour définir des enums en utilisant l'opérateur as lors de la déclaration de la variable. Par exemple :

```js
enum Colors {
  Red,
  Green,
  Blue
}

const color: [Colors, string] = [Colors.Red, 'rouge'];
```

Dans cet exemple, l'enum Colors définit les valeurs possibles pour la couleur, et la variable color est un tuple qui contient une valeur de l'enum Colors et une chaîne de caractères qui correspond à la couleur en français.

Les enums en TypeScript vous permettent de définir une liste de valeurs constantes avec un nom et un type de données. Ils peuvent être utilisés pour représenter des données qui ne peuvent prendre qu'une valeur limitée de valeurs.

Voici un exemple simple d'enum en TypeScript :

```js
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
```

Dans cet exemple, l'enum Days définit une liste de jours de la semaine. Vous pouvez accéder aux valeurs de l'enum en utilisant le nom de la valeur. Par exemple :

```js
console.log(Days.Monday); // Affiche 0
console.log(Days.Tuesday); // Affiche 1
```

Voici quelques autres points à savoir sur les enums en TypeScript :

Vous pouvez donner une valeur numérique explicite à chaque valeur de l'enum. Par exemple :
```js
enum Days {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
```

Dans cet exemple, la valeur de Monday est explicitement définie à 1, et les autres valeurs sont automatiquement incrémentées. Ainsi, la valeur de Tuesday sera 2, celle de Wednesday sera 3, etc.

Vous pouvez utiliser les enums pour définir des constantes. Par exemple :

```js
const enum Colors {
  Red,
  Green,
  Blue
}

console.log(Colors.Red); // Affiche 0
```

Dans cet exemple, l'enum Colors est déclaré avec le mot-clé const, ce qui signifie que ses valeurs sont évaluées à la compilation et non pas lors de l'exécution du code. Cela peut être utile pour définir des constantes qui sont utilisées fréquemment dans votre code.

Vous pouvez accéder au nom d'une valeur d'enum en utilisant la propriété name de l'objet enum. Par exemple :

```js
console.log(Days[0]); // Affiche 'Monday'
console.log(Days[1]); // Affiche 'Tuesday'
```

Dans cet exemple, vous pouvez accéder au nom d'une valeur d'enum en passant son indice en tant qu'index de l'objet enum.

# Sources
  - https://www.geeksforgeeks.org/data-types-in-typescript/

# Docs
  - Basic: https://www.typescriptlang.org/docs/handbook/basic-types.html
  - Advanced: https://www.typescriptlang.org/docs/handbook/advanced-types.html

