// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((movie) => movie.director);
  console.log('EXERCISE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((movie) => movie.director == director);
  console.log('EXERCISE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(movies) {
  const totalScore = movies
    .map((movie) => (movie.score ? movie.score : 5))
    .reduce((prev, current) => prev + current);
  const result = parseFloat((totalScore / movies.length).toFixed(2));

  console.log('EXERCISE 3 or 6->', result);
  return result;
}
function moviesAverageOfDirector(array, director) {
  const movies = array.filter((movie) => movie.director == director);
  return moviesAverage(movies);
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const result = array
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
  const result = array.slice();
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
  const films = array.filter((movie) => movie.genre.includes(genre));

  return moviesAverage(films);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const timing = array.map((el) => {
    return {
      ...el,
      duration:
        parseInt(el.duration.split(' ')[0]) * 60 +
        parseInt(el.duration.split(' ')[1] || 0)
    };
  });
  return timing;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(year) {
  const result = year
    .sort((movieA, movieB) => (movieA.score < movieB.score ? 1 : -1))
    .slice(0, 1);
  return result;
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
    bestFilmOfYear
  };
}
