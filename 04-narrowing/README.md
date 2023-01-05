# 04-Narrowing

Le narrowing, ou la déduction de type en français, est un concept important dans TypeScript qui permet de déduire le type d'une variable à partir de son contexte. Cela signifie que TypeScript peut deviner le type d'une variable en fonction de la façon dont elle est utilisée dans votre code.

Voici un exemple qui illustre le concept de narrowing :

```js
let x = 'hello';

if (x.length > 5) {
  x = 100;
} else {
  x = false;
}

console.log(x); // x est de type boolean
```

Dans cet exemple, la variable "x" est initialement déclarée comme étant de type "string". Cependant, grâce au narrowing, TypeScript est capable de déterminer que "x" sera de type "boolean" lorsque la ligne console.log(x) sera atteinte. Cela est possible car "x" ne peut être affecté qu'à des valeurs de type "boolean" dans l'un des deux blocs "if" et "else".

Le narrowing est particulièrement utile lorsque vous travaillez avec des types de données complexes, comme des objets ou des tableaux. Par exemple :

```js
const data = [
  { id: 1, type: 'string' },
  { id: 2, type: 'number' },
  { id: 3, type: 'boolean' },
];

for (const item of data) {
  if (item.type === 'string') {
    console.log(item.id.toUpperCase()); // erreur de compilation, id est de type number
  }
}
```

Dans cet exemple, la variable "item" est de type "any" à l'intérieur de la boucle "for-of". Cependant, grâce au narrowing, TypeScript est capable de déterminer que "item" sera de type { id: number, type: 'string' } dans le bloc "if", ce qui signifie que "item.id" est de type "number" et non de type "string". Cela permet à TypeScript de détecter une erreur de compilation lorsque la méthode "toUpperCase" est appelée sur "item.id", car cette méthode n'est pas disponible sur les nombres.

# Docs:
  - https://www.typescriptlang.org/docs/handbook/2/narrowing.html

