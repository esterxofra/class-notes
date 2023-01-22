// Iteration #1: Find the maximum
// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.

// VERSION 001 - TERNARY OPERATOR ----------------

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

// RESULT --> 50  mayor que 10


// VERSION 002 - IF, ELSE IF, ELSE ----------------

const maxOfTwoNumbers = (num1, num2) => {

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

maxOfTwoNumbers (3, 50);

// RESULT --> In this case 50 is bigger than 3


// -------------------------------------------------------------------------


// // Iteration #2: Find longest word
// Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

// VERSION 001 - CONDITIONAL + BUCLEAR/LOOPER ----------------

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
 
const findLongestWord = (wordArray) => {
// Concatenar la propiedad de length = 0 - stop logic if the array is empty
  if (wordArray.length === 0) return null;
// Use this empty string variable to store longest word when looping through the array on the loop for below
  let longestWord = "";
// Loop through the array param in order to get longest word 
  for (let i = 0; i < wordArray.length; i++) { 
    if (longestWord.length < wordArray[i].length)
    longestWord = wordArray[i];
  }
  return longestWord
  };
  console.log(`The longest word on this specific array is ${findLongestWord(words)}`);

  // Result --> The longest word on this specific array is crocodile


// VERSION 002 - METHODS ----------------

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

  const findLongestWordSecondVariation = (wordArray) => {
    let wordLength = "";
    // if (wordArray.length === 0) sería lo mismo que decir if (!wordArray.length) - si no hay nada dentro del array, es decir, un array sin longitud
    if (!wordArray.length) return null;
    // en el caso que tengamos una sola palabra dentro del array - cambiar el array a una string con el método .toString
    else if (wordArray.length === 1) return wordArray.toString();
    else {
      let temporalWord = wordArray.sort((wordOne, wordTwo) => 
      wordOne.length > wordTwo.length ? -1 : 1);
      // Sería lo mismo... wordOne.length < wordTwo.length ? 1 : -1);
      wordLength = temporalWord[0]
    }
    return wordLength;
  };
  console.log (findLongestWordSecondVariation(words));

  // // Result --> cocodrile (wordOne.length > wordTwo.length ? -1 : 1);)

  // // Result --> pearl (wordOne.length > wordTwo.length ? 1 : -1))


// -------------------------------------------------------------------------


// Iteration #3: Calculate the sum

// Iteration #3.1: Sum numbers ---------------------------------------------

// Calculating a sum can be as simple as iterating over an array and adding each of the elements together. Implement the function named sumNumbers that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course, we will learn how to do this by using the reduce array method, which will make your work significantly easier. For now, let's practice the "declarative" way of adding values, using loops.

// VERSION 001 - ESTER ----------------

// EJEMPLO ACLARATORIO DEL MÉTODO REDUCE

const suma = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10].reduce((a, b) => a + b);
console.log(suma);

// const suma = [10, 20, 30, 40].reduce((a, b) => a + b);
// console.log(suma);

// Explanation: (a, b) son los parámetros que recibe la función, 
// es nuestro ejemplo a = 10 y b = 20. Nuestra función retorna la suma de ambos, 
// es decir 30. Debido a que existen más elementos en el array, la función reduce() 
// es invocada nuevamente, la diferencia radica en que el parámetro “a” ahora es igual a 30 
// (representa el monto acumulado) y “b” es el elemento restante en el array, es decir 30. 
// Al concretarse la operación el resultado que será mostrado en consola es ahora igual a 60.

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

let initialValue = 0;
let sumWithInitial = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial);

// RESULT --> 87


// VERSION 002 - DIEGO ----------------

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers = (numbersArray) => {
  // Declaramos una variable para guardar el total de la suma y la inicializamos en 0
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    // sum = sum + numbersArray[i];
    sum += numbersArray[i];
  }
  // Retornamos el valor de la variable
  return sum;
}
console.log(`The total sum is ${sumNumbers(numbers)}`)

// RESULT --> The total sum is 87


// Iteration #3.1 Bonus: ---------------------------------------------

// You created a function that returns the sum of an array of numbers. But what if we wanted to know what was the sum of the length of all of the words in an array? What if we wanted to add boolean values to the mix? We wouldn't be able to use the same function as above, or better saying, we would have to tweak it a little bit so that it can be reused no matter what is in the array that is passed as an argument when function sumNumbers() is called.

// Here we are applying a concept we call polymorphism, that is, dealing with a function's input independently of the types they are passed as.

// Let's implement the function sum() that calculates the sum for an array filled with (almost) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// 6 + 12 + 5 (porque miami tiene 5 carácteres) + 1 + 1 (porque true equivale a +1 y false a -1) + 5 + 3 (porque "200" está representado como un string de 3 carácteres) + 6 + 8 + 10 = 57

// son funciones reutilizables por eso tenemos que apuntar a un parametro y no a un mixedArr (a nuestra array)

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

// RESULT --> 57

// DEFINITIONS:
// El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.


// -------------------------------------------------------------------------


// Iteration #4: Calculate the average
// Calculating an average is a very common task. Let's practice it a bit.
// Find the sum as we did in the first exercise (or how about reusing the function sumNumbers()?). Take that sum and divide it by the number of elements in the array.

// Level #4.1: Array of numbers ---------------------------------------------

// Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers.

// VERSION 001 ----------------

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

This is a call back or anonymous function:
const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;  
const result = average(numbersAvg);   
console.log(result);

// RESULT --> 6

// VERSION 002 ----------------

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const numbersAvgTwo = [2.44, 6.44, 9.23, 10.56, 7, 4444, 1.4444444, 9.99999];

// STEP 1 - RECUPERAMOS UNA FUNCIÓN QUE HABÍAMOS CREADO ANTERIORMENTE:
const sumNumbers = (numbersArray) => {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];}
  return sum;
};
console.log(sumNumbers(numbersAvg)); // RESULT --> 48

console.log(sumNumbers(numbersAvgTwo)); // RESULT --> 4491.1144344

const averageNumbers = (numbers) => {
  // Usaremos la funcion sumNumbers y usaremos el paramtero para obtener este resultado matematico (STEP 1)
  // NOTA: Este "numbers" dentro de la función siempre hace referencia al parámetro de la misma, no al nombre de la variable que acoge el Array.
  return (sumNumbers(numbers) / numbers.length).toFixed(2);
};
console.log(`The average of this array is: ${averageNumbers(numbersAvg)}`);
// RESULT --> 6.00

console.log(`The average of this complex array is: ${averageNumbers(numbersAvgTwo)}`);
// RESULT --> 561.39


// // Level #4.2: Array of strings --------------------------------------------

// Implement the function named averageWordLength that receives as a single argument an array of words and returns the average length of the words:

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

const averageWordLengthUsingReduce = (arr) => {
  // return arr.join("") // RESULT --> seatcorrespondlinenmotifholesmellsmartchaosfuelpalace
  return arr.join("").length / arr.length
};

console.log(averageWordLengthUsingReduce(wordsArr));

// // // RESULT --> 5.3


// Bonus - Iteration #4.3 ---------------------------------------------

// Create function avg(arr) that receives any mixed array and calculates the average. Consider as a mixed array an array filled with numbers and/or strings and/or booleans.The non-numerical values should be counted as follows:
// Booleans: true counts as 1 and false counts as 0.
// Strings: use the string length as the numeric value. 

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

const sum = (arrayArgument) => {
  let mixedSum = 0;
  for (let i = 0; i < arrayArgument.length; i++) {
    if (typeof arrayArgument[i] === "string") {
      let str = arrayArgument[i].split("");
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

// RESULT --> 57


// -------------------------------------------------------------------------


// // Iteration #5: Unique arrays 

// Take the following array, remove the duplicates, and return a new array. You are more than likely going to want to check out the Array methods indexOf and includes.Do this in the form of a function uniquifyArray that receives an array of words as an argument.

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

function uniquifyArray(wordsUni) {
  if (wordsUni.length === 0) return null;

  let cleanWordsUni = [];

  wordsUni.forEach((element) => {
    if (!cleanWordsUni.includes(element)) {
      cleanWordsUni.push(element);
    }
  });
  return cleanWordsUni;
}

console.log(uniquifyArray(wordsUnique));

// RESULT --> ['crab', 'poison', 'contagious', 'simple', 'bring', 'sharp', 'playground', 'communion']


// -------------------------------------------------------------------------


// Iteration #6: Find elements

// Let's create a simple array search. Declare a function named doesWordExist that will take in an array of words as one argument, and a word to search for as the other. Return true if the word exists in the array, otherwise, return false.

// VERSION ESTER ----------------

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

console.log(wordsFind.includes("machine")); //TRUE
console.log(wordsFind.includes("coffee")); //FALSE


// VERSION DIEGO ----------------

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arraySearch, wordSearch) {
  if (arraySearch.length === 0) return null;

  if (arraySearch.includes(wordSearch)) {
    return true;
  } else {
    return false;
  }
};

console.log(doesWordExist(wordsFind)); // FALSE because we are not defining any word, there is an empty space
console.log(doesWordExist(wordsFind, "eating")); // TRUE
console.log(doesWordExist(wordsFind, "coffee")); // FALSE because this word does not exist inside the array (wordsFind)

// // NOTE: REMEMBER TO USE "" WHEN SEARCHING FOR A STRING


// -------------------------------------------------------------------------


// Iteration #7: Count repetition

// Declare a function named howManyTimes that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.

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

// // The reduce() method applies the defined function to each element of the array and passes the result of each iteration to the next iteration. To count the duplicates using the reduce() method, Invoke the reduce method in the array. During each iteration, increment the element count if the element already exists. Else, initialise the element count to 1. Use this method when you want to count the duplicates in an array in JavaScript using the ES6 method.

// VERSION ESTER ----------------

let howManyTimes = wordsCount.reduce((count, item) => 
(count[item] = count[item] + 1 || 1, count), {});

console.log(howManyTimes);

// RESULT --> 
// disobedience: 1
// eating: 1
// machine: 1
// matter: 4
// starting: 1
// subset: 1
// trouble: 1
// truth: 1

// ANOTHER EXAMPLE ----------------

const myArray = ['a', 'b', 'c', 'c', 'b', 'd'];

let elementCounts = {};
myArray.forEach(element => {elementCounts[element] = (elementCounts[element] || 0) + 1;});
console.log(elementCounts);

// RESULT --> {a: 1, b: 2, c: 2, d: 1}

// VERSION DIEGO ----------------

function howManyTimes(arrayToCount, wordToCount) {
  let count = 0;
  if (arrayToCount.length === 0) return 0;

  arrayToCount.forEach((element) => {
    if (element === wordToCount) {
      count++;
    }
  });

  return count;
}

console.log(howManyTimes(wordsCount)); // 0 because we are not asking for any word
console.log(howManyTimes(wordsCount, "truth")); // 1 because the wort "truth" appearces one time
console.log(howManyTimes(wordsCount, "matter")); // 4 because the word "matter" appearces 4 times


// -------------------------------------------------------------------------

// Iteration #8: Bonus

// Declare a function named greatestProduct(matrix) to find it in the 20×20 grid below!

// Bonus - Iteration #8.2: Product of diagonals
// Following the logic you've used in iteration #8, declare a function called greatestProductOfDiagonals(matrix). It takes a matrix as a parameter and returns the greatest product of any four values laid out diagonally, in either direction.


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

function greatestProduct(matrix) {

  let product = 0;
// The greatest product of any four values
  for (i = 0; i < matrix.length - 4; i++) {
    for (j = 0; i < matrix[i].length - 4; i++) {
      //Horizontal Product
      let productTempH =
        matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
      if (productTempH > product) {
        product = productTempH;
      }

      //Vertical Product
      productTempV =
        matrix[j][i] * matrix[j][i + 1] * matrix[j][i + 2] * matrix[j][i + 3];
      if (productTempV > product) {
        product = productTempV;
      }
    }
  }

  return product;
}
console.log(greatestProduct(matrix));
// RESULT --> 18741888

// -------------------------------------------------------------------------


// // The following is required to make unit tests work.
// /* Environment setup. Do not modify the below code. */
// if (typeof module !== 'undefined') {
//   module.exports = {
//     maxOfTwoNumbers,
//     findLongestWord,
//     sumNumbers,
//     sum,
//     averageNumbers,
//     averageWordLength,
//     avg,
//     uniquifyArray,
//     doesWordExist,
//     howManyTimes,
//     greatestProduct
//   };
// }
