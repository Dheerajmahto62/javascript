//  ---------   Array   -----------

const myArr = [0,1,2,3,4,5]
const myHeors = ["SRK" , "Nagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[3])

// myArr.push(6)
// myArr.push(7)
// myArr.pop()   // remove from last index



// myArr.unshift(9) // Add from first index
// myArr.shift() // remove from first index

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))
// console.log(myArr)

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

console.log("+++++++++++++++")


//  slice , splice
console.log("A", myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B" , myArr)

const myn2= myArr.splice(1,2)
console.log("C" , myArr)
console.log(myn2)



