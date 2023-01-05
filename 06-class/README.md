# Class

Les classes en TypeScript sont un moyen de définir des structures de données et de comportement qui peuvent être réutilisées dans votre code. Elles vous permettent de définir des propriétés et des méthodes qui peuvent être partagées par plusieurs instances d'une même classe, ce qui peut vous aider à éviter la duplication de code et à améliorer la lisibilité de votre code.

Voici comment déclarer une classe en TypeScript :

```js
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(`${phrase}, my name is ${this.name}`);
  }
}
```

Dans cet exemple, nous avons déclaré une classe "Person" avec deux propriétés "name" et "age" de type "string" et "number", respectivement, ainsi qu'une méthode "greet" qui prend un argument de type "string" et affiche une phrase dans la console. La classe "Person" possède également un constructeur, qui est une méthode spéciale qui est appelée lorsque vous créez une nouvelle instance de la classe "Person". Le constructeur prend en paramètre deux arguments "name" et "age" qui sont utilisés pour initialiser les propriétés "name" et "age" de l'objet.

Voici comment utiliser la classe "Person" pour créer des instances de cette classe :

```js
const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

person1.greet('Hello'); // affiche "Hello, my name is John"
person2.greet('Hi'); // affiche "Hi, my name is Jane"
```

Dans cet exemple, nous avons créé deux instances de la classe "Person" en utilisant l'opérateur "new" et en passant les arguments nécessaires au constructeur. Nous avons ensuite appelé la méthode "greet" sur chaque instance pour afficher une phrase dans la console.

Les classes sont particulièrement utiles lorsque vous avez besoin de définir des structures de données complexes ou des comportements qui seront partagés par plusieurs objets dans votre code. Elles vous permettent de définir des méthodes et des propriétés qui seront héritées par les instances de la classe, ce qui peut vous aider à éviter la duplication de code et à améliorer la lisibilité de votre code.

# Docs
  - https://www.typescriptlang.org/docs/handbook/2/classes.html#handbook-content