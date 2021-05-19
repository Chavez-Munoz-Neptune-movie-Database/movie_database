// Read movies in database
fetch('https://beneficial-calm-rat.glitch.me/movies', patchOptions).then(getMovies);

let readOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

$("#displayMovies").click(() => {
    let inputVal = $("#id-to-display").val();
    fetch(`https://beneficial-calm-rat.glitch.me/movies${inputVal}`, readOptions)
        .then(getMovies);
});

// Add movie to database
$("#addmovie").click(() => {
    fetch('https://beneficial-calm-rat.glitch.me/movies', postOptions)
        .then(getMovies);
    fetch('https://beneficial-calm-rat.glitch.me/movies')
        .then(resp => resp.json())
        .then(movies => {
            for (let movie of movies) {
                if (movie.title !== newMovie.title) {
                    fetch('https://beneficial-calm-rat.glitch.me/movies', postOptions)
                        .then(getMovies);
                } else {
                    alert("That Movies is already in the database!");
                    break;
                }
            }
        })
});

// Delete Movie from database
fetch('https://beneficial-calm-rat.glitch.me/movies.', patchOptions).then(getMovies);

let deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    }
};

$("#deleteMovie").click(() => {
    let inputVal = $("#id-to-delete").val();
    fetch(`https://beneficial-calm-rat.glitch.me/movies.${inputVal}`, deleteOptions)
        .then(getMovies);
});



// Update Movie in database
fetch('https://beneficial-calm-rat.glitch.me/movies.', patchOptions).then(getMovies);

let updateOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    }
};

$("#updateMovies").click(() => {
    let inputVal = $("#id-to-update").val();
    fetch(`https://beneficial-calm-rat.glitch.me/movies.${inputVal}`, updateOptions)
        .then(getMovies);
});


// View specific Movie
fetch('https://beneficial-calm-rat.glitch.me/movies.', patchOptions).then(getMovies);

let viewMovie = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

$("#searchMovie").click(() => {
    let inputVal = $("#id-to-existing").val();
    fetch(`https://beneficial-calm-rat.glitch.me/movies.${inputVal}`,viewMovie)
        .then(getMovies);
})


