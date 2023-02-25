 "use strict";

 let nymberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
 const personaMovieDB = {
     count: nymberOfFilms,
     movies: {},
     actors: {

     },
     genres: [],
     privat: false

 };
 for (let i = 0; i < 2; i++) {
     let lastSeenFilm = prompt('Один из последних просмотренных фильмов', '');
     let scoreLastSeenFilm = +prompt('На сколько оцените его ?', '');
     personaMovieDB.movies[lastSeenFilm] = scoreLastSeenFilm;
 }