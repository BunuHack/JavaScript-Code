const name = "Bunu"
const repoCount = "10"

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Bunu_bhai")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherStr = gameName.slice(-7 , 4)
console.log(anotherStr);


const strOne = "    Bunu    "
console.log(strOne);
console.log(strOne.trim());

const url = "https://bunu.com/bunu%20bhai"

console.log(url.replace('%20' , '_'));
console.log(url.includes('hacker'));


console.log(gameName.split('_'))