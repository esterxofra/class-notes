// Iteration #1: Find the maximum (DONE)

// Ternary Operator:
// condition ? expression1 : expression2
// If the condition is true, expression1 is executed.
// if the condition is false, expression2 is executed.



const maxOfTwoNumbers = (a, b) => {
  // return a > b ? a : b;
  // return a > b ? a : a === b ? a : b;
  return a > b 
  ? `${a} mayor que ${b}` 
  : a === b 
  ? `${b} es igual que ${a}` 
  : `${b} mayor que ${a}`
}
console.log(maxOfTwoNumbers(50, 10));

// OR

const maxOfTwoNumbers = (num1, num2) => {
  // var001:
  if (num1 === num2) {
    console.log(`${num1} & ${num2} are the same number`);
  }
  else if (num1 > num2) {
    console.log(`In this case ${num1} is bigger than ${num2}`);
  }
  else {
    console.log(`In this case ${num2} is bigger than ${num1}`);
  }
};

console.log(3, 50);

// _______________________________________________

// Iteration #2: Find longest word (TENGO DUDAS????)
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
// version 001 - conditional  + buclear/looper 
const findLongestWord = (wordArray) => {
// Concatenar la propiedad de length - stop logic if the array is empty
  if (wordArray.length === 0) return null;
// To store longest word para inyectar la palabra más larga
  let longestWord = "";
  for (let i = 0; i < wordArray.length; i++) { 
    if (longestWord.length < wordArray[i].length)
    longestWord = wordArray[i]
  }
  return longestWord
  };
  console.log (findLongestWord(words));
  // Result --> cocodrile

  // version 002 - methods
  const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
  const findLongestWordSecondVariation = (wordArray) => {
    let wordLength = "";
    // if (wordArray.length === 0) sería lo mismo que if (!wordArray.length) - si no hay nada dentro del array, es decir, un array sin longitud
    if (!wordArray.length) return null;
    // en el caso que tengamos una sola palabra dentro del array - cambiar el array a una string con el método .toString
    else if (wordArray.length === 1) return wordArray.toString()
    else {
      let temporalWord = wordArray.sort((wordOne, wordTwo) => 
      wordOne.length > wordTwo.length ? -1 : 1);
      // Sería lo mismo... wordOne.length < wordTwo.length ? 1 : -1);
      wordLength = temporalWord[0]
    }
    return wordLength;
  };
  console.log (findLongestWordSecondVariation(words));
  // Result --> cocodrile

// function longest_str_in_array(arra)
//   {
//     let max_str = arra[0].length;
//     let ans = arra[0];
//     for (let i = 0; 
//       i < arra.length; 
//       i++) {
//         let maxi = arra[i].length;
//         if (maxi > max_str) {
//             ans = arra[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest_str_in_array(["ab", "a", "abcd"]));

// _______________________________________________

// Iteration #3: Calculate the sum (DONE)
// REDUCE --> https://medium.com/@xadrijo/un-vistazo-a-la-funci%C3%B3n-reduce-en-javascript-f4459bc4e3aa

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let initialValue = 0;
let sumWithInitial = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial);

// ¿Por qué el initialValue?

// ------
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const sumNumbers = (numbersArray) => {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}
console.log(`The total sum is ${sumNumbers(numbers)}`)
// OR
console.log(sumNumbers(numbers));
// result --> 87

// EJEMPLO ACLARATORIO

const suma = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10].reduce((a, b) => a + b);
console.log(suma);

const suma = [10, 20, 30, 40].reduce((a, b) => a + b);
console.log(suma);

// Explanation: (a, b) son los parámetros que recibe la función, 
// es nuestro ejemplo a = 10 y b = 20. Nuestra función retorna la suma de ambos, 
// es decir 30. Debido a que existen más elementos en el array, la función reduce() 
// es invocada nuevamente, la diferencia radica en que el parámetro “a” ahora es igual a 30 
// (representa el monto acumulado) y “b” es el elemento restante en el array, es decir 30. 
// Al concretarse la operación el resultado que será mostrado en consola es ahora igual a 60.

// Iteration #3.1 Bonus: (DONE)
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// 6 + 12 + 5 + 1 + 1 + 5 + 3 + 6 + 8 + 10 = 57
// son funciones reutilizables por eso tenemos que apuntar a un parametro y no a un mixedArr

const sum = (mixedArray) => {
  let mixedSum = 0;
  for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "string") {
      // Definimos una variable para partir el string en posiciones
      // .split (tenemos que especificar qué tipo de separación queremos). 
      // En nuestro caso solo queremos que separe las palabras
      let string = mixedArray[i].split("");
      // OR (it's the same) let string = mixedArray[i].length; (Álvaro)
      for (let i = 0; i < string.length; i++) {
        mixedSum += string[i].length;
      }
    } else if (typeof mixedArray[i] === true) {
      mixedSum += 1;
    } else {
      mixedSum += mixedArray[i];
    }
  }
  return mixedSum;
};

console.log(sum(mixedArr));

// result --> 57

// DEFINITIONS:
// El método split() divide un objeto de tipo String en un array (vector) de cadenas 
// mediante la separación de la cadena en subcadenas.

// _______________________________________________

// Iteration #4: Calculate the average
// Level #4.1: Array of numbers (DONDE)
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;  
const result = average(numbersAvg);   
console.log(result);
// Result --> 6

// ------OR

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// REUTILIZAMOS UNA FUNCIÓN ANTERIOR:
// const sumNumbers = (numbersArray) => {
  //   let sum = 0;
  //   for (let i = 0; i < numbersArray.length; i++) {
  //     sum += numbersArray[i];
  //   }
  //   return sum;
  // }
  // console.log(`The total sum is ${sumNumbers(numbers)}`)
  // // OR
  // console.log(sumNumbers(numbers));


const averageNumbers = (numbers) => {
return (sumNumbers(numbers) / numbers.length).toFixed(2);
}
console.log(averageNumbers(numbersAvg));
// NOTA: VER EJERCICIO DE DIEGO. UTILIZA .TOFIXED PARA NÚMEROS CON DECIMALES
// 


// Level #4.2: Array of strings

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

const averageWordLengthUsingReduce = (arr) => {
  return arr.join("").length / arr.length
};

console.log(averageWordLengthUsingReduce(wordsArr));

// Result --> 5.3


// Bonus - Iteration #4.3 (TENGO DUDAS donde pongo el avg) NO CORREGIDO A PARTIR DE AQUÍ

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

const sum = (arrayArgument) => {
  let mixedSum = 0;
  for (let i = 0; i < arrayArgument.length; i++) {
    if (typeof arrayArgument[i] === "string") {
      let str;
      str = arrayArgument[i].split("");
      for (let i = 0; i < str.length; i++) {
        mixedSum += str[i].length;
      }
    } else if (typeof arrayArgument[i] === true) {
      mixedSum += 1;
    } else {
      mixedSum += arrayArgument[i];
    }
  }
  return mixedSum;
};

console.log(sum(mixedArr));

// _______________________________________________

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(unic) { }

let newUniqueArray = [];

let element = wordsUnique["crab"];

let idx = wordsUnique.indexOf(element)

if (idx != -1) {
  newUniqueArray.push(idx);
  idx = wordsUnique.indexOf (element, idx + 1);
}
console.log(newUniqueArray);

// _______________________________________________

// Iteration #6: Find elements (DONE)
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

console.log(wordsFind.includes("machine"));
console.log(wordsFind.includes("coffee"));

function doesWordExist() {}

// _______________________________________________

// Iteration #7: Count repetition (DONE)
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

// The reduce() method applies the defined function to each element of the array and passes the result 
// of each iteration to the next iteration.
// To count the duplicates using the reduce() method,
// Invoke the reduce method in the array.
// During each iteration, increment the element count if the element already exists. 
// Else, initialise the element count to 1.
// Use this method when you want to count the duplicates in an array in JavaScript using the ES6 method.

let howManyTimes = wordsCount.reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});
console.log(howManyTimes);

// Result --> disobedience: 1, eating : 1, machine : 1, matter : 4, starting : 1, subset : 1, trouble : 1, truth : 1.

// OTHER WAY TO DO IT

// const myArray = ['a', 'b', 'c', 'c', 'b', 'd'];
// let elementCounts = {};
// myArray.forEach(element => {elementCounts[element] = (elementCounts[element] || 0) + 1;});
// console.log(elementCounts);
// Result --> {a: 1, b: 2, c: 2, d: 1}

// _______________________________________________

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(mtx) {

  for (let i = 0;
    i < mtx;
    i++){
      let arr = mtx[i];
      for (let j = 0;
        j < mtx.length;
        j++){
          let group = arr[j];
          if
        }
    }


}





// _______________________________________________

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
