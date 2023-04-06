 "use strict";

 //  let nymberOfFilms;

 //  function start() {
 //      nymberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

 //      while (nymberOfFilms == '' || nymberOfFilms == null || isNaN(nymberOfFilms)) {
 //          nymberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
 //      }

 //  }
 //  start();
 //  const personaMovieDB = {
 //      count: nymberOfFilms,
 //      movies: {},
 //      actors: {},
 //      genres: [],
 //      privat: false
 //  };

 //  function showMyDB(hidden) {
 //      if (!hidden) {
 //          console.log(personaMovieDB);
 //      }
 //  }
 //  showMyDB(personaMovieDB.privat);

 //  function writeYourGenres() {
 //      for (let i = 0; i < 3; i++) {
 //          const quest = prompt(`Ваш любимый жанр под номером ${i+1}`, ``);
 //          personaMovieDB.genres[i] = quest;
 //      }
 //  }

 //  function rememberMyFilms() {

 //      for (let i = 0; i < 2; i++) {
 //          let lastSeenFilm = prompt('Один из последних просмотренных фильмов', '');
 //          let scoreLastSeenFilm = +prompt('На сколько оцените его ?', '');

 //          if (lastSeenFilm != '' && scoreLastSeenFilm != '' && lastSeenFilm != null && scoreLastSeenFilm != null && lastSeenFilm.length < 50) {
 //              personaMovieDB.movies[lastSeenFilm] = scoreLastSeenFilm;
 //              console.log('done');
 //          } else {
 //              i--;
 //              console.log(`error ${i}`);
 //          }

 //      }
 //  }

 //  rememberMyFilms();

 //  function detectPersonaLevel() {
 //      if (personaMovieDB.count < 10) {
 //          alert('Просмотренно довольно мало фильмов');
 //      } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
 //          alert('Вы классический зритель');
 //      } else if (personaMovieDB.count > 30) {
 //          alert('Вы киноман');
 //      } else {
 //          alert('Произошал ошибка!');
 //      }
 //  }

 //  detectPersonaLevel();





 //  function getTimeFromMinutes(min) {
 //      if (typeof (min) !== 'number' || !Number.isInteger(min) || min < 0) {
 //          return 'Ошибка, проверьте данные';
 //      } else {
 //          let hours = Math.trunc(min / 60);
 //          let minute = min % 60;
 //          if (hours >= 2 && hours <= 4) {
 //              return `Это ${hours} часа и ${minute} минут `;
 //          } else if (hours >= 5 && hours <= 10) {
 //              return `Это ${hours} часов и ${minute} минут `;
 //          } else if (hours === 1) {
 //              return `Это ${hours} час и ${minute} минут `;
 //          }
 //      }

 //  }

 //  function getTimeFromMinutes(min) {
 //      if (typeof (min) !== 'number' || !Number.isInteger(min) || min < 0) {
 //          return 'Ошибка, проверьте данные';
 //      }

 //      let hours = Math.trunc(min / 60);
 //      let minute = min % 60;
 //      let str = '';

 //      switch (hours) {
 //          case 0:
 //              str = `часов`;
 //              break;
 //          case 1:
 //              str = `час`;
 //              break;
 //          case 2:
 //              str = `часа`;
 //              break;
 //          case 3:
 //              str = `часа`;
 //              break;
 //          case 4:
 //              str = `часа`;
 //              break;
 //          default:
 //              str = 'часов';
 //              break;
 //      }
 //      return `Это ${hours} ${str} и ${minute} минут `;

 //  }


 //  function findMaxNumber(a, b, c, d) {
 //      if (typeof (a) !== 'number' || typeof (b) !== 'number' || typeof (c) !== 'number' || typeof (d) !== 'number') {
 //          return 0;
 //      } else {
 //          return Math.max(a, b, c, d);
 //      }

 //  }

 //  console.log(findMaxNumber(3, 1, 45));

 //  function fib(num) {
 //      if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
 //          return "";
 //      }
 //      let result = '';
 //      let first = 0;
 //      let second = 1;

 //      for (let i = 0; i < num; i++) {
 //          if (i + 1 === num) {
 //              result += `${first}`;
 //          } else {
 //              result += `${first} `;
 //          }

 //          let third = first + second;
 //          first = second;
 //          second = third;
 //      }
 //      return result;
 //  }

 //  console.log(fib(5));





 //  const obj = {
 //      a: 1024,
 //      b: 2080,
 //      colors: {
 //          bg: 'red',
 //          border: 'black'
 //      }
 //  };


 //  obj.alt = 5;

 //  console.dir(obj);






 const str = prompt('Введите счета в USD через запятую', '');
 const changeToUSD = str.split(", ");
 const USD = 39;
 let newStr = changeToUSD.forEach(function (item, i) {
     alert(`Счет под индексом ${i} в долларах будет ${item*USD}`);
 });

 newStr.join(';');

 