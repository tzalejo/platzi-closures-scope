var firstName; // Undefined
firstName = "Oscar";
console.log(firstName);

var lastName = "David"; // declarar / asignar
lastName = "Ana"; // reasignar
console.log(lastName);

var secondName = "David"; // declarando / asignando
var secondName = "Ana"; // reasignado
console.log(secondName);

// Let
let fruit = "Apple"; // declara y asignar
fruit = "Kiwi"; // reasignar
console.log(fruit);

let fruit = "Banana";
console.log(fruit);

// const
const animal = "dog"; // declara y asigna
// animal = 'cat'; // reasignado
const animal = "Snake"; // da error
console.log(animal);

const vehicles = [];
vehicles.push("🚗"); // no estamos reclarando o reasignando  por ellos podemos trabajar
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
