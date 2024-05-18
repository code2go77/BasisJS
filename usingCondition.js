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