export function findUniqueGenres(genres) {

    const uniqueGenres = [];

    genres.forEach(movieGenres => {
        movieGenres.forEach(genre => {
            if(!uniqueGenres.includes(genre)){
                uniqueGenres.push(genre)
            }
        });
    });

    return uniqueGenres;

}