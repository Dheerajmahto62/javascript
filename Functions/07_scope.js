function one() {
    const username = "Dheeraj"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

one()

if(true) {
    const username = "Dheeraj"
    if(username === "Dheeraj") {
        const website = " youtube"
        console.log(username+website)
    }
    // console.log(website)  // this line is error
}

// console.log(username)

//  +++++++++++++ Interesting +++++++++++++


console.log(addone(5))
function addone(num) {
    return num + 1

}
// console.log(addone(5))

// addTwo(5) // this line is error
const addTwo = function(num){
    return num+2
}
addTwo(5)