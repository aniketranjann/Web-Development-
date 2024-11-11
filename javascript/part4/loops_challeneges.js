//1.  1-> N
/*
let sum = 0;
let i =1 
while (i<=5) {
    sum = sum + i;
    i = i+1;
    
}
console.log(sum);
*/

/*

// 2. write a loop that count downs from 5 to 1 and stores the numbers in an array name 'countdown'.
let i = 5;
let countdown = [];
while (i >= 1) {
  countdown.push(i);
  i--;
}
console.log(countdown);
*/

/*
// 3. 'do while' loop that prompts a user to enter their favorite tea type until they enter "stop" 
// store each type in an array named 'tea collection'

let teaCollection = [];
let tea 
do {
    tea = prompt(`Enter your favorite tea (type "stop" to finish)`)

    if (tea !== "stop") {
        teaCollection.push(tea)
    }
} while (tea !== "stop");

*/

/*
// 4. 'do while' adds from 1 to 3 and stores  the result in a variable 'total'.
let total = 0;
let i =0;
do {
    total += i;
    i++;
    
} while (i<=3);
console.log(total);
*/

/*

// 5. for loop , multiplies each element in the array [2,4,6] by 2
// and stores the results in a new array named 'multipliedNumbers'

let arr = [2,2,6]
let multipliedNumbers = [];
for(i=0;i<arr.length;i++)
{
    multipliedNumbers.push(arr[i] * 2);
}
console.log(multipliedNumbers);
*/

// 6. for loop, lists all the cities in the array ["Paris","New York","Tokyo","London"] and stores each
// city in a new array 'citylist

let arr = ["Paris","New York","Tokyo","London"];
let cityList = [];
for(i =0; i<arr.length; i++)
{
    console.log(arr[i])
    cityList.push(arr[i]);
}
console.log(cityList);
