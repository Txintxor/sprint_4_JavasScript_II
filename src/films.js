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
  const numregex = /[0-9]+/g;
  //I don´t really like this for I use map method to many times, didn´t figure out anything simpler
  const timing = array
  //Duration string is divided so hours and minutes are separated
    .map((film) => film.duration.split(' '))
    //Numbers are extracted and put inside an array
    .map((element) => element.map((e) => e.match(numregex)))
    //parsing numbers to int and operating with them
    .map((element) => element.reduce((a, b) => (a * 60) + parseInt(b)));

  //I create this array because if I clone movies array and result array would use same references in the values of the objects so I can´t operate with result without changing it
  const result = [];

// I don´tknow if I´m allowed to use for loop but didn´t find any method that fitted better.
  for (let i = 0; i < array.length; i++) {
    //Useful conditional when duration lacks minutes
    if (typeof timing[i] != 'number') {
      timing[i] = parseInt(timing[i] * 60);
    }

    result[i] = {
      title: array[i].title,
      year: array[i].year,
      director: array[i].director,
      duration: timing[i],
      genre: array[i].genre,
      score: array[i].score
    };
  }

  return result;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(year) {
  const result = year.sort((movieA, movieB) =>
  movieA.score < movieB.score  ? 1 : -1).slice(0,1);
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
    bestFilmOfYear,
  };
}
