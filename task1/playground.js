import {actors, movies} from './data.js';
import { findByActorNameAndGenre } from './task.js';

const result = findByActorNameAndGenre(movies, actors, 'Leonardo DiCaprio', 'Sci-Fi');

console.log(result);