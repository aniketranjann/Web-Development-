let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
console.log(car.start());
// the problem is we cannnot make much of the copies of it.
// we solved that problem by making a constructor functio.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let jhon = new Person("Jhon", 20);
console.log(jhon.name);

// Prototype and prototypal chain
function Animal(type) {
  this.type = type;
}

// i can access all the prototypal chain and can inject my own method.
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

let bird = new Animal("Bird");
console.log(bird.speak());

// trying with array
Array.prototype.aniket = function () {
  return `${this} custom method`;
};
let myArr = [1, 2, 3, 4];
console.log(myArr.aniket());

let myNewArr = [5, 6, 7, 8, 9, 0];
console.log(myNewArr.aniket());

// classes
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is car from ${this.make}`;
  }
}

// inheritance

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne.make);

// Encapsulation
// i want to restrict direct access to object data / data object

class bankAccount {
  #balance = 0;
  // to access balance , have to provide custom method
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance()
  {
    return `$ ${this.#balance}`
  }
}

let account = new bankAccount();
account.deposit(22);
console.log(account.getBalance());
account.deposit(99);
console.log(account.getBalance());

// Abstraction
// Hides the complex implmentaion details
class CofeeMachine {
    start()
    {
        // Call DB
        // filter value 
        return `Starting the machine...`;
    }
    brewCoffee()
    {
        // complex calculation
        return `Brewing Coffee`
    }
    pressStartButton ()
    {
       let msg1 = this.start();
       let msg2 =  this.brewCoffee();
       return `${msg1} and ${msg2}`
    }
}

let myMachine = new CofeeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());


// Polymorphism 

class Bird 
{
    fly ()
    {
        return `Flying....`
    }

}
class Penguin extends Bird {
    fly()
    {
        return `Penguins cannot fly`
    }
}

let bird1 = new Bird()
let penguin = new Penguin();
console.log(bird1.fly());
console.log(penguin.fly());

// static method -- method that can be called only by the class itself 


class calculator {
    static add(a,b)
    {
        return a+b;
    }
}
// let miniCalc = new calculator();
// console.log(miniCalc.add(2,3));
console.log(calculator.add(3,3));

// Getters and setters 

const obj = {
    _name: 'John', // _name is a private property
  
    // Getter method
    get name() {
      return this._name;
    }
  };
  
  console.log(obj.name); // Output: John

  
  const obj1 = {
    _age: 25, // _age is a private property
  
    // Setter method
    set age(value) {
      if (value < 0) {
        console.log('Age cannot be negative.');
      } else {
        this._age = value;
      }
    }
  };
  
  obj1.age = 30; // Setter is called
  console.log(obj1._age); // Output: 30
  
  obj1.age = -5; // Output: Age cannot be negative.
  console.log(obj1._age); // Output: 30 (age wasn't updated)
  

  const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    _age: 30,
  
    // Getter for full name
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    },
  
    // Setter for age with validation
    set age(value) {
      if (value < 0) {
        console.log('Age must be a positive number.');
      } else {
        this._age = value;
      }
    },
  
    // Getter for age
    get age() {
      return this._age;
    }
  };
  
  console.log(person.fullName);  // Output: John Doe
  person.age = 35;               // Setter is invoked
  console.log(person.age);       // Output: 35
  
  person.age = -5;               // Output: Age must be a positive number.
  console.log(person.age);       // Output: 35 (age was not changed)
  