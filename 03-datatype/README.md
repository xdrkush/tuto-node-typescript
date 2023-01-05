# Datatypes

TypeScript est un langage de programmation conçu pour être utilisé avec JavaScript et qui ajoute des fonctionnalités de typage statique au langage. Les types en TypeScript permettent de déclarer les types de données attendus par les variables, les fonctions et les objets, ce qui peut aider à prévenir les erreurs de type et à améliorer la lisibilité du code.

Voici les différents types en TypeScript :

  - string : une chaîne de caractères, comme "hello" ou 'world'.
  - number : un nombre, comme 42 ou 3.14.
  - boolean : un booléen, vrai ou faux.
  - void : un type qui indique qu'une fonction ne renvoie rien.
  - any : un type qui peut être n'importe quel type.
  - T[] : un tableau de type T.
  - [T, U] : un tuple de types T et U.
  - { [key: string]: T } : un objet avec des propriétés de type T indexées par des chaînes de caractères.
  - type : un alias de type.
  - enum : un type énuméré.
  - null : la valeur null.
  - undefined : la valeur undefined.
  - never : un type qui indique qu'une fonction ne renvoie jamais de valeur.
  - function : un type de fonction.
  - class : un type de classe.
  - object : un type d'objet générique.
  - Record<K, T> : un type qui représente un objet avec des propriétés de type T indexées par des   - clés de type K.
  - Partial<T> : un type qui représente une version partielle de T, avec toutes les propriétés optionnelles.
  - Readonly<T> : un type qui représente une version en lecture seule de T, avec toutes les propriétés en lecture seule.
  - Pick<T, K> : un type qui représente un sous-ensemble de T avec les propriétés sélectionnées par K.
  - Omit<T, K> : un type qui représente un sous-ensemble de T sans les propriétés sélectionnées par K.
  - Exclude<T, U> : un type qui représente tous les types de T qui ne sont pas assignables à U.
  - Extract<T, U> : un type qui représente tous les types de T qui sont assignables à U.
  - NonNullable<T> : un type qui représente tous les types de T sans la valeur null ni undefined.
  - Required<T> : un type qui représente toutes les propriétés de T comme étant obligatoires.

Voici un exemple de déclaration de type en TypeScript :

Copy code:

```js
function greet(name: string) {
  return 'Hello, ' + name;
}

const message = greet('John');
```

Dans cet exemple, la fonction greet prend en paramètre un argument name de type string et renvoie une chaîne de caractères. La variable message est déclarée comme étant de type string, car c'est le type de données renvoyé par la fonction greet.

Il existe de nombreux autres types en TypeScript, notamment des types de classes, des types d'interfaces et des types de fonctions. Vous pouvez en savoir plus sur les types en TypeScript en consultant la documentation officielle.

# Sources
  - https://www.geeksforgeeks.org/data-types-in-typescript/

# Docs
  - Basic: https://www.typescriptlang.org/docs/handbook/basic-types.html
  - Advanced: https://www.typescriptlang.org/docs/handbook/advanced-types.html

