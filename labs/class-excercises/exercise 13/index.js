// Loops 1
// Crea un for loop que cuente de 0 a 100 i en cada iteración sume 
// el valor actual a un resultado total. Al final haz un console.log 
// que printee el resultado.

// let result = 0;

// for (let i = 0;
//     i <= 100;
//     i++){
// Aquí nos contaría del 0 al 100
           // console.log(result);
// Aquí coge cada número de la lista anterior y se lo suma al siguiente
//         result += i;
//         // Ésta es la versión larga del codigo anterior: result = result + i
//     } 
//     console.log(result);  



// Loops 2
// Crea un array de números llamado "numbers" con valores aleatorios. 
// Utiliza un for loop para recorrer el array y encontrar el número mayor 
// y el número menor. Imprime ambos números en la consola.

// const numbers = [2, 3, 5, 10, 8, 3];

// // max number in array

// let max = 0;
// for (i = 0; i <= numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(max);

// // max number in array

// let min = 100;
// for (i = 0; i <= numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(min);

// _____

// const numbers = [2, -3, 5, 10, 8, 3];

// let max = 0;
// let min = 0;

// for (i = 0; i <= numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(max);
// console.log(min);

// _____

// const numbers = [2, -3, 5, 10, 8, 3];

// let max = 0;
// let min = 0;

// for (i = 0; i <= numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   else if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(max);
// console.log(min);



// Loops 3
// Utiliza un bucle while para imprimir los números pares del 2 al 20.

// let evenNumber=2; 

// while (evenNumber <= 20){

//   if(evenNumber % 2 == 0){
//   console.log(evenNumber)
//   }

//   evenNumber++
// }



// Loops 4
// Crea una variable llamada "numeroAdivinar" con un número 
// entero entre 1 y 10 (puedes asignarle un valor manualmente).
// Crea una variable llamada "numeroIngresado" y asignale el valor 0.
// Utiliza un bucle do...while para asignar a la variable "numeroIngresado" 
// un número entero obtenido de un array de números [1,2,3,4,5,6,7,8,9,10]. 
// El bucle debe continuar hasta que "numeroIngresado" sea igual a "numeroAdivinar".
// Una vez que el bucle finaliza, imprime en la consola el número de iteraciones 
// realizadas.

// let numeroAdivinar = 7;

// let numeroIngresado = 0;
// 
// let arrayNumbers = [1,2,3,4,5,6,7,8,9,10];

// let intentos = 0; 


// do {
//     numeroIngresado = arrayNumbers[intentos]
//     intentos++
// } while (numeroIngresado !== numeroAdivinar)

// console.log(`El número a adivinar era ${numeroAdivinar} y se adivinó en ${intentos} intentos`);