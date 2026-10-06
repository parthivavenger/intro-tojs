console.log("Hello,World!");
console.log("Parthiv");
console.log("SIU");
console.log("JavaScript");
console.log("python");
console.log("CSS");
console.log("HTML");
console.log("Portfolio");
console.log("Sri City");
console.log("EXATRON");
console.log(2 + 2);
console.log(4 - 2);
console.log(4 * 2);
console.log(4 / 2);

const name = "parthiv";
console.log(name);

const age = "17";
console.log(age);

let place = "New York";


place = "SriCity"

place = "Nellore"
console.log(place);

// name="Rishop "
// console.log(name);

let college = "SIU"
console.log(college);
console.log(typeof college);

let mark = 55;
console.log(mark);
console.log(typeof mark);

let isLightsOn = true;
console.log(isLightsOn);
console.log(typeof isLightsOn);

let a;
console.log(a);
console.log(typeof a)

let d = null;
console.log(d);
console.log(typeof d)

console.log(`my name is ${name} and i am ${age} years old`)
console.log(`addition: ${2 * 2}, muliplication: ${4 * 3}`)

let c = 4;
let b = 2;
console.log(`addition: ${c + b}, muliplication: ${c * b}`)

console.log(`addition of ${c} and ${b} = ${c + b}`)

console.log("additon of " + c + " and  " + b + " = " + (c + b));

console.log("MY name is " + name + " and I am " + age + " years old")

let maths = 100;
let science = 92;
let english = 92;
let social = 96;
let telugu = 93;
let hindi = 72;
let totsub = 6;
let total = maths + science + english + social + telugu + hindi;
console.log(`Addition of all subjects is ${total}`)

let avg = total / totsub;
console.log(`avarage of all subjects is ${avg}`)

let product = 100
let productcount = 10
let totcost = product * productcount
console.log(`The cost of total products is ${totcost}`)

let A = 1000;
let B = 3;
let reminder = A % B
console.log(`reminder of ${A} and ${B} is ${reminder}`)

let prodcount = 2;
let prodcost = 500;
let discount = 100
let price = (prodcount * prodcost) - discount
console.log(`final price of two products is ${price}`)
console.log(`__________________`)

let numberOne = 10;
let numberTwo = 20;
console.log(`${numberOne === numberTwo}`);
console.log(`${numberOne !== numberTwo}`);
console.log(`${numberOne == "10"}`);
console.log(`${numberOne == "20"}`);
console.log(`${numberOne != "10"}`);
console.log(`${numberOne != "20"}`);
console.log(`${numberOne > numberTwo}`);
console.log(`${numberOne < numberTwo}`);
console.log(`${numberOne > "10"}`);
console.log(`${numberOne > "20"}`);
console.log(`${numberOne < "10"}`);
console.log(`${numberOne < "20"}`);
console.log(`${numberOne >= numberTwo}`);
console.log(`${numberOne <= numberTwo}`);
console.log(`${numberOne >= "10"}`);
console.log(`${numberOne >= "20"}`);
console.log(`${numberOne <= "10"}`);
console.log(`${numberOne <= "20"}`);
console.log(`${"10" >= "10"}`);
console.log(`${"10" >= "20"}`);
console.log(`${"10" <= "10"}`);
console.log(`${"10" <= "20"}`);
console.log(`${"20" >= "10"}`);
console.log(`${"20" >= "20"}`);
console.log(`${"20" <= "10"}`);
console.log(`${"20" <= "20"}`);
console.log(`${"10" > "10"}`);
console.log(`${"10" > "20"}`);
console.log(`${"10" < "10"}`);
console.log(`${"10" < "20"}`);
console.log(`${"20" > "10"}`);
console.log(`${"20" > "20"}`);
console.log(`${"20" < "10"}`);
console.log(`${"20" < "20"}`);
console.log(`__________________`)

let hasCoumputer = true;
let hasInternet = true;
let isCompletedAssignment = false;
console.log(`${hasCoumputer && hasInternet}`)
console.log(`${hasCoumputer || hasInternet}`)
console.log(`${hasCoumputer && isCompletedAssignment}`)
console.log(`${hasCoumputer || isCompletedAssignment}`)
console.log(`${hasInternet || isCompletedAssignment}`)
console.log(`${!isCompletedAssignment}`)
console.log(`__________________`)

let yourage = 17;
if (yourage >= 18) {
    console.log("You are aligible to vote.");
}
else {
    console.log("You are not aligible to vote.");
}

let yourmarks = 50;
if (yourmarks >= 40) {
    console.log("you are passed in exam.");
}

let jeeMainsScore = 93;
let passingScore = 80;
if (jeeMainsScore >= passingScore) {
    console.log("You have passed the JEE Mains exam.");
}

let isBiriyaniAvailable = false;
let iscurdriceavailable = true;
let isTOmatoRiceAvailable = true;
if (isBiriyaniAvailable) {
    console.log("Biriyani is available.");
}
else if (iscurdriceavailable) {
    console.log("Yes curd rice is available")
}
else if (isTomatoRiceAvailable) {
    console.log("Yes Tomato rice is available")
}
else {
    console.log("Biryani ia not available.");
}
console.log(`__________________`)

let givennumber = 7;
let answer = givennumber % 2
if (answer === 1) {
    console.log(`The number ${givennumber} is odd`)
}
else {
    console.log(`The given number ${givennumber} is even`)
}

let iseventernary = givennumber % 2 === 0 ? true : false;
let isEven = givennumber % 2 === 0 ? console.log(`The given number ${givennumber} is even`) : console.log(`The number ${givennumber} is odd`);
console.log(`__________________`)

for (let i=1;i<=10;i++) {
    console.log(`Iteration number: ${i}`);
}
console.log(`__________________`)

let count=0;
while (count <= 5) {
    console.log(`count is ${count}`);
    count++;
}
console.log(`__________________`)

for (let i=1; i<= 10; i++) {
    if (i===6) {
        break; 
    }
    console.log(i)
}    
console.log(`__________________`)

for (let i=0; i<= 10; i++) {
    if (i===6) {
        break;
    }
    console.log(i)
}
console.log(`__________________`)

for (let i=1; i<= 10; i++) {
    if (i % 2=== 0) {
         continue;
    }
    console.log(i)
}
console.log(`__________________`)

for (let i=1; i<= 10; i++) {
    if (i ===6) {
         continue;
    }
    console.log(i)
}
console.log(`__________________`)

function makeACoffee() {
    console.log("Turn on te Gas stove with lighter");
    console.log("Put a pan on the stove");
    console.log("Add some water to the pan");
    console.log("Add coffee powder to the boiling water");
    console.log("Add some sugar to the coffee");
    console.log("Add milk to the coffee");
    console.log("Wait for 2 or 3 minutes");
    console.log("Turn off the stove and serve the coffee in a cup");
}


makeACoffee (true,true);
console.log(`__________________`)
makeACoffee (true,true);
console.log(`__________________`)
makeACoffee (true,true);
console.log(`__________________`)
makeACoffee (true,true);
console.log(`__________________`)
makeACoffee (true,true);
console.log(`__________________`)
makeACoffee (true,true);
console.log(`__________________`)


function makeACoffee(isSugarNeeded,isMilkNeeded) {
    console.log("Turn on te Gas stove with lighter");
    console.log("Put a pan on the stove");
    console.log("Add some water to the pan");
    console.log("Add coffee powder to the boiling water");
      if (isSugarNeeded) {
    console.log("Add some sugar to the coffee");
      }
      if (isMilkNeeded) {
    console.log("Add milk to the coffee");
      }
    console.log("Wait for 2 or 3 minutes");
    console.log("Turn off the stove and serve the coffee in a cup");
}

makeACoffee (false,false);
console.log(`__________________`)

function addTwoNumbers (number1,number2) {
    let sum = number1 + number2
    return sum;
}

let result = addTwoNumbers (5,10);
console.log(`The sum of 5 and 10 is${result}`)

// Function Expression
const myName = function () {
    return "Parthiv"
}
console.log(`My name is ${myName()}`);
console.log(`__________________`)

