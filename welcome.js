const greeting = "Hello World"
 const userName = prompt("Please enter your name");
 const welcome = document.getElementById("header")
 welcome.textContent= `${greeting}, my name is ${userName}`
console.log(`${greeting} , my name is ${userName}`)

function age(){
    let yearBorn = Number(prompt("which year were you born ?"))
    let currentAge = 2023 - yearBorn;
    const howOld = document.getElementById("userAge")
    howOld.textContent = `I am ${currentAge} years old`
    console.log(`I am ${currentAge} years old`)
 }
 age()