let latte = {
    foam: "low foam",
    iced: false,
    milk: "lactose free",
    shots: 4,
    size: "quadrple venti",
    sugar: "yes",
    syrup: "pumpkin spice",
    fullOrder: () => {
        return `${latte.foam} ${latte.milk}`;
    }
};

const thingIWantToFind = "shots"
console.log(latte.foam);
console.log(latte[thingIWantToFind]);

console.log(latte["size"]);
console.log(latte.fullOrder());

function froth(latteOrder) {
    latteOrder.isFrothed = true
}

froth(latte);
console.log(latte);




let frappachino = {};
frappachino.whippedCream = "oodels of whipped cream!!"
console.log(frappachino.whippedCream);

// delete frappachino.whippedCream;
frappachino.whippedCream = "a pup cup of whipped cream~" //-- changing the value
console.log(frappachino.whippedCream);



// let myName = 'Melanie';
// let myAge = 38;
// console.log(`My name is ${myName} and I am ${myAge} years old.`)

// let a = "2";
// let b = "4";
// let c = parseFloat(a) + parseFloat(b);
// console.log(`I am`,typeof c)
// console.log(typeof c.toString());



// *****************************************

// NUMBER CHALLENGE

// let a = 1;
// let b = 2;
// console.log(a+b);

// let c = 21;
// let tempInF = c * (9/5) + 32;
// console.log(tempInF.toFixed(1));

// ODD OR EVEN NUMBERS <<<<< ---- to do
// let myNumber = Math.random();
// console.log(myNumber.)

//  PICK THE BIGGEST NUMBERS

// STRING CHALLENGE

// let a = 'One plus one is ';
// let b = 2;
// console.log(a + b);

// let firstName = 'melanie';
// let lastName = 'jumalon';
// let fullName = `${firstName} ${lastName}`;
// console.log(firstName.toUpperCase());
// console.log(firstName.length);
// console.log(firstName[0]);

// let nameReversed = fullName.split("").reverse("").join("")
// console.log(nameReversed)


// let someString = "4";
// let someNumber = 3;
// let result = someNumber + someString;
// let resultOther = someString + someNumber;
// console.log(`The result,${result}, is a` ,typeof result);
// console.log(`The result,${resultOther}, is a` ,typeof resultOther);

// console.log("Greetings Earth!");

// let numberThing = 5;
// numberThing = 4;

// let thing1 = 'test';
// let thing2 = "test";
// let thing3 = `${thing1} ${thing2}`;
// console.log(thing3);

// console.timeEnd();