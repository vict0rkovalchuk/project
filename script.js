"use strict";

const numberOfFilms = +prompt("Number of watched movies", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a1 = prompt("Last watched movie", ""),
  a2 = prompt("How much do you rate it?", ""),
  a3 = prompt("Last watched movie", ""),
  a4 = prompt("How much do you rate it?", "");

personalMovieDB.movies[a1] = a2;
personalMovieDB.movies[a3] = a4;
//movies.a1
//movies.a3
console.log(personalMovieDB);
