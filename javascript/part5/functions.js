/*
1. write a function named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like 
"Making green tea" when called with "green tea".
store the result in a variable named 'teaOrder'.
*/
// function makeTea(typeOfTea) {
//     return `Making ${typeOfTea}`
// }
// let teaOrder = makeTea("coffee");
// console.log( makeTea("coffee"));
// console.log(teaOrder);

/*
2. Create a function named 'orderTea' that takes one parameter, 'teaType'. inside this function, create another function
named 'confirmOrder' that returns a message like "Order confirmed for chai".
call 'confirmOrder' from within 'orderTea' and returm the result.

*/
// function orderTea(teaType) {
//   function confirmOrder() {
//     return `Order confirmed for ${teaType}`;
//   }
//   return confirmOrder();
// }

// let orderConfirmation = orderTea("lemon chai");
// console.log(orderConfirmation);

/*
3. write an arrow function named 'calculateTotal' that takes two parameters : 'price' and 'quantity'
The function should return the total cost by multiplying the 'price' and 'quantity'.
store the result in a variable named 'totalCost'
*/
// unnamed function
// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// };

// const calculateTotal = (price, quantity) => price * quantity;
// let totalCost = calculateTotal(4 , 5);
// console.log(totalCost);
// arrow function doesn't has ability to pass on this context anywhere

/*
4. write a functiom named 'processTeaOrder'that takes another function 'makeTea', 
as a parameter and calls it with the arguement '"earl grey"'.
return the result of calling 'makeTea'.
*/

// higher order function

// function makeTea(typeOfTea) {
//     return `The ordered tea is ${typeOfTea}`
// }
// function processTeaOrder(teaFunction) {
//   return teaFunction("earl grey");
// }
// let order = processTeaOrder(makeTea);
// console.log(order);

/*
5. write a function named 'createTeaMaker' that return another function.
the rerturne function should take one parameter 'teaType', and return message like'"Making green tea"'
store the returned function in a variable named 'teaMaker' and call it with '"green tea".
*/

// function createTeaMaker() {
//   return function (teaType) {
//     return `Making ${teaType}`
//   };
// }

// let teaMaker = createTeaMaker();
// // now teaMaker holds the function definition
// console.log(teaMaker("green Tea"));
function createTeaMaker(name) {
    return function (teaType) {
      return `Making ${teaType} for ${name}`
    };
  }
  
  let teaMaker = createTeaMaker("aniket");
  // now teaMaker holds the function definition
  console.log(teaMaker("green Tea"));