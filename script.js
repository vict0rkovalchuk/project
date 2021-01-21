"use strict";

const numberOfFilms = +prompt("Number of watched movies", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

/*let i = 0;*/

for (let i = 0; i < 2; i++) /*while (i < 2)*/ {
  const a1 = prompt("Last watched movie", ""),
    a2 = prompt("How much do you rate it?", "");
  // i++;

  if (a1 != null && a2 != null && a1 != "" && a2 != "" && a1.length < 50) {
    personalMovieDB.movies[a1] = a2;
    console.log("All right");
  } else {
    console.log("Error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Very few movies have been watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You are a classic spectator");
} else if (personalMovieDB.count >= 30) {
  console.log("You are a movie fan");
} else {
  console.log("An error has occurred");
}

console.log(personalMovieDB);
