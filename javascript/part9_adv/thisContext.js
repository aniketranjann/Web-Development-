const Person = {
  name: "Aniket",
  greet() {
    console.log(`hii,my name is ${this.name}`);
  },
};
Person.greet()
// now assigning the function in some other variable fn
const greetFunction = Person.greet
greetFunction();
// to get the 'this' conetxt , we will have to bind the context
const boundGreet = Person.greet.bind({name : "Ranjan"})
boundGreet();
// Bind , call and apply 
