// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Este movies hace referencia a el parámetro de la función
function getAllDirectors(movies) {
//El movies de la array functions hace referencia al parámetro de la array function
    const directorsListRaw = movies.map((movie) => movie.director)
    let directorsFiltered = directorsListRaw.filter((director, index) => 
    directorsListRaw.indexOf(director) === index);

    // .map --> method creates a new array populated with the results of calling a provided function on every element in the calling array.
    // .filter --> method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
    // indexOf -->retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

    // Alternativa:
    // ... new Set --> 
    // let directorsFilteresAlt = [... new Set(directorsRaw)];
    // console.log(directorsFilteresAlt);

    console.log (directorsFiltered);
    return directorsFiltered;

    // console.log(directorsListRaw);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
 
    const filteredMovies = movies.filter((movie) => {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    })

    //console.log(filteredMovies);
    return filteredMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// Utilizar el método reduce para calcular la puntuación total de todas las películas en el array de entrada (películas)
// Utilizar el método toFixed para dar formato a la puntuación promedio a 2 puntos decimales

function scoresAverage(movies) {
    const totalScore = movies.map((puntuation) => puntuation.score)
    console.log(totalScore);

    let sum = totalScore.reduce((a, b) => a + b);
    console.log(sum);

    let avg = parseFloat(sum / totalScore.length);
    console.log(avg);

    let avgTwoDecimals = avg.toFixed(2);

    console.log(Number(avgTwoDecimals));

    return avgTwoDecimals;
}
console.log(scoresAverage);

// PENDING

// Iteration 4: Drama movies - Get the average of Drama Movies
// Utilizar el método filter para crear un nuevo array (dramaMoviesArray) que solo incluya películas del género “drama”
// Pasar el dramaMoviesArray a la función scoresAverage para encontrar la puntuación promedio de las películas de drama

function dramaMoviesScore(movies) {
    let dramaMovies = movies.filter((movies) => {
        return (movies.genre.includes("Drama"));
    });
    // console.log(dramaMovies);

    let scoreDramaMovies = dramaMovies.map((scoreDrama) => scoreDrama.score)

    let totalScoreDramaMovies = scoreDramaMovies.reduce((a, b) => a + b);
    // console.log(totalScoreDramaMovies);

    let aver = totalScoreDramaMovies / scoreDramaMovies.length;
    console.log(aver.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// Utilizar el método sort para ordenar el array de entrada (películas) por año en orden ascendente
// Hacer una copia del array antes de ordenar para evitar modificar el array original
function orderByYear(moviesArray) {

    let ordenedMovies = 

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// Utilizar el método map para crear un nuevo array de títulos de películas del array de entrada (películas)
// Utilizar el método sort para ordenar el nuevo array alfabéticamente
// Utilizar el método slice para devolver los primeros 20 títulos del array ordenado.
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// Utilizar el método split para separar la palabra “min” de minutos y poder operar con los números.
// Usar el método Number() para que el split devuelva un número
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// Itera con un bucle foreach sobre el array
// ¡Aprovecha las funciones que ya has creado para usarlas otra vez aquí!
function bestYearAvg(moviesArray) {}
