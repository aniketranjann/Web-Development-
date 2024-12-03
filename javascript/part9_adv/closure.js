// Closures are functions --> they remember the environment in which they are created 
function outer() {
    let counter = 4;
    return function()
    {
        counter ++;
        return counter
    }
}
let increment = outer ();
console.log(increment());
console.log(increment());
console.log(increment());
