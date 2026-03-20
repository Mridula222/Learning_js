//reference -> functionName and execution -> functionName()

// function addTwoNum(num1, num2) {//param
//     console.log(num1 + num2);
// }

function addTwoNum(num1, num2) {
    let result = num1 + num2
    return result
}


// addTwoNum(2, "3")//arg

const result = addTwoNum(3, 4)
// console.log("result: ",result);


//++++++++++++++++++++++part-02+++++++++++++++++++++++++++++++++++++++++++
//if no of parameters are unkown then we can use rest/spread operator
function calCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calCartPrice(200,300,400))

const user = {
    userName : "Mridula",
    price: 200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and priceis ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    userName: "Anshika",
    price: 700
})

const myNewArray = [100, 300, 500, 700]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))