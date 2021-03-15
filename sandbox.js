"use strict";


const numberOfFilms = +prompt ('How manu movies have you watched?', '');

const personalMovieDB = {
       count: numberOfFilms,
       movies: {},
       actors: {},
       genres: [],
       privat: false,
};

      for ( let i = 0; i < 2; i++) {
             
      const a = prompt('one of latest movie?', ''),
            b = prompt('Can you score it?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
              personalMovieDB.movies[a] = b;
              console.log('done');
            } else {
                   console.log('errrorr');
                   i--;
            }

         
      }

      if ( personalMovieDB.count < 10) {
             console.log('You have watched a lot of movies');
      }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
         console.log('You are a great watcher');
      }else if ( personalMovieDB >= 30) {
             console.log('you are good');
      }else{
             console.log('there is error');
      }
      console.log(personalMovieDB);