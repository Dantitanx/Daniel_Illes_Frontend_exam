import { describe, it } from "node:test";
import { deepEqual } from "node:assert/strict";

import { findByActorNameAndGenre } from "./task.js";

function returnMovies() {
  return [
    {
      "title": "The Prestige",
      "genres": ["Mystery", "Drama", "Thriller"],
      "actor_ids": [1, 2, 5]
    },
    {
      "title": "Mad Max: Fury Road",
      "genres": ["Action", "Adventure", "Sci-Fi"],
      "actor_ids": [3, 4, 6]
    },
    {
      "title": "Gravity",
      "genres": ["Sci-Fi", "Thriller", "Drama"],
      "actor_ids": [7, 8]
    },
    {
      "title": "Gladiator",
      "genres": ["Action", "Drama", "Adventure"],
      "actor_ids": [9, 3]
    },
    {
      "title": "The Grand Budapest Hotel",
      "genres": ["Comedy", "Drama", "Adventure"],
      "actor_ids": [10, 6, 1]
    }
  ];
} 
  
function returnActors() {
  return [
    {
      "id": 1,
      "name": "Hugh Jackman"
    },
    {
      "id": 2,
      "name": "Christian Bale"
    },
    {
      "id": 3,
      "name": "Tom Hardy"
    },
    {
      "id": 4,
      "name": "Charlize Theron"
    },
    {
      "id": 5,
      "name": "Scarlett Johansson"
    },
    {
      "id": 6,
      "name": "Ralph Fiennes"
    },
    {
      "id": 7,
      "name": "Sandra Bullock"
    },
    {
      "id": 8,
      "name": "George Clooney"
    },
    {
      "id": 9,
      "name": "Russell Crowe"
    },
    {
      "id": 10,
      "name": "Tilda Swinton"
    }
  ]
}
  

describe("findByActorNameAndGenre", () => { 
    it("It should return the proper result, if the actor name and the genre exists.", () => {
        const result = findByActorNameAndGenre(returnMovies(), returnActors(), "Hugh Jackman", "Thriller")
        const expected = ["The Prestige"]

        deepEqual(result, expected)
    })

    it("It should be able when an incorrect or not used genre is passed.", () => {
        const result = findByActorNameAndGenre(returnMovies(), returnActors(), "Hugh Jackman", "Comedyy");
        const expected = [];

        deepEqual(result, expected);
    });

    it("It should return the proper result, if the actor name and the genre exists. (2)", () => {
        const result = findByActorNameAndGenre(returnMovies(), returnActors(), "Charlize Theron", "Action");
        const expected = ["Mad Max: Fury Road"];

        deepEqual(result, expected);
    });


    it("It should return the proper result, if the actor name and the genre exists. (3)", () => {
      const result = findByActorNameAndGenre(returnMovies(), returnActors(), "Ralph Fiennes", "Drama");
      const expected = ["The Grand Budapest Hotel"];

      deepEqual(result, expected);
  });

    it("It should return the proper result, if the actor name and the genre exists. (4)", () => {
        const result = findByActorNameAndGenre(returnMovies(), returnActors(), "Sandra Bullock", "Sci-Fi");
        const expected = ["Gravity"];

        deepEqual(result, expected);
    });

    it("It should return an empty array if no actor found with the given name.", () => {
      const result = findByActorNameAndGenre(returnMovies(), returnActors(), "Hello World!", "Sci-Fi");
      const expected = [];

      deepEqual(result, expected);
    });

    it("It should return multiple movies as multiple moves match the requirements", () => {
      const result = findByActorNameAndGenre(returnMovies(), returnActors(), "Hugh Jackman", "Drama");
      const expected = ["The Prestige", "The Grand Budapest Hotel"];

      deepEqual(result, expected);
    });
    
})