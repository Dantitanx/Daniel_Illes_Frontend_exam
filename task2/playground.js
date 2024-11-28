import { findUniqueGenres } from "./task.js";

const exampleGenres = [
  ["Sci-Fi", "Drama"],
  ["Sci-Fi", "Action", "Action"],
  ["Comedy", "Drama", "Thriller", "Crime"]
];

const result = findUniqueGenres(exampleGenres);
console.log(result);