// Assignment One
function calculate(numOne: number, numTwo: number) {
    return numOne + numTwo;
}
console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2

function printInfo(valueOne: number | string, valueTwo: number | string) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

let arr: (number | boolean[] | (string | (string | number)[])[])[] = [1, 2, 3, [true, false], ["Abram", ["Emad", 50]], ["mahrous"]];

/*
function reportErrors(username, age: number) { // there is error here because this the age variable isn't in use
    let rank = "Professor"; // there is error here because this variable isn't in use
    return `Username: ${username}`;
    console.log("We Will Not Reach Here");
  }

  console.log(reportErrors("Elzero", 40)); // this will not work because function will not return the age
*/

let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(theName.substring(0, 2), theName.substring(2, 4), theName.substring(4))); // Elzero


function showMsg(user?: string, age?: number | string, country?: string) {
    return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));


function printInConsole(...arg: any) {
    arg.forEach((ele: any) => {
        console.log(`The Value Is ${ele} And Type Is ${typeof ele}`)
    });
    console.log('Done')
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

// Assignment Two

// Write Your Code Here
type n = number;
// Do Not Edit Here
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here

// Write Your Code Here
type mix = number | boolean;
// Do Not Edit Here
let myInfo: mix;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here

// Write Your Code Here
type Info = {
    theName: string,
    theAge: number,
}

type Full = Info & {
    country: string
}

// Do Not Edit Here
function showInfo(data: Info) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}

console.log(showInfo({ theName: "Elzero", theAge: 40 }));

function showFullInfo(data: Full) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}

console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

function yesOrNo(val: number): string {
    if (val > 10) {
        return "True";
    }
    else {
        return "False";
    }
}

// Do Not Edit Here
// console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False

type custom = string;
function isHeOld(age: number): custom {
    if (age > 40) {
        return "Yes";
    }
    else {
        return "No";
    }
}

// Do Not Edit Here
// console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"

// let post: [number, boolean, string] = [100, 200, "Title"]; // Error
// let post: [number, boolean, string] = ["Title", 100, true]; // Error
let post: readonly [number, string, boolean] = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here
const [id, title, state] = post;

// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true

// Create Enums + Function Here
function calc(ele: number): number {
    return ele
}

enum Game {
    Easy = 100,
    Medium = Easy - 20,
    Hard = Medium - (Easy) / 2,
    Insane = calc(50) - Hard,
}
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20

const user: {
    username: string,
    age: number | string,
    website?: string,
    skills: {
        frontEnd: string[],
        backEnd: (string | number)[]
    }
} = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    }
}

// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);

// Assignment Three
// Edit The Interface To Fix The Problems
interface Member {
    id: number | string;
    username: string;
    country?: string;
    state: boolean;
    getName(): string;
}

// Do Not Edit The Code Below
let users: Member = { // Property 'country' is missing in type
    id: 100,
    username: "Elzero",
    state: true,
    getName() { // 'getName' does not exist in type 'Member'
        return this.username;
    }
}

users.id = 200;
users.id = "200"; // Type 'string' is not assignable to type 'number'
users.state = false; // Cannot assign to 'state' because it is a read-only property

// Create Interface Here
interface Client {
    id: number;
    username: string;
    active: boolean;
    discount: number;
    getPrice(price: number): number;
}
// Do Not Edit The Code Below
let client: Client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price: number) {
        return price - this.discount;
    }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// Do Not Edit The Code Below
interface Superman extends Man, Bird {
    bodyType: string;
    origin: string;
}

interface Man {
    title: string;
    weight: number;
    age: number;
}

interface Bird {
    canFly: boolean;
}

let creature: Superman = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
}

// Create Class Here
class Player {
    u: string;
    r: string;
    s: number | string;
    v?: boolean;
    details: () => string;
    constructor(username: string, role: string, score: number | string, vip?: boolean) {
        this.u = username;
        this.r = role;
        this.s = score;
        this.v = vip;
        this.details = function () {
            if (this.v === true) {
                return `VIP ${this.u}, Type Is ${this.r} Level Is ${this.s}`
            }
            else {
                return `${this.u}, Type Is ${this.r} Level Is ${this.s}`
            }
        }
    }
}
// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

class Shorten {
    constructor(
        public id: number,
        public username: string,
        protected title: string,) { }
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);

class Show {
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    constructor(private _title: string) { }
}

let test = new Show("Elzero");

console.log(test.title); // Property 'title' does not exist on type 'Show'
test.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(test.title); // Property 'title' does not exist on type 'Show'

interface Settings {
    id: number;
    title: string;
    level: number | string;
    logIn(): void;
    logOut(msg: string): void;
}

// Create Your Class Here
class User implements Settings {
    constructor(public id: number, public title: string, public level: number | string) { }
    logIn(): void {
        console.log("Logged In")
    }
    logOut(msg: string): void {
        console.log(`Logged Out, ${msg}`)
    }
}

let play1 = new User(100, "Elzero", 95);

console.log(play1.id); // 100
console.log(play1.title); // "Elzero"
console.log(play1.level); // 95
play1.logIn(); // Logged In
play1.logOut("Good Bye"); // Logged Out, Good Bye

// Assignment Four

// Do Not Edit
type numandstring = number | string;

abstract class Games {
    constructor(public title: string, public price: numandstring) { }
    abstract getLocation(): string;
    abstract getDiscount(): string;
}

// Start Edit And Fix
class RPG extends Games {
    constructor(title: string, public price: numandstring, public rate: number) {
        super(title, price)
    }
    getLocation(): string {
        return `Location`;
    }
    getDiscount(): string {
        return `Discount`
    }
}

class Action extends Games {
    constructor(title: string, public price: numandstring, public rate: number, public company: string) {
        super(title, price)
    }
    getLocation(): string {
        return `Location`;
    }
    getDiscount(): string {
        return `Discount`
    }
}
// End Edit And Fix

// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"

console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"

// Write Function Code Here
function showTypes<A, B = void, C = void>(val1?: A, val2?: B, val3?: C) {
    return `${val1 ?? "Nothing"} - ${val2 ?? "Nothing"} - ${val3 ?? "Nothing"}`
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

// Write Class Code Here
class game<T> {
    constructor(public title: T, public price: number) {}
    getDiscount(msg: T): void {
        console.log(`The Discount Is ${msg}`)
    }
}

// Do Not Edit Here
let game1 = new game<string>("Ys", 100);
let game2 = new game<number>(2064, 100); // There's A Game Called "2064"

console.log(game1.title); // "Ys"
console.log(game1.price); // 100
game1.getDiscount("50"); // "The Discount Is 50"

console.log(game2.title); // 2064
console.log(game2.price); // 100
game2.getDiscount(80); // "The Discount Is 80"