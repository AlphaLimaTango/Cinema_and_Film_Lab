const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.checkAllFilmTitles = function(){
  const allFilmTitles = (film) => {
    return film.title;
  };
  result = this.films.map( allFilmTitles );
  return result;
};

// Cinema.prototype.findFilmByTitle = function(title){
//   let byTitle = this.films.reduce((base, filmTitle) => {
//     if (filmTitle === title) {
//       console.log("film title is",filmTitle);
//       return byTitle;
//     };
//   },);
// };

Cinema.prototype.findFilmByTitle = function (title) {
  const result = this.films.find( (film) => {
    if (film.title === title) {
      return film;
    };
  });
  return result;
};

Cinema.prototype.findFilmByGenre = function (genre) {
  const result = this.films.filter( (film) => {
    if (film.genre === genre) {
      return film;
    };
  });
  return result;
};

Cinema.prototype.isThereFilmsByYear = function (year) {
  const result = this.films.filter( (film) => {
    if (film.year === year){
      return film;
    };
  });
  return result;
};

Cinema.prototype.isItOver = function (length) {
  const result = this.films.filter( (film) => {
    if (film.length >= length){
      return film;
    };
  });
  return result;
};

Cinema.prototype.totalRunningTimes = function () {
  let total = 0
  result = this.films.map( (film) => {
    return total += film.length
  });
  return total;
};

module.exports = Cinema;
