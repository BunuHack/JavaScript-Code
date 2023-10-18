// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Bunu" ,
    "full Name": "Bunu Bhutia" ,
    mySym: "myKey1" ,
    [mySym]: "myKey2" ,
    age:20 ,
    location: "Odisha" ,
    email: "bunu@gmail.com" ,
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]

}
    
// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"])
console.log(JsUser["full Name"]);

console.log(JsUser.mySym);
console.log(typeof JsUser.mySym);

console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);


JsUser.email = "bunubhai@gmail.com"
console.log(JsUser.email);

Object.freeze(JsUser);

JsUser.email = "xyz@gmail.com"
console.log(JsUser.email);

JsUser.greetingOne = function() {
    console.log("Hello JS User ....");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetingOne);
console.log(JsUser.greetingTwo);