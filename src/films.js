// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCISE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director == director);
  console.log('EXERCISE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(movies) {
  let totalScore = movies
    .map((movie) => (movie.score ? movie.score : 5))
    .reduce((prev, current) => prev + current);
  let result = parseFloat((totalScore / movies.length).toFixed(2));

  console.log('EXERCISE 3 or 6->', result);
  return result;
}
function moviesAverageOfDirector(array, director) {
  let movies = array.filter((movie) => movie.director == director);
  return moviesAverage(movies);
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let result = array
    .map((movie) => movie.title)
    .sort()
    .splice(0, 20);
  console.log('EXERCISE 4 ->', result);
  return result;
}

// Exercise 5: Order by year, ascending
//Este tuve que buscarlo porque no veia como hacerlo.
//Despues de estudiarlo y repetirlo varias veces lo entendí.
function orderByYear(array) {
  //El metodo sort() cambia el array original, por eso hago una copia con slice.
  let result = array.slice();
  result.sort((movieA, movieB) =>
    movieA.year > movieB.year
      ? 1
      : movieA.year === movieB.year
      ? movieA.title > movieB.title
        ? 1
        : -1
      : -1
  );
  console.log('EXERCISE 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let films = array.filter((movie) => movie.genre.includes(genre));

  return moviesAverage(films);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
