# 10-type-utility

Les types d'utilité en TypeScript sont des types qui vous permettent de travailler avec les types de données de manière plus efficace. Ils sont disponibles dans le module utility types de TypeScript et sont souvent utilisés pour effectuer des opérations de manipulation de type.

Voici quelques exemples de types d'utilité en TypeScript :

Partial<T> : ce type vous permet de rendre toutes les propriétés d'un type optionnelles. Par exemple :
```js
interface IPerson {
  name: string;
  age: number;
}

type PartialPerson = Partial<IPerson>;
// PartialPerson est un type qui peut avoir les propriétés name et age, mais elles sont optionnelles
```

Readonly<T> : ce type vous permet de rendre toutes les propriétés d'un type en lecture seule. Par exemple :
```js
interface IPerson {
  name: string;
  age: number;
}

type ReadonlyPerson = Readonly<IPerson>;
// ReadonlyPerson est un type qui a les propriétés name et age, mais elles sont en lecture seule
```

Pick<T, K> : ce type vous permet de sélectionner un sous-ensemble de propriétés d'un type. Par exemple :
```js
interface IPerson {
  name: string;
  age: number;
  address: string;
}

type PersonInfo = Pick<IPerson, 'name' | 'age'>;
```

Omit<T, K> : ce type vous permet de retirer un sous-ensemble de propriétés d'un type. Par exemple :
```js
interface IPerson {
  name: string;
  age: number;
  address: string;
}

type PersonInfo = Omit<IPerson, 'address'>;
// PersonInfo est un type qui a les propriétés name et age de IPerson, mais pas address
```

Exclude<T, U> : ce type vous permet de sélectionner tous les éléments d'un type T qui ne sont pas de type U. Par exemple :
```js
type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';

type OnlyA = Exclude<A, B>;
// OnlyA est un type qui contient 'a'
```

Extract<T, U> : ce type vous permet de sélectionner tous les éléments d'un type T qui sont de type U. Par exemple :
```js
type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';

type InBoth = Extract<A, B>;
// InBoth est un type qui contient 'b' et 'c'
```

ReturnType<T> : ce type vous permet de récupérer le type de retour d'une fonction. Par exemple :
```js
function add(a: number, b: number): number {
  return a + b;
}

type AddReturnType = ReturnType<typeof add>;
// AddReturnType est un type qui contient 'number'
```

InstanceType<T> : ce type vous permet de récupérer le type d'instance d'une classe. Par exemple :
```js
class Person {
  name: string;
  age: number;
}

type PersonInstance = InstanceType<typeof Person>;
// PersonInstance est un type qui contient les propriétés name et age
```

NonNullable<T> : ce type vous permet de retirer les valeurs nullables d'un type. Par exemple :
```js
type A = string | null | undefined;

type OnlyString = NonNullable<A>;
// OnlyString est un type qui contient uniquement 'string'
```

Required<T> : ce type vous permet de rendre toutes les propriétés d'un type obligatoires. Par exemple :
```js
interface IPerson {
  name?: string;
  age?: number;
}

type RequiredPerson = Required<IPerson>;
// RequiredPerson est un type qui a les propriétés name et age, qui sont obligatoires
```

ThisType<T> : ce type vous permet de spécifier le type de this dans une fonction. Par exemple :
```js
class Person {
  name: string;
  age: number;

  greet(this: ThisType<Person>) {
    console.log(`Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`);
  }
}
```

Dans cet exemple, le type de this dans la fonction greet est spécifié comme étant de type ThisType<Person>, ce qui signifie que this sera de type Person dans la fonction.

# Sources
  - https://www.geeksforgeeks.org/data-types-in-typescript/

# Docs
  - Basic: https://www.typescriptlang.org/docs/handbook/basic-types.html
  - Advanced: https://www.typescriptlang.org/docs/handbook/advanced-types.html

