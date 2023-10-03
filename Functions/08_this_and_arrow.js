const user = {
    username: "Dheeraj",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Mahto"
// user.welcomeMessage()
// console.log(this)  // output is empty

const chai = () => {
    let username = "Dheeraj"
    console.log(this)
}
// chai()


//  ============ Arrow Funtion ============
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4))

// const addTwo = (num1,num2) => num1+num2
const addTwo = (num1,num2) => ({username: "Dheeraj"})
console.log(addTwo(3,4))

