# Alias generic

Les alias générique sont une fonctionnalité de TypeScript qui vous permet de créer un alias pour un type générique. Un type générique est un type qui peut prendre différents types de données en paramètre, comme une liste ou un objet. Les alias générique vous permettent de donner un nom à ce type de données générique, ce qui peut rendre votre code plus lisible et plus facile à maintenir.

Voici comment déclarer un alias générique en TypeScript :

```js
type List<T> = T[];
```

Dans cet exemple, nous avons déclaré un alias générique appelé "List" qui prend un type de données "T" en paramètre. L'alias "List" est en fait équivalent à un tableau de type "T", ce qui signifie que nous pouvons utiliser "List" comme un type de données pour déclarer des variables ou des fonctions qui prennent ou renvoient des tableaux de données de type "T".

Voici un exemple d'utilisation de l'alias générique "List" :

```js
const numbers: List<number> = [1, 2, 3, 4, 5];

function sum(list: List<number>) {
  let result = 0;
  for (const item of list) {
    result += item;
  }
  return result;
}

console.log(sum(numbers)); // 15
```

Dans cet exemple, nous avons déclaré une variable "numbers" de type "List<number>", ce qui signifie qu'elle peut contenir un tableau de nombres. Nous avons également déclaré une fonction "sum" qui prend en paramètre une variable de type "List<number>", ce qui signifie qu'elle peut être appelée avec un tableau de nombres en argument.

Les alias générique sont particulièrement utiles lorsque vous travaillez avec des types de données complexes qui utilisent de nombreux types de données génériques. Par exemple, vous pouvez déclarer un alias générique pour un objet qui prend deux types de données génériques en paramètre :

```js
type Pair<T, U> = {
  first: T;
  second: U;
};

const pair: Pair<string, number> = {
  first: 'hello',
  second: 42,
};
```

Je espère que cet exemple vous aidera à comprendre le concept d'alias générique en TypeScript.

# Docs
  - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases