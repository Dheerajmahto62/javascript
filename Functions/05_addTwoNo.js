// function addTwoNo(num1, num2){
//     console.log((num1+num2))
// }
// addTwoNo(10, 20)
// addTwoNo(10, "20")
// addTwoNo("20", 10)

// function addTwoNo(num1, num2){
//     let result = num1+num2
//     return result
    // return num1+num2
// }
// const result = addTwoNo(3,5)
// console.log("result: ", result)

// function fun(username = "Mahto"){
//     if(!username){
//         console.log("Please Enter a User name")
//         return
//     }
//     return ` Hello , ${username} `
// }
// console.log(fun("Dheeraj"))
// console.log(fun("Dheeraj"))


function calculateCartPrice(val1,val2,...num1){   // ... rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500,2000,600))

//   ojects functions --- 

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject( {
    username: " Mahto",
    price: 399
})

// =======array function========

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,1000]))