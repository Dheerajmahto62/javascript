const name = "Dheeraj"
const count = 50

// console.log(name + count + "value")

console.log(`Hello my name is ${name} and my count is ${count}`);

console.log("*****************")

const gameName = new String('Dheeraj Mahto');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(6))
console.log(gameName.indexOf('M'))

console.log("*****************")
const newstring = gameName.substring(0, 9)
console.log(newstring)

console.log("****************")
const anotherString = gameName.slice(-13, 5)
console.log(anotherString)

console.log("***********************")
const newstringOne = new String("      Dheeraj         ")
console.log(newstringOne)
console.log(newstringOne.trim())  // it is remove the white space
console.log(newstringOne.trim().replace('Dheeraj' , 'Mahto'))
console.log(gameName.split(" "))
