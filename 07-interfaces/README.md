# 08-tuple-enum

Les interfaces en TypeScript sont un moyen de définir le contrat pour un objet, c'est-à-dire la liste de propriétés et de méthodes qu'un objet doit avoir. Les interfaces vous permettent de spécifier les types de données attendus pour chaque propriété et chaque méthode, ce qui peut vous aider à éviter les erreurs de compilation et à améliorer la lisibilité de votre code.

Voici comment déclarer une interface en TypeScript :

```js
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}
```

Dans cet exemple, nous avons déclaré une interface appelée "Person" qui définit les propriétés "name" et "age" de type "string" et "number", respectivement, ainsi qu'une méthode "greet" qui prend un argument de type "string" et renvoie "void".

Voici comment utiliser l'interface "Person" pour déclarer un objet :

```js
const person: Person = {
  name: 'John',
  age: 30,
  greet(phrase: string) {
    console.log(`${phrase}, my name is ${this.name}`);
  },
};

person.greet('Hello'); // affiche "Hello, my name is John"
```

Dans cet exemple, nous avons déclaré un objet "person" qui implémente l'interface "Person". Cela signifie que l'objet "person" doit avoir les propriétés et la méthode définies dans l'interface, avec les types de données spécifiés. Si vous tentez de déclarer un objet qui ne respecte pas le contrat de l'interface, TypeScript détectera une erreur de compilation.

Les interfaces sont particulièrement utiles lorsque vous travaillez avec des objets complexes ou des fonctions qui prennent des objets en argument. Elles vous permettent de définir clairement les propriétés et les méthodes attendues pour ces objets, ce qui peut vous aider à éviter les erreurs de runtime et à améliorer la lisibilité de votre code.

Voici un exemple simple d'interface en TypeScript :

```js
interface IAnimal {
  name: string;
  makeNoise(): void;
}
```

Dans cet exemple, l'interface IAnimal définit un contrat pour un type qui représente un animal. Selon ce contrat, tout type qui implémente IAnimal doit avoir une propriété name de type string et une méthode makeNoise qui ne retourne rien (void).

Voici comment vous pourriez utiliser cette interface dans votre code :

```js
class Dog implements IAnimal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeNoise() {
    console.log('Woof!');
  }
}

const myDog = new Dog('Buddy');
myDog.makeNoise(); // Affiche 'Woof!'
```

Dans cet exemple, la classe Dog implémente l'interface IAnimal, ce qui signifie qu'elle doit avoir une propriété name et une méthode makeNoise comme défini dans l'interface. Si vous essayez de déclarer une propriété ou une méthode qui n'est pas définie dans l'interface, vous obtiendrez une erreur de compilation.

Voici quelques autres points à savoir sur les interfaces en TypeScript :

Les interfaces peuvent être utilisées pour définir des contrats pour des classes, des fonctions ou des objets.
Vous pouvez étendre une interface en utilisant le mot-clé extends, ce qui vous permet de définir une nouvelle interface qui hérite de toutes les propriétés et méthodes de l'interface parente.
Vous pouvez utiliser le mot-clé implements pour indiquer qu'une classe implémente une interface.
Les interfaces peuvent contenir des propriétés et des méthodes optionnelles en utilisant l'opérateur ?. Par exemple, vous pouvez déclarer une propriété optionnelle en l'écrivant comme name?: string.
Vous pouvez utiliser les interfaces pour contraindre les types de données passés en paramètre dans une fonction ou de retour de fonction. Par exemple :

```js
function getFullName(person: { firstName: string, lastName: string }): string {
  return `${person.firstName} ${person.lastName}`;
}

const person = { firstName: 'John', lastName: 'Doe' };
console.log(getFullName(person)); // Affiche 'John Doe'
```

Dans cet exemple, la fonction getFullName attend en paramètre un objet qui doit avoir les propriétés firstName et lastName, comme défini dans l'interface. Vous pouvez également utiliser une interface au lieu de l'objet littéral pour définir le type de données attendu en paramètre.

# Sources
  - https://www.geeksforgeeks.org/data-types-in-typescript/

# Docs
  - Basic: https://www.typescriptlang.org/docs/handbook/basic-types.html
  - Advanced: https://www.typescriptlang.org/docs/handbook/advanced-types.html

