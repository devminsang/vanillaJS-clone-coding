// console.log("123124");

/*
const a = 5;
const b = 10;

const myName = "ms";

console.log(a + b);
console.log("hello " + myName);
*/

/*
const myName = "ms";

let myName = "mins";

console.log("hello " + myName);

let myName = "mmss";
*/

/*
const amIFat = false;
console.log(amIFat);

const hello = null;
*/

/*
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek[0]);

daysOfWeek.push("sun");
*/

/*
const playerName = "ms";
const playerPoints = 12313;
const playerHandsome = true;

const player = {
  name: "ms",
  points: 12313,
  handsome: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player.handsome);
player.handsome = false;
console.log(player.handsome);

player.lastName = "potato";
console.log(player);

player.points = player.points + 10;
*/

/*
function sayHello(string) {
  console.log("hello " + string);
}

sayHello("ms");
*/

/*
function plus(a, b) {
  console.log(a + b);
}

plus(10, 11);

const player = {
  name: "ms",
  sayhello: function () {
    console.log(this.name);
  },
};

player.sayhello();
*/

/*
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
};

console.log(calculator.plus(4, 2));
*/

/*

const age = 22;

function calculateAge(age) {
  return age - 1;
}

const krAge = calculateAge(age);
console.log(krAge);
*/

/*
const age = prompt("How old r u?");

console.log(parseInt(age));
*/

/*
const age = parseInt(prompt("How old r u?"));

console.log(age, typeof age);
console.log(isNaN(age));
*/

/*
const age = parseInt(prompt("How old r u?"));

if (isNaN(age)) {
  console.log("hello");
} else {
  console.log("bye");
}
*/

/*
const age = parseInt(prompt("How old r u?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You can't drink");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
} else {
  console.log("You are old");
}
*/
