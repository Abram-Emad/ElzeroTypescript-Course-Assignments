"use strict";
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20));
console.log(calculate(+true, +true));
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20));
console.log(printInfo("10", "20"));
let arr = [1, 2, 3, [true, false], ["Abram", ["Emad", 50]], ["mahrous"]];
let nothing;
let theName = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
}
console.log(showMyDetails(theName.substring(0, 2), theName.substring(2, 4), theName.substring(4)));
function showMsg(user, age, country) {
    return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
function printInConsole(...arg) {
    arg.forEach((ele) => {
        console.log(`The Value Is ${ele} And Type Is ${typeof ele}`);
    });
    console.log('Done');
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
let myData;
myData = 1000;
myData = +true;
let myInfo;
myInfo = 1000;
myInfo = true;
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
function yesOrNo(val) {
    if (val > 10) {
        return "True";
    }
    else {
        return "False";
    }
}
console.log(yesOrNo(30));
console.log(yesOrNo(8));
function isHeOld(age) {
    if (age > 40) {
        return "Yes";
    }
    else {
        return "No";
    }
}
console.log(isHeOld(45));
console.log(isHeOld(30));
let post = [100, "Title", true];
const [id, title, state] = post;
console.log(id);
console.log(title);
console.log(state);
function calc(ele) {
    return ele;
}
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = calc(50) - Game.Hard] = "Insane";
})(Game || (Game = {}));
console.log(Game.Easy);
console.log(Game.Medium);
console.log(Game.Hard);
console.log(Game.Insane);
const user = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    }
};
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);
let users = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    }
};
users.id = 200;
users.id = "200";
users.state = false;
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    }
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
let creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
};
class Player {
    constructor(username, role, score, vip) {
        this.u = username;
        this.r = role;
        this.s = score;
        this.v = vip;
        this.details = function () {
            if (this.v === true) {
                return `VIP ${this.u}, Type Is ${this.r} Level Is ${this.s}`;
            }
            else {
                return `${this.u}, Type Is ${this.r} Level Is ${this.s}`;
            }
        };
    }
}
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details());
console.log(player2.details());
console.log(player3.details());
console.log(player4.details());
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}
let tester = new Shorten(100, "Elzero", "Developer");
console.log(tester.id);
console.log(tester.username);
class Show {
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    constructor(_title) {
        this._title = _title;
    }
}
let test = new Show("Elzero");
console.log(test.title);
test.title = "Osama";
console.log(test.title);
class User {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() {
        console.log("Logged In");
    }
    logOut(msg) {
        console.log(`Logged Out, ${msg}`);
    }
}
let play1 = new User(100, "Elzero", 95);
console.log(play1.id);
console.log(play1.title);
console.log(play1.level);
play1.logIn();
play1.logOut("Good Bye");
class Games {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
class RPG extends Games {
    constructor(title, price, rate) {
        super(title, price);
        this.price = price;
        this.rate = rate;
    }
    getLocation() {
        return `Location`;
    }
    getDiscount() {
        return `Discount`;
    }
}
class Action extends Games {
    constructor(title, price, rate, company) {
        super(title, price);
        this.price = price;
        this.rate = rate;
        this.company = company;
    }
    getLocation() {
        return `Location`;
    }
    getDiscount() {
        return `Discount`;
    }
}
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title);
console.log(gameOne.price);
console.log(gameOne.rate);
console.log(gameOne.getDiscount());
console.log(gameOne.getLocation());
console.log(gameTwo.title);
console.log(gameTwo.price);
console.log(gameTwo.rate);
console.log(gameTwo.company);
console.log(gameTwo.getDiscount());
console.log(gameTwo.getLocation());
function showTypes(val1, val2, val3) {
    return `${val1 !== null && val1 !== void 0 ? val1 : "Nothing"} - ${val2 !== null && val2 !== void 0 ? val2 : "Nothing"} - ${val3 !== null && val3 !== void 0 ? val3 : "Nothing"}`;
}
console.log(showTypes());
console.log(showTypes("String"));
console.log(showTypes("String", 100));
console.log(showTypes("String", 100, true));
class game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(msg) {
        console.log(`The Discount Is ${msg}`);
    }
}
let game1 = new game("Ys", 100);
let game2 = new game(2064, 100);
console.log(game1.title);
console.log(game1.price);
game1.getDiscount("50");
console.log(game2.title);
console.log(game2.price);
game2.getDiscount(80);
//# sourceMappingURL=main.js.map