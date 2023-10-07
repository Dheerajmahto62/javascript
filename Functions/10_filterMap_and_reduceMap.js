// const coding  = ["js", "ruby" , "python" , " c++"]

// const values = coding.forEach( (items) => {
//     console.log(items)
//     return items
// })
// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((nums) => {
//     return nums > 4
// })
// console.log(newNums)

const newNums = myNums
                    .map( (nums) => nums *10)
                    .map( (nums) => nums+1)
                    .filter( (nums) => nums>=40)

// console.log(newNums)

