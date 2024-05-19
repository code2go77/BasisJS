/* Use Case : Fix Buzz
--> If Number is divisible by 3 display Fizz
--> If Number is divisible by 5 display Buzz
--> If number is divisible by bot 3 & 5 then display FizzBuzz.Buzz
--> If number is not divisible by both 3 & 5 then display Input 
--> If input is not a number then display NaN  */ 

let number = find(22)
console.log(number);

function find(n) {
    if ( typeof n !== 'number')
        return NaN
    if ((n % 3 === 0) && (n % 5 === 0))
        return 'FizzBuzz'
    if ( n % 3 === 0) 
        return 'Fizz'
    if (n % 5 ===0) 
        return 'Buzz'
    if ((n % 3 !== 0) && (n % 5 !== 0))
        return n    
}