"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Number of watched movies", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Number of watched movies", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a1 = prompt("Last watched movie", ""),
      a2 = prompt("How much do you rate it?", "");

    if (a1 != null && a2 != null && a1 != "" && a2 != "" && a1.length < 50) {
      personalMovieDB.movies[a1] = a2;
      console.log("All right");
    } else {
      console.log("Error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Very few movies have been watched");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic spectator");
  } else if (personalMovieDB.count >= 30) {
    console.log("You are a movie fan");
  } else {
    console.log("An error has occurred");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Your favorite genre is numbered ${i}`
    );
  }
}

writeYourGenres();
