$.ajax({
    url: 'http://www.omdbapi.com/?apikey=c1b3655d&s=avengers',
    success: (data) => {
        let card = '';
        const movies = data.Search;

        movies.forEach((DataMovie) => {
            card += `
            <div class="col-md-6 col-sm-12 col-lg-4 d-flex justify-content-center p-4">
                <div class="card h-100 w-100">
                    <img src="${DataMovie.Poster}" class="card-img-top" alt="${DataMovie.Title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${DataMovie.Title}</h5>
                        <p class="card-text">Tahun: ${DataMovie.Year}</p>
                        <button class="btn btn-primary mt-auto show-modal" 
                                data-bs-toggle="modal" 
                                data-bs-target="#MovieDetailModal"
                                data-title="${DataMovie.Title}"
                                data-year="${DataMovie.Year}"
                                data-poster="${DataMovie.Poster}">
                            Selengkapnya
                        </button>
                    </div>
                </div>
            </div>`;
        });

        $(".movies_container").html(card);
        console.log(movies);
    },
    error: (gagal) => {
        console.log(gagal.responseText);
    }
});
