/* Using If - Else condition 
Use case : If hour is between 6am to 12 pm then Good Morning 
           If hours is between 12 pm to 6 pm then Good Afternnon
           Otherwise Good Evening */ 

let hour = 17

if (hour >= 6 && hour < 12) {
    console.log('Good morning')
} 
else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon')
}
else {
    console.log('Good Evening')
}

// Using For loop in JS : To find the Odd No's

for (let i = 1; i <=5; i++) {
    if (i % 2 !== 0) console.log('Odd No: ', i)
}   

for (let i = 5; i >=1; i--) {
    if (i % 2 !== 0) 
        console.log('Odd No: ', i)
} 

// Using For loop in JS : To find the Odd No's
for (let i = 1; i <=5; i++) {
    if (i % 2 === 0)
        console.log('Even No: ', i)
}

//Using For-in
const person = { // person Object with its properties.
    name : 'Vikas',
    age : 30
}

for (let key in person)
    console.log(key, person[key]);

//Using Array For-In example.

const color = ['red', 'blue', 'green'];
for (let index in color)
    console.log(color[index])
let x=0;
//using For-of loop latest
for (let colors of color)
    console.log(colors)