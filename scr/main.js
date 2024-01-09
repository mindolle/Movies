const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2UwZjVkYjAyY2Y4ZjE0NWZiNWMwMGU3NGY2N2NjMSIsInN1YiI6IjY1OTUxYmYwZDdhNzBhMTFjNzY5M2JhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LTKOQA-TTttftHzF9KVG1gnBFmhCHcEqGJpfWotKnDs'
    }
};

const imageUrl = "https://image.tmdb.org/t/p/w500";

// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


const getData = async () => {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const data = await res.json();
        console.log(data);

        for (let i = 0; i < data.results.length; i++) {
            const card =
            `<li class="Movie-Item" id="${data.results[i].id}">
                <img class="Movie-Poster" src="${imageUrl}${data.results[i].poster_path}" alt="${data.results[i].title}" onclick="alert('영화 ID : ${data.results[i].id}')">
                <h2 class="Movie-title">${data.results[i].title}</h2>
                <p class="Movie-desc">${data.results[i].overview}</p>
                <p class="Movie-rating">평점 : ${data.results[i].vote_average}</p>
            </li>`

            let cardlist = document.querySelector("#cardList");
            cardlist.insertAdjacentHTML('beforeend', card);
        }
    } catch (error) {
        console.log("error");
    }
}

getData();