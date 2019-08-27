import axios from 'axios'

// fetch a complete Search object from TMDB which contains an array of Movie objects
export const fetchUpcoming = () => {
  const url = urlBuilder('movie/upcoming?', '&language=en-US&page=1')
  return axios.get(url)
    .then(response => {
      if(response.status >= 400) {
        throw(new Error('Error fetching search results'))
      } else {
        return response.data
      }
    })
}

// Fetch single movie object by specific movie title
export const fetchMovieByTitle = (title) => {
  const url = urlBuilder('search/movie?', '&query=Jack+Reacher')
  return axios.get(url)
    .then(response => {
      if(response.status >= 400) {
        throw(new Error('Error fetching movies'))
      } else {
        return response.data
      }
    })
}

const urlBuilder = (path, queryParams?) => {
  const url = `https://api.themoviedb.org/3/${path}api_key=${process.env.API_KEY}`
  return queryParams ? url + queryParams : url
}
