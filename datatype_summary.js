//  Two types of datatype 

//  1. Primitive Datatype

//  7 types : string ,Number ,Boolean , null , undefined , symbol , BigInt

// const score = 100
// const scoreValue = 100.3
// console.log(score)
// console.log(scoreValue)


console.log("**********")
const isLoggedIn = false
const outsideTem = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bioNumber = 232347839344n



//  2. Reference (Non primitive)
//  Array, Objects, Functions

// Array------
console.log("***************")
const heros = ["shaktiman" , "Naagraj" , "Doga"];
let myobj = { 
    name: "Dheeraj",
    age: 19
}
console.log(myobj)
console.log(heros)

//  Funtions -------
console.log("***************")

const myFunction = function(){
   console.log("Hello World!") 
}
myFunction()



