// Iteration 1: Names and Input
let hacker1 = "Ester";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Guillem";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1 = "Ester";
let hacker2 = "Guillem";

function comparation (hacker1, hacker2) {
    if (hacker1.length > hacker2.length) {console.log(`The driver has the longest name, it has ${hacker1.length}`);}
    else if (hacker1.length < hacker2.length) {console.log(`It seems that the navigator has the longest name, ${hacker2.length} characters!`);}
    else if (hacker1.length === hacker2.length) {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);}
}

// Iteration 3: Loops
let hacker1 = "Ester";

for (let i=0;
    i < hacker1.length;
    i ++)
  {console.log(`Index: ${i} - element: ${hacker1[i]}`);}
