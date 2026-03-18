//singleton - if it is formed with constructor then only singleton is formed

//object literals

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")

const IsUser = {
    name: "Anshika",
    age: 18,
    location: "bbsr",
    email: "mridula@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["mon", "tue"],
    [mySym1] : "mykey1"
}

console.log(IsUser.name);
console.log(IsUser["name"]);
console.log(IsUser[mySym1]);

IsUser.email = "Anshika@gmail.com"
Object.freeze(IsUser)
IsUser.email = "mrdula@gmail.com"
console.log(IsUser.email);


