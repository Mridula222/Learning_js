// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "12abcd"
tinderUser.name = "Anshika"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName :{
            firstName : "Anshika",
            lastName: "goel"
        }
    }
}

//console.log(regularUser.fullName?.userFullName.firstName); // ? -> if the value doesn't exist then we use this

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)  // here {} is the target where all obj are kept
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//++++++++++++++++++++++++++++PART-02++++++++++++++++++++++++++++++++++++++++++++++

//Destructuring of objects

const course = {
    courseName : "js in hindi",
    price: "999",
    courseInstructor: "Anshika"
}

// course.courseName

const {courseInstructor: instructor} = course

console.log(instructor);

//relating with js
// const navbar = ({company}) => {

// }

// navbar(company = "Mridula");

//understanding Api in relation with objects
 //json
// {
//     "name": "Anshika",
//     "courseName": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
]