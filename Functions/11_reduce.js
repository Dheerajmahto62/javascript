const myNums = [1, 2, 3, 4 ]
// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// } , 0)
// console.log(myTotal)

// const myTotal = myNums.reduce( (accu , currvalue) => accu + currvalue ,0)

// const myTotal = myNums.reduce( (accu , currvalue) => {
//     return accu + currvalue
// } , 0)
// console.log(myTotal).

const shoppingCart = [
    {
        itemsName: "js course",
        price: 2999
    },
    {
        itemsName: "java course",
        price: 4999
    },
    {
        itemsName: "c++ course",
        price: 2999
    },
    {
        itemsName: "Python course",
        price: 3999
    },
]

const priceToPay = shoppingCart.reduce( (accu,items) => {
    return accu+ items.price

},0)
console.log(priceToPay)
