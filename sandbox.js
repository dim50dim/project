//"use strict";
const numberOfFilms = +prompt('How manu movies did you watch?', '');

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false,
};

const a = prompt('One of the latest movie,you have watched?', ''),
       b = prompt('Which score do you get?', ''),
       c = prompt('One of the latest movie,you have watched?', ''),
       d = prompt('Which score do you get?', '');

       personalMovieDB.movies[a] = b;
       personalMovieDB.movies[c] = d;

       console.log(personalMovieDB);