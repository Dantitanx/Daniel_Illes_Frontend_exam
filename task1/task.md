# Working with Data Structures 🗃️

## Tasks

1. Implement a function according to the specification in the `./task.js`.
2. You can try out your implementation using the `./playground.js`. Do not call the function within the `./task.js`.
3. You can run the tests for this task by issuing the `npm test` command from this directory.

## Specification

We have movies and actors. Each actor can act in multiple movies, also the movie has multiple actors.

The movie looks like this:

```json
{
  "title": "Inception",
  "genres": ["Sci-Fi", "Thriller"],
  "actor_ids": [1, 2, 3]
}
```

- The `title` is a string it is the title of the movie.
- The `genres` is a list of strings, list the genres of the movies. 
- The `actor_ids` is a list of numbers. Each number is a reference to an actor ID.

The actor looks like this:

```json
{
  "id": 1,
  "name": "Leonardo DiCaprio"
}
```

- The `id` is a number, the unique identifier of the actor.
- The `name` is a string, it is also unique in the list for now.

### Function arguments and return value

Implement a function where we can search for movie by an actor name and a genre.

```js
function findByActorNameAndGenre(allMovies, allActors, actorName, genre)
```

Parameters:

- `allMovies`: An array of all possible movie objects.
- `allActors`: An array of all possible actor objects.
- `actorName`: The full name of the actor, case sensitive.
- `genre`: The full string of one genre, case sensitive.

Returns:

- An array of strings, the movie titles.
- If no actor was found with the given name then returns an empty array.
- If there aren't any matches with the actor and genre requirements then returns an empty array.

### Example (based on the example `./data.js`):

```js
findByActorNameAndGenre(actors, movies, 'Leonardo DiCaprio', 'Sci-Fi');
```

- It should return `['Inception', 'Interstellar']`.
- Leonardo DiCaprio is an actor of Inception, Interstellar and Pulp Fiction, according to `./data.js`
- Only Inception and Interstellar has a genre Sci-Fi.

Please note, that `data.js` inaccurate from a real movies point of view. E.g. Leonardo DiCaprio 
did not play neither Interstellar nor Pulp Fiction.