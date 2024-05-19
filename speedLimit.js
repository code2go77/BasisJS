/* Use Case : Checking the speed limit  
--> Speed limit is 70 
--> If speed limit cross every after 5 Km then give 1 Point 
--> If points equal to 12 then suspended */ 

speedLimit(130)

function speedLimit(speed) {
    const limit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;
    if (speed < limit + kmPerPoint) {
        console.log('Ok')
    return
    }
    const points = Math.floor((speed - limit) / kmPerPoint)
    if (points >= maxPoints )
        console.log('Licence suspended')
    else
        console.log('Points', points)
}

//Checking Even and Odd numbers.
checkNumber(10)

function checkNumber(limit) {
    for (let i = 1; i <= 10; i++) {
        const message = (i % 2 === 0) ? 'Even' : 'Odd'
        console.log(i, message)
    }
}
