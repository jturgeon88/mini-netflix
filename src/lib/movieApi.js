import axios from 'axios'

// fetch an array of movie objects from TMDB based on given url and optional query params
export const fetchMovies = (url, query?) => {
  const axiosOpt = {
    url,
    params: {
      language: 'en-US',
      page: 1,
      query: query
    }
  }
  return movieApiRequest(axiosOpt)
}

// Fetch single movie object by specific movie title
export const fetchMovieByTitle = (title) => {
  const axiosOpt = {
    url: '/search/movie',
    params: {
      query: title
    }
  }
  return movieApiRequest(axiosOpt)
}

// Helper method for making axios requests
const movieApiRequest = (axiosOpt) => {
  let axiosArgs = {
    ...axiosOpt,
    baseURL: 'https://api.themoviedb.org/3'
  }
  axiosArgs.params.api_key = process.env.REACT_APP_API_KEY

  return axios(axiosArgs)
    .then(response => response.data)
}
