//Array specific loops
// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const element of arr) { //here obj is arr
    // console.log(element);
}

const greetings = "helloworld"

for(const greet of greetings) {
    // console.log(`each character is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN',"india")
map.set('usa',"united states of america")
map.set('fr',"france")

// console.log(map);

for(const [key, value] of map){ //destructuring off array
    // console.log(key, "-", value);
}

const myObj = {
    'userName': "Anshika",
    'sic': "23bced93"
}

for(const [key, value] of myObj){ // not iteratable error
    // console.log(key, "-", value);
}





