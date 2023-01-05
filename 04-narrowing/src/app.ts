// #1
function search(data: string | string[] | null) {
  if (typeof data === "object") {
    for (const s in data) {
      console.log("s", s);
    }
  } else if (typeof data === "string") {
    console.log("data", data);
  } else {
    console.log("nothing");
  }
}

// #2
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

// #3
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    //   (method) String.toUpperCase(): string
    y.toLowerCase();
    //   (method) String.toLowerCase(): string
  } else {
    console.log(x);
    //   (parameter) x: string | number
    console.log(y);
    //   (parameter) y: string | boolean
  }
}

// #4
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}