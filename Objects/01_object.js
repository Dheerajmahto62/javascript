//  singleton
// Object.create

//  Object Literals

const mysym= Symbol("key1")


const JsUser = {
    name: "Dheeraj",
    "Full name": "Dheeraj Mahto",
    [mysym]: "mykey1",
    age: 18,
    location: "Bhopal",
    email: "dkmahto708@gmail.com"
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["Full name"])
// console.log(JsUser[mysym])

JsUser.email = "mahtodheeraj23@gmail.com"
// Object.freeze(JsUser) // cannot change object value 
JsUser.email = "dkmahto708@gmail.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS user")
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user , ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())