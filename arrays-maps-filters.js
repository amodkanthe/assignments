import { movies } from "./data.js";

let names = movies.map(movie => movie.title);
console.log(names);

let namesAndRatings = movies.map(movie => `${movie.title} - ${movie.imdbRating}`);
console.log(namesAndRatings);

let thrillerMovies = movies.filter(movie => movie.genre === "Thriller");
console.log(thrillerMovies);

let dramaMovies = movies.filter(movie => movie.genre === "Drama");
console.log(dramaMovies);

let actionMovies = movies.filter(movie => movie.genre === "Action");
console.log(actionMovies);

let dramaByChristainBale = movies.filter(movie => movie.genre === "Drama" && movie.actors.includes("Christian Bale"));
console.log(dramaByChristainBale);

let ratingAbove8 = movies.filter(movie => movie.imdbRating > 8);
console.log(ratingAbove8);

let actionByLeonardo = movies.filter(movie => movie.genre === "Action" && movie.actors.includes("Leonardo DiCaprio"));
console.log(actionByLeonardo);


let dramabyChristianBale = movies.filter(movie => movie.genre === "Drama").map(movie => movie.actors.includes("Christian Bale") ? movie : null).filter(movie => movie !== null);
console.log(dramabyChristianBale);

let dramaByTimRobbins = movies.filter(movie => movie.genre === "Drama").map(movie => movie.actors.includes("Tim Robbins") ? movie : null).filter(movie => movie !== null);
console.log(dramaByTimRobbins);
