export function findByActorNameAndGenre(allMovies, allActors, actorName, genre) {
const actor = allActors.find(actor => actor.name === actorName);
if(!actor){
    return [];
}

const matchingMovies = allMovies.filter(movie => movie.actor_ids.includes(actor.id) && movie.genres.includes(genre));

return matchingMovies.map(movie => movie.title);

}