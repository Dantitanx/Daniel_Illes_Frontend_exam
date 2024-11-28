import { describe, it } from "node:test";
import { deepEqual } from "node:assert/strict";
import { findUniqueGenres } from "./task.js"; 

describe("findUniqueGenres Tests", () => {

    it("It should return the genres, duplicated genres within an array and between arrays", () => {
        const genres = [
            ["Sci-Fi", "Drama"],
            ["Sci-Fi", "Action", "Action"],
            ["Comedy", "Drama", "Thriller", "Crime"]
        ];
        const result = findUniqueGenres(genres);
        const expected = ["Sci-Fi", "Drama", "Action", "Comedy", "Thriller", "Crime"];

        deepEqual(result.sort(), expected.sort()); 
    });

    it("It should return an empty array when the input is an empty array", () => {
        const genres = [];
        const result = findUniqueGenres(genres);
        const expected = [];

        deepEqual(result, expected);
    });

    it("It should handle duplcates within the same sub-array", () => {
        const genres = [["Horror", "Horror", "Thriller"]];
        const result = findUniqueGenres(genres);
        const expected = ["Horror", "Thriller"];

        deepEqual(result.sort(), expected.sort());
    });

    it("It should return unique genres even if they appear in different sub-arrays", () => {
        const genres = [
            ["Rock", "Jazz"],
            ["Jazz", "Classical", "Blues"],
            ["Pop", "Rock"]
        ];
        const result = findUniqueGenres(genres);
        const expected = ["Rock", "Jazz", "Classical", "Blues", "Pop"];

        deepEqual(result.sort(), expected.sort());
    });

    it("It should return unique genres with case sensitivity", () => {
        const genres = [
            ["Pop", "Jazz"],
            ["pop", "Jazz", "Rock"],
            ["Rock", "classical"]
        ];
        const result = findUniqueGenres(genres);
        const expected = ["Pop", "Jazz", "pop", "Rock", "classical"];

        deepEqual(result.sort(), expected.sort());
    });
});
