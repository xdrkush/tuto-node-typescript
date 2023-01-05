console.log("Welcome to TS !");

// Declaration optimal (verbose)
const a: string = "chain 1";
// short Déclaration (its similary TS re-type the variable by default)
const b = "chain 2";

// Number
const n: number = 2;
// Boolean
const bool: boolean = false;

// Object
const obj: object = { pseudo: "Bruno", mail: "bru@no.fr" };
const obj2: { pseudo: string; mail?: string } = { pseudo: "Bruno" };

// Array String
const arrStr: string[] = ["item1", "item2", "item3"];
// Array Number
const arrN: number[] = [1, 2, 3];

// Any (if not good practice because type any is not specified)
const oops: any = "coucou" || 3;

// Function : void (code is exec but fn return null)
const fn: () => void = () => console.log("fn");
// Function void 2 (code is exec but fn return null)
const cb: (e: Event) => void = (e: Event): number => {
    console.log('event')
    return 3
}
// Function : number (code is exec but fn return number)
const gn: () => number = () => {
    return 3
};
// Function : string (code is exec but fn return string)
const hn: () => string = () => {
    return 'OK'
};