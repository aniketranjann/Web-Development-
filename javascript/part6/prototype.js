let computer = { cpu: 12 };
let lenovo = { screen: "HD", __proto__: computer };
let tomHardware = {};
console.log(`lenovo`, lenovo.__proto__);
// dunder proto dunder

let genericCar={tyres : 4}
let tesla = {
    driver : "AI"
}

Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla`,tesla.tyres);
// another way 
console.log(`tesla`, Object.getPrototypeOf(tesla));

console.log(`generic car`, genericCar);
