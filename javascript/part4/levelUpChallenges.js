/*
//1. write a 'for' loop that loops through the array["green tea", "black tea","chai", "oolong tea"] and stops the loop when it finds "chai".
Store all teas befor "chai" in a new array named 'selectedItems'.
*/
let arr = ["green tea", "black tea", "chai", "oolong tea"];
let selectedItems = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== "chai") {
    selectedItems.push(arr[i]);
  } else {
    i++;
  }
}
console.log(selectedItems);
