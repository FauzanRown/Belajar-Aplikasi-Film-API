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
                        <button 
                            class="btn btn-primary modal-detail-button mt-auto show-modal" 
                            data-bs-toggle="modal" 
                            data-bs-target="#MovieDetailModal"
                            data-imdbid="${DataMovie.imdbID}">
                            Selengkapnya
                        </button>
                    </div>
                </div>
            </div>`;
        });

        $(".movies_container").html(card);

        // ! Event listener untuk tombol detail
        $(".modal-detail-button").on("click", function () {
            const imdbID = $(this).data("imdbid");

            $.ajax({
                url: `http://www.omdbapi.com/?apikey=c1b3655d&i=${imdbID}`,
                success: (datamodal) => {
                    const keteranganModal = `
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${datamodal.Poster}" alt="${datamodal.Title}" class="img-fluid rounded">
                            </div>
                            <div class="col-md-9">
                                <ul class="list-group">
                                    <li class="list-group-item"><strong>Tahun     :</strong> ${datamodal.Released}</li>
                                    <li class="list-group-item"><strong>Durasi    :</strong> ${datamodal.Runtime}</li>
                                    <li class="list-group-item"><strong>Genre     :</strong> ${datamodal.Genre}</li>
                                    <li class="list-group-item"><strong>Aktor     :</strong> ${datamodal.Actors}</li>
                                    <li class="list-group-item"><strong>Deskripsi :</strong> ${datamodal.Plot}</li>
                                </ul>
                            </div>
                        </div>`;

                    // **Perbarui isi modal dengan data yang didapat**
                    $(".modal-body").html(keteranganModal);
                    $(".modal-title").text(datamodal.Title);

                    // **Tampilkan modal setelah datanya siap**
                    $("#MovieDetailModal").modal("show");
                }
            });
        });
    },
    error: (gagal) => {
        console.log(gagal.responseText);
    }
});
