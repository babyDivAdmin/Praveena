


console.log("I'm Praveena. Here are m details")

let myDetails = { 
firstName: "Praveena",
lastName: "Chandrashekar",
age: 30,
gender: "female" 
}
let myFavourites = ["red", 10,"painting", ]
let myHobbies =["painting","singing",'gardening']
let praveenaDetails = {
details: [myDetails, myFavourites,myHobbies]
}
console.log(myDetails.gender);
console.log(praveenaDetails.details[0]);
console.log(praveenaDetails.details[1]);
console.log(praveenaDetails.details[2]);
console.log(praveenaDetails.details[3]);



//if else

const age = 13;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');

} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}


let numberrr = 23;
let ggg= "23";

console.log(numberrr===ggg);







const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
