'use strict';
const numberOfFilms = +prompt('How manu films have you watched already?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

      for (let i = 0; i < 2; i++) {
          const a = prompt('One of latest movie have you seen?', ''),
                b = prompt('Can you score it ?', '');

                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                }else{
                    console.log('error');
                    i--;
                }

            
      }

      if (personalMovieDB.count < 10) {
          console.log('you watched not manu films', '');
      }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('you are a great watcher');
      } else if ( personalMovieDB.count >= 30){
          console.log ('you like movies');
      }else {
          console.log('this is an error');
      }
      console.log(personalMovieDB);