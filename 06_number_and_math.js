const score= 400
console.log(score)

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length)
console.log(balance.toFixed(2))

console.log("*******************")
const otherNumber = 123.8865
console.log(otherNumber.toPrecision(4))

console.log("****************")
const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))


// +++++++++++++   Maths   ++++++++++++
console.log("+++++++++++++++++")
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(5.1))
console.log(Math.floor(5.9))
console.log(Math.pow(2,3))
console.log("------------------------")

console.log(Math.random());
console.log((Math.random()*10) + 1)
console.log((Math.random()*10) + 1)

console.log("##################")
const min =10
const max =20
console.log(Math.floor(Math.random() * (max - min +1) ) +min)