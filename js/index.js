 "use strict";

 let nymberOfFilms;

 function start() {
     nymberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

     while (nymberOfFilms == '' || nymberOfFilms == null || isNaN(nymberOfFilms)) {
         nymberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
     }

 }
 start();
 const personaMovieDB = {
     count: nymberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
 };

 function showMyDB(hidden) {
     if (!hidden) {
         console.log(personaMovieDB);
     }
 }
 showMyDB(personaMovieDB.privat);

 function writeYourGenres() {
     for (let i = 0; i < 3; i++) {
         const quest = prompt(`Ваш любимый жанр под номером ${i+1}`, ``);
         personaMovieDB.genres[i] = quest;
     }
 }

 function rememberMyFilms() {

     for (let i = 0; i < 2; i++) {
         let lastSeenFilm = prompt('Один из последних просмотренных фильмов', '');
         let scoreLastSeenFilm = +prompt('На сколько оцените его ?', '');

         if (lastSeenFilm != '' && scoreLastSeenFilm != '' && lastSeenFilm != null && scoreLastSeenFilm != null && lastSeenFilm.length < 50) {
             personaMovieDB.movies[lastSeenFilm] = scoreLastSeenFilm;
             console.log('done');
         } else {
             i--;
             console.log(`error ${i}`);
         }

     }
 }

 rememberMyFilms();

 function detectPersonaLevel() {
     if (personaMovieDB.count < 10) {
         alert('Просмотренно довольно мало фильмов');
     } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
         alert('Вы классический зритель');
     } else if (personaMovieDB.count > 30) {
         alert('Вы киноман');
     } else {
         alert('Произошал ошибка!');
     }
 }

 detectPersonaLevel();