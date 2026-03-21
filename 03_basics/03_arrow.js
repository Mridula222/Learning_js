const user = {
    userName : "Mridula",
    sic: "23ghtf67",
    branch: "CEN",

    welcomemsg: function(){
        console.log(`${this.userName}, welcome to the website`); //this refers to the current context
    }
}

// user.welcomemsg()
// user.userName = "Anshika"
// user.welcomemsg()

console.log(this);
//in browser global object is window here this value is empty object

// function thisVal(){
//     console.log(this);
// }

// thisVal()  //gives all the values of this

//learning this
// const one = function() {
//     let userName = "Anshika"
//     console.log(this.userName);
// }

const one = () => {
    let userName = "Anshika"
    console.log(this);
}

//Arrow Function
//1.basic arrow function
// const addTwo = (num1, num2) => {   //need to write return as we are using{}
//     return num1 + num2
// }

//implicit return arrow function
const addTwo = (num1, num2) =>  ( num1 + num2 ) //dont need to write return here as we are using ()

console.log(addTwo(3,5))


