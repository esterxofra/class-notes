// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

let hacker1 = "Ester";
let hacker2 = "Guillem";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// -------------------------------------------------------------------

// Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// VERSION 001 - IF, ELSE IF , ELSE

if (hacker1.length > hacker2.length) {console.log(`The driver has the longest name, it has ${hacker1.length}`);}
else if (hacker1.length < hacker2.length) {console.log(`It seems that the navigator has the longest name, ${hacker2.length} characters!`);}
else {console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);}




// VERSION 002 - TERNARY (1 CONDITION)
// SYNTAX: CONDITION ? EXPRESSION1 (TRUE) : EXPRESSION2 (FALSE)

hacker1.length > hacker2.length
  ? console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  : console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);




// VERSION 003 - TERNARY (2 OR MORE CONDITIONS)
// SYNTAX: CONDITION ? EXPRESSION1 (TRUE) : NEW CONDITION ? EXPRESSION1 (TRUE) : EXPRESSION2 (FALSE)

hacker1.length > hacker2.length
  ? console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  : hacker1.length === hacker2.length
  ? console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
  : console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

// -------------------------------------------------------------------

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// VERSION - ESTER
// toUpperCase() method -->  método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.

let upperCase = hacker1.toUpperCase();
for (let i=0;
    i < hacker1.length;
    i ++)
  {console.log(`Index: ${i} - element: ${upperCase[i]}`);}

// RESULT -->
// Index: 0 - element: E
// Index: 1 - element: S
// Index: 2 - element: T
// Index: 3 - element: E
// Index: 4 - element: R




// VERSION 001 - DIEGO

let newName = "Aleix";
console.log(newName.toUpperCase() + " ");
console.log(newName.toUpperCase());

// RESULT --> ALEIX (in both cases)




// VERSION 002 - DIEGO (USING ARRAY METHODS)
// split() method --> divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

let newName = "Aleix";
const usingSplitMethod = newName.split("");
console.log(usingSplitMethod);

// RESULT --> ['A', 'l', 'e', 'i', 'x']




// VERSION 003 - DIEGO (USING NATIVE METHODS)
// join() method --> une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

let newName = "Aleix";

const updatedNewName = newName.split("").join(" ").toUpperCase();
console.log(updatedNewName);

// RESULT --> A L E I X




// VERSION 004 - DIEGO (USING NATIVE METHODS & LOOPS - FOR)

let newName = "Aleix";
let reservedName = "";
for (let i = 0; i < newName.length; i++) {
  //   reservedName += newName[i].split("").join(" ").toUpperCase();
  reservedName += newName[i].toUpperCase() + " ";
}
console.log(reservedName);

// RESULT --> A L E I X




// VERSION 005 - DIEGO (USING NATIVE METHODS & LOOPS - FOR OF)
// FOR .. OF --> for (variable of iterable) {statement}. Ejecuta un bloque de código para cada elemento de un objeto iterable (string, array, etc.)

let newName = "Aleix";
let driverName = "";
for (const aleixName of newName) {
  driverName += aleixName.toUpperCase() + " ";
}
console.log(driverName);

// RESULT --> A L E I X 


// EJEMPLO ITERANDO UN ARRAY CON FOR ... OF
// let iterable = [10, 20, 30];

// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }

// RESULTADO -->
// 11
// 21
// 31


// EJEMPLO ITERANDO UN STRING CON FOR ... OF
// let iterable = "boo";

// for (let value of iterable) {
//   console.log(value);
// }
// RESULTADO -->
// "b"
// "o"
// "o"




// 3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".

let newName = "Aleix";

let arrayStrings = newName.split("");
console.log(arrayStrings); //['A', 'l', 'e', 'i', 'x']

let reverseArray = arrayStrings.reverse();
console.log(reverseArray); //['x', 'i', 'e', 'l', 'A']

const joinArray = reverseArray.join("");
console.log(joinArray); // xielA
  



// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?

// ORDEN LEXICOGRÁFICO --> En matemáticas, o más particularmente en Teoría del orden, el orden lexicográfico es una relación de orden definida sobre el producto cartesiano de conjuntos ordenados. Es conocido principalmente por su aplicación a cadenas de caracteres, por ejemplo en diccionarios o en la guía telefónica.

let hacker1 = "Ester";
let hacker2 = "Guillem";
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// RESULT --> Yo, the navigator goes first definitely.
// Al tener más carácteres el nombre de Guillem, va el primero

