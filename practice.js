var name;
let age;

function sayHi() {
    console.log(name);  // Outputs: undefined
    console.log(age);   // Throws ReferenceError

    name = "Suri";
    age = 14;
}

sayHi();

console.log(name);  // Now accessible, outputs "Suri"
console.log(age);   // Now accessible, outputs 14
