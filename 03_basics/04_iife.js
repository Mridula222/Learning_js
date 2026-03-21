//Immediately invoked function expressions(IIFE)

//reason - we dont want pollution due to child parent scope in the function

(function one(){ //named iife
    console.log("db connected");
})();

((name) => { //unnamed iife
    console.log(`DB connected to`)
})()

