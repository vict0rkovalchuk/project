"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    personalMovieDB.count = +prompt("Number of watched movies", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Number of watched movies", "");
    }
  },

  rememberMyFilms: function () {
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
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Very few movies have been watched");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("You are a classic spectator");
    } else if (personalMovieDB.count >= 30) {
      console.log("You are a movie fan");
    } else {
      console.log("An error has occurred");
    }
  },

  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMtDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Your favorite genre is numbered ${i}`);

      if (genre === "" || genre == null) {
        console.log("You entered incorrect data or did not enter it at all");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }

      // let genres = prompt(
      //   `Enter your favorite genres separated by commas`
      // ).toLowerCase();

      // if (genres === "" || genres == null) {
      //   console.log("You entered incorrect data or did not enter it at all");
      //   i--;
      // } else {
      //   personalMovieDB.genres = genres.split(", ");
      //   personalMovieDB.genres.sort();
      // }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favourite genre ${i + 1} - this ${item}`);
    });
  },
};
