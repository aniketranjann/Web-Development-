// Inheritance being done on prototypes 
// Object inherits properperties from other object via protypal chain
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function()
{
    console.log(`Hello, my name is ${this.name}`);
    
}
let aniket = new Person("aniket");
aniket.greet();