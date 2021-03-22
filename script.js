"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How manu films have you watched already?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){

        numberOfFilms = +prompt('How manu films have you watched already?', '');
    }
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

 
      function rememberMyFilms() {
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
  
      }  

     rememberMyFilms();

    
function  detectPersonalLevel () {

    if (personalMovieDB.count < 10) {
        console.log('you watched not manu films', '');
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
          console.log('you are a great watcher');
    } else if ( personalMovieDB.count >= 30){
        console.log ('you like movies');
    }else {
        console.log('this is an error');
    }
}
detectPersonalLevel();

function showMyDB (hidden) {
   if (!hidden) {

      console.log(personalMovieDB);
   }
}
      
showMyDB(personalMovieDB.privat);


function writeYourGenres () {
    for (let i = 1; i <= 3; i++){
        
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre ${i}`);
    }
}
writeYourGenres();