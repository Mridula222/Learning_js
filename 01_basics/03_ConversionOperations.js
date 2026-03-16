let score = "33abc"

console.log(typeof score)

let valueInNum = Number(score)
console.log(typeof valueInNum)
console.log(valueInNum) //when we checked the type of this it was the number when we are printing the value its coming out to be nan

//"33" => 33
//"33abc" => NAN

let someNum = 33
let stringNum = String(someNum)
console.log(stringNum)
console.log(typeof stringNum)