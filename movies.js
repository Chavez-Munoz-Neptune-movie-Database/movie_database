// Adds movie to the database
$("#addmovie").click(() => {
    fetch('https://beneficial-calm-rat.glitch.me/movies.', postOptions)
        .then(getMovies);
    fetch('https://beneficial-calm-rat.glitch.me/movies.')
        .then(resp => resp.json())
        .then(movies => {
            for (let movie of movies) {
                if (movie.title !== newMovie.title) {
                    fetch('https://beneficial-calm-rat.glitch.me/movies.', postOptions)
                        .then(getMovies);
                } else {
                    alert("That Movies is already in the database!");
                    break;
                }
            }
        })

});