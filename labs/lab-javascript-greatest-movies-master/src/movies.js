// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Este movies hace referencia a el parámetro de la función
function getAllDirectors(movies) {
    //El movies de la array functions hace referencia al parámetro de la array function
    // Función anonima
    // Creamos una nueva array con los directores:
    const directorsList = movies.map((movie) => movie.director)
    //    Eliminamos los directores repetidos con filter
    let directorsFiltered = directorsList.filter((director, index) => 
    directorsList.indexOf(director) === index);
    // Pasamos dos parametros: uno busca el director y el otro la posición de cada uno de estos directores (indice)
    // filter((element, index, array) => { /* … */ })
    
    // .map --> method creates a new array populated with the results of calling a provided function on every element in the calling array.
    // .filter --> method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
    // indexOf -->retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

    // Alternativa:
    // ... new Set --> 
    // let directorsFilteresAlt = [... new Set(directorsRaw)];
    // console.log(directorsFilteresAlt);

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

// Iteration 4: Drama movies - Get the average of Drama Movies
// Utilizar el método filter para crear un nuevo array (dramaMoviesArray) que solo incluya películas del género “drama”
// Pasar el dramaMoviesArray a la función scoresAverage para encontrar la puntuación promedio de las películas de drama

function dramaMoviesScore(movies) {

    if (movies.length === 0) return 0;

    const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));

    // Hemos utilizado la función del apartado 3 para calcular el average REVISAR!!!!
    const averageDramaScores = scoresAverage (dramaMovies);

    return averageDramaScores;

};
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// Utilizar el método sort para ordenar el array de entrada (películas) por año en orden ascendente
// Hacer una copia del array antes de ordenar para evitar modificar el array original

// DIEGO'S SOLUTION --> check sort method

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

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// Utilizar el método map para crear un nuevo array de títulos de películas del array de entrada (películas)
// Utilizar el método sort para ordenar el nuevo array alfabéticamente
// Utilizar el método slice para devolver los primeros 20 títulos del array ordenado.
function orderAlphabetically(movies) {
        return movies
            .map((movie) => movie.title)
            .sort()
            .slice(0, 20);
};
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// Utilizar el método split para separar la palabra “min” de minutos y poder operar con los números.
// Usar el método Number() para que el split devuelva un número
function turnHoursToMinutes(movies) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// Itera con un bucle foreach sobre el array
// ¡Aprovecha las funciones que ya has creado para usarlas otra vez aquí!
function bestYearAvg(movies) {}
