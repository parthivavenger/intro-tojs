console.log ("New practice file added")

function calculateBill(price, quantity =3,discount =0) {
    if (price > 0) {
        if (quantity > 0) {
            return price * quantity - discount;
        } else {
        return "Quantity should be greater than 0.";
    }
    } else {
        return "Price and quantity should be greater than 0.";
    }
}

let bill = calculateBill(10,5,5);
console.log(bill);

let bill2 = calculateBill(10,5);
console.log(bill2);

let bill3 = calculateBill(10,0,5);
console.log(bill3);

let bill4 = calculateBill(0,5,5);
console.log(bill4);

let bill5 = calculateBill(10,"",5);
console.log(bill5);

console.log(`__________________`)

function calculateBill2(price, quantity =3,discount =0) {
     if (price,quantity <+ 0,0) return "Price and quantity should be greater than 0.";
     return price * quantity -discount;
 }
 let bill6 = calculateBill(10,5,5);
console.log(bill6);
 console.log(`__________________`)


function calculateBill2(price, quantity =3,discount =0) {
    if (price <= 0) return "Price and quantity should be greater than 0.";
    if (quantity <= 0) return "Quantity should be greater than 0.";
    return price * quantity -discount;
}
let bill7 = calculateBill(10,5,5);
console.log(bill7);

function atmMoney ( bankBalence, amount) {
    if (bankBalence <= 0) return "Your bank balence should be greater than 0";
    if (amount <= 0) return "Your Amount should be greater than 0";
    if (amount > bankBalence) return "Your bank balence is  Inshuficiant";
    return bankBalence -amount;

}

let withdraw = atmMoney(100,50)
console.log(`your remainig bank baence is ${withdraw}`)
console.log(`__________________`)

const college = "SIU";
let percentage;

function student () {
    console.log (`My colege is ${college}`);
    percentage = 80; 
    console.log (`My percentage is ${percentage}`)

    if (percentage>= 75) {
        let grade ="A";
        console.log(`My grade is ${grade}`);
    
    }
    // console.log (`My grade is ${grade}`);
}

student();
console.log (`My percentage is ${percentage}`)
console.log(`__________________`)

let total =0;
function addBonus () {
    let total = 100; 
    console.log (`Inside addBonus, total is ${total}`);
}

addBonus ();
console.log (`outside addBonus, total is ${total}`);
console.log(`__________________`)

function formatPrice (amount, currencySymbol = "₹") {
    return `${currencySymbol}${amount.toFixed (2)}`;
}

function describeItem (itemName, price) {
    const priceText = formatPrice(price);
    return `${itemName}: ${priceText}`
}

console.log(describeItem("Notebook",149));
console.log(`__________________`)

let fruits=["Apple","Banana","cherry","Date"];
console.log (fruits[0]);
console.log (fruits[3]);
fruits.push("Elderberry");
console.log(fruits)
fruits.pop("Date")
console.log(fruits)
fruits[3]="Grapes"
console.log(fruits)
console.log(`__________________`)

let students=["jhon","jane","jim","jill"]
console.log(students[2]);