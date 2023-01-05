// #1
type s = string;
type n = number;

const username: s = "Bruno"
const number: n = 1

// #2
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// #4
type User = {
  id: number;
  pseudo: string;
  mail?: string;
};

const user1: User = { id: 1, pseudo: "Bruno" };
const user2: User = { id: 2, pseudo: "Alain", mail: "Ala@din.fr" };

function getID<TypeParams>(value: TypeParams): TypeParams {
  return value;
}

const fn = getID<number>(3);
console.log("fn", fn);

function getLast<T>(value: T[]): T {
  return value[value.length - 1];
}

const u = getLast([1, 2, 3, 4, 5]);
console.log("u", u);
