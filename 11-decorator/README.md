# 11-decorator

Les décorateurs en TypeScript sont des fonctions qui permettent de modifier les propriétés d'une classe, d'une méthode, d'une propriété ou d'un paramètre. Ils sont utilisés en préfixant le nom de la classe, de la méthode, de la propriété ou du paramètre à décorer avec un @ suivi du nom du décorateur.

Voici un exemple simple de décorateur en TypeScript :

```js
function logged(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`${key} method called with arguments: ${args}`);
    return originalMethod.apply(this, args);
  }
}

class Calculator {
  @logged
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);
// Affiche 'add method called with arguments: 1,2'
```

Dans cet exemple, le décorateur @logged est utilisé pour ajouter un comportement de journalisation à la méthode add de la classe Calculator. Lorsque la méthode add est appelée, le décorateur remplace la méthode originale par une nouvelle fonction qui affiche un message de journalisation avant d'appeler la méthode originale.

Décorateur de classe :
```js
function readonly(target: any) {
  Object.freeze(target);
  Object.freeze(target.prototype);
}

@readonly
class FrozenClass {
  value: any;
  constructor(value: any) {
    this.value = value;
  }
}

const frozen = new FrozenClass({ a: 1 });
frozen.value = { b: 2 }; // Génère une erreur, car FrozenClass est en lecture seule
```

Dans cet exemple, le décorateur @readonly est utilisé pour rendre la classe FrozenClass et ses instances en lecture seule.

Décorateur de propriété :
```js
function minLength(length: number) {
  return function(target: any, key: string) {
    let value = target[key];

    const getter = () => value;

    const setter = (newValue: string) => {
      if (newValue.length < length) {
        throw new Error(`La valeur de la propriété ${key} doit avoir au moins ${length} caractères.`);
      }
      value = newValue;
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}

class PropertyClass {
  @minLength(5)
  name: string;
}

const property = new PropertyClass();
property.name = 'abc'; // Génère une erreur, car la valeur de la propriété name doit avoir au moins 5 caractères
```

Dans cet exemple, le décorateur @minLength est utilisé pour ajouter une vérification de longueur minimale à la propriété name de la classe PropertyClass.

Il existe de nombreuses autres façons d'utiliser les décorateurs en TypeScript pour créer des comportements personnalisés. Je peux vous en dire plus sur ces exemples ou sur d'autres utilisations des décorateurs si vous avez des questions ou si vous souhaitez des exemples plus détaillés.

# Sources
  - https://www.geeksforgeeks.org/data-types-in-typescript/

# Docs
  - Basic: https://www.typescriptlang.org/docs/handbook/basic-types.html
  - Advanced: https://www.typescriptlang.org/docs/handbook/advanced-types.html

