// let username = {
//   firstName: "Aniket",
//   isLoggedin: true,
// };
const username = {
    firstName: "Aniket",
    isLoggedin: true,
    "full name" : "its full"
  };
  
console.log(typeof username);

username.firstName = "Mr. A";
username.lastName = "Ranjan";

console.log(username.lastName);
console.log(username.firstName);
console.log(username["full name"]);
console.log(username);

let today = new Date();
console.log(today.getDate());

// Array 
let heros = ["A","B","C","true", 9]
console.log(heros[0]);

// type conversion -- implicit
let isValue = true;
console.log(1+"1"); //1
console.log(1+isValue); // 1+1 =2 

