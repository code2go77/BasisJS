//Defining a function in Java Script.
function greet(name) {
    console.log('Hello ' + name);
}

//calling the function
//greet('Vikas');

function square(number) {
    return number * number;
}

// console.log(square(2));

//JS Airthmetic Operators : +, -, *, /, %, ** (exponational)
// Incremental operators -- / ++

let x =  10;
console.log(x--); // It will decrement after 
console.log(x);

//Relational Comparison Operaors

x = 1;
console.log(x > 1);
console.log(x < 1);
console.log(x <=1);

//Equality Comparison Operators

console.log(x === 1);
console.log(x !== 1);

//Loose equality check
console.log(true == 1);

//Strinct equality check
console.log('1' === 1); // Check Type and Value

/* Use of Tenary Operators
Condition : If a customer have more than 100 points then he is Gold otherwise Silver.*/
let points = 110;
let type = points > 100 ? 'Gold' : 'Silver';
console.log(type);

//Swapping the value
let a = 'red'
let b = 'blue'
let temp;
console.log(a)
console.log(b)
temp = a
a = b
b = temp

console.log('After Swap ', a, b)