# Algorithms 🧮

## Tasks

1. Implement a function according to the specification in the `./task.js`.
2. You can try out your implementation using the `./playground.js`.
3. You can run the tests for this task by issuing the `npm test` command from this directory.

## Specification

Find the unique genres. We have an array of arrays. Each inner array contains an array of strings. 
Each string represent a genre, e.g. "Sci-Fi". Return an array of unique genres across all the arrays.

The genre is case sensitive, so "Sci-Fi" and "sci-fi" counts two different genres.

### Function arguments and return value

```js
function findUniqueGenres(genres)
```

Parameters:

- `genres`: An array of arrays. Each array represents one movie"s genres. One movie"s array contain strings. Duplication is possible in the inner array too. 

Example:

```js
[
  ["Sci-Fi", "Drama", "Action"],
  ["Sci-Fi", "Action", "Action"],
  ["Comedy", "Thriller", "Crime"]
]
```

Returns:

- It returns a list of unique genres. e.g: `["Sci-Fi", "Comedy"]`. The order of the genres in array does not matter.

### Example:

```js
const genres = [
  ["Sci-Fi", "Drama"],
  ["Sci-Fi", "Action", "Action"],
  ["Comedy", "Drama", "Thriller", "Crime"]
]

findUniqueGenres(genres)
```

- It should return `["Sci-Fi", "Drama", "Action", "Comedy", "Thriller", "Crime"]`
- `"Drama"` appears twice in the first and in the 3rd movie. It should be listed once in the result array.  
- `"Action"` appears twice in the same movie, it should be listed once in the result array.