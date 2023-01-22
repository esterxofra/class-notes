// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// VERSION 001- map / filter / indexOf Methods ----------------

// Este movies hace referencia a el parámetro de la función
function getAllDirectors(movies) {
    //El movies de la array functions hace referencia al parámetro de la array function. Mapiamos el array de movies para sacar cada director del array.
    const directorsList = movies.map((movie) => movie.director)
    //    Eliminamos los directores repetidos con filter
    let directorsFiltered = directorsList.filter((director, index) => 
     // Pasamos dos parametros: uno busca el director y el otro la posición de cada uno de estos directores (indice)
    // filter((element, index, array) => { /* … */ })
    directorsList.indexOf(director) === index);
   
    // .map --> method creates a new array populated with the results of calling a provided function on every element in the calling array.
    // .filter --> method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
    // indexOf --> retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.


    return directorsFiltered;
};

console.log(getAllDirectors(movies));

// VERSION 002 [...new Set ()]----------------


function getAllDirectors(movies) {
  
    const directorsList = movies.map((movie) => movie.director)
    
    let directorsFilteresAlt = [... new Set(directorsList)];
   
    return directorsFilteresAlt;
};

console.log(getAllDirectors(movies));

// -------------------------------------------------------------------

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
 
    const stevenDramaFilteredMovies = movies.filter((movie) => {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    })
    return stevenDramaFilteredMovies.length;
}

console.log(howManyMovies(movies)); 

// RESULT --> 4

// -------------------------------------------------------------------

// Iteration 3: All scores average - Get the average of all scores with 2 decimals. 
// Utilizar el método reduce para calcular la puntuación total de todas las películas en el array de entrada (películas).
// Utilizar el método toFixed para dar formato a la puntuación promedio a 2 puntos decimales

function scoresAverage(movies) {

    if (movies.length === 0) return 0;

    const totalScore = movies.reduce((accumulator, currentValue) => { 
        if (currentValue.score){
            return accumulator + currentValue.score
        }
        else {
            return accumulator
        }
    }, 0);

    const averageScoreString = (totalScore / movies.length).toFixed (2);
    return Number(averageScoreString);

};
console.log(scoresAverage(movies));

// RESULT --> 8.31

// -------------------------------------------------------------------

// Iteration 4: Drama movies - Get the average of Drama Movies
// Utilizar el método filter para crear un nuevo array (dramaMoviesArray) que solo incluya películas del género “drama”
// Pasar el dramaMoviesArray a la función scoresAverage para encontrar la puntuación promedio de las películas de drama

function dramaMoviesScore(movies) {

    if (movies.length === 0) return 0;

    const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));

    // Hemos utilizado la función del apartado 3 para calcular el average pero en lugar de pasarle como parámetro el array de movies, le pasamos el array de películas de drama.
    const averageDramaScores = scoresAverage (dramaMovies);

    return averageDramaScores;

};
console.log(dramaMoviesScore(movies));

// RESULT --> 8.32

// -------------------------------------------------------------------

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// Utilizar el método sort para ordenar el array de entrada (películas) por año en orden ascendente
// Hacer una copia del array antes de ordenar para evitar modificar el array original

function orderByYear (movies){

    const movieArrayCopy = movies.map ((movie) => movie);

    movieArrayCopy.sort((movieA, movieB) => {
        if(movieA.year > movieB.year) return movieA.year - movieB.year;
        if(movieA.year < movieB.year) return movieA.year - movieB.year;
        else return movieA.title.localeCompare(movieB.title);
    });
return movieArrayCopy;
};

console.log(orderByYear(movies));

// -------------------------------------------------------------------

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// Utilizar el método map para crear un nuevo array de títulos de películas del array de entrada (películas)
// Utilizar el método sort para ordenar el nuevo array alfabéticamente
// Utilizar el método slice para devolver los primeros 20 títulos del array ordenado.

const orderAlphabetically = (movies) => {
    return movies
      .map((movie) => movie.title) // mappeamos cada pocision del array
      .sort() // usamos este metodo para ordenar alfabeticamente, esto automatico por eso usamos el metodo.
      .slice(0, 20); // cortamos desde la position 0 hasta la 20 - 20 pelis
  };

  console.table(orderAlphabetically(movies));

//   RESULT -->
//   0: "12 Angry Men"
//   1: "12 Years a Slave"
//   2: "2001: A Space Odyssey"
//   3: "3 Idiots"
//   4: "8½"
//   5: "A Beautiful Mind"
//   6: "A Clockwork Orange"
//   7: "A Wednesday"
//   8: "Ah-ga-ssi"
//   9: "Alien"
//   10: "Aliens"
//   11: "All About Eve"
//   12: "Amadeus"
//   13: "American Beauty"
//   14: "American History X"
//   15: "Amores perros"
//   16: "Andrey Rublev"
//   17: "Annie Hall"
//   18: "Apocalypse Now"
//   19: "Babam ve Oglum"
//   length: 20


// -------------------------------------------------------------------

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// Utilizar el método split para separar la palabra “min” de minutos y poder operar con los números.
// Usar el método Number() para que el split devuelva un número

// EXAMPLE -->  duration: '2h 55min',

// Part 001
const convertHours = (hourString) => {
    let calculateHour = hourString.split("h");
    return calculateHour[0] * 60;
  };
// Part 002
  const convertMinutes = (minuteString) => {
    let calculateMinutes = minuteString.split("min");
    return Number(calculateMinutes[0]);
  };
// Part 003
  const convertDuration = (duration) => {
    let timePieces = duration.split(" ");
  
    let minutes = timePieces.reduce((sum, onePiece) => {
      if (onePiece.includes("h")) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);
  
    return minutes;
  };
// Part 004
  const turnHoursToMinutes = (movies) => {
    let newCentArray = movies.map((movie) => {
      let newMovie = {};
      newMovie.title = movie.title;
      newMovie.year = movie.year;
      newMovie.director = movie.director;
      newMovie.duration = convertDuration(movie.duration);
      newMovie.genre = movie.genre;
      newMovie.rate = movie.rate;
  
      return newMovie;
    });
  
    return newCentArray;
  };

  console.table(turnHoursToMinutes(movies));

// -------------------------------------------------------------------

// BONUS - Iteration 8: Best yearly score average - Best yearly score average. We always hear so much about classic movies, but we want to know which year has the best average score, so we can declare the BEST YEAR FOR CINEMA officially! Go ahead and find which year have the best average score for the movies that were released in that year! Create bestYearAvg() function that receives an array of movies and gives us an answer to which year was the best year for cinema and what was its average score.
// Itera con un bucle foreach sobre el array
// ¡Aprovecha las funciones que ya has creado para usarlas otra vez aquí!

const bestYearAvg = (movies) => {
    if (!movies.length) return null;
  
    let masterObject = {};
  
    movies.forEach((movie) => {
      if (!masterObject[movie.year]) {
        masterObject[movie.year] = [movie];
      } else {
        masterObject[movie.year].push(movie);
      }
    });
  
    let highest = 0;
    let theActualYear;
    for (let theYear in masterObject) {
      if (scoresAverage(masterObject[theYear]) > highest) {
        highest = scoresAverage(masterObject[theYear]);
        theActualYear = theYear;
      }
    }
    return `The best year was ${theActualYear} with an average score of ${highest}`;
  };
  
  console.log(bestYearAvg(movies));

//   RESULT --> The best year was 1972 with an average score of 9.2
