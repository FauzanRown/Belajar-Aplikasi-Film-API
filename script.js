$.ajax({
    url : 'http://www.omdbapi.com/?apikey=c1b3655d&s=CONJURING',
    success : (data) => {
        console.log(data)
    },
    error : (gagal) => {
        console.log(gagal.responseText);
    }
})