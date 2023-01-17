// Operators 2
// Declara dos variable, una con el valor 3 (number) y 
// la otra con el valor "3" (string). Haz un console.log que 
// compare si las dos son iguales y devuelva verdadero. Haz otro que 
// las compare igual y devuelva falso. Haz lo mismo pero comprobando si NO son iguales. 
// Haz un console.log que compruebe si la primera es mayor o igual que 7. Finalmente, 
// haz un console.log que compruebe si las dos variables son estrictamente iguales o si 
// la primera variable es menor o igual a 3.

let num = 3;
let string = "3";
// 1st case - true (porque lo que compara si lo que hay dentro del contenedor es igual 
// pero no está comparando el tipo. Es decir, que 3 es igual a 3 pero no que uno es un numero 
// y el otro es un string)
console.log(num == string);
// 2nd case - false (porque uno es un número y el otro un string)
console.log(num === string);
// 3th case - true (porque son diferentes datos)
console.log(num !== string);

console.log(num >= 7);
// True porque una de las condiciones se cumple, la primera es falta pero num si que es igual o inferior a 3
console.log(num === string || num <= 3);




