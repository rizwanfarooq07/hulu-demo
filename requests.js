const API_KEY = process.env.API_KEY;

const requests = {
  fetchTrending: {
    title: "Trending",
    url: `/discover/movie?api_key=${API_KEY}`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  },
  fetchTvMovie: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10770`,
  },
};

export default requests;

//  `https://api.themoviedb.org/3/discover/movie?api_key=2bc653758a9a5547c90116179c0dc955&language=en-US&with_cast=${names.toString()}`
