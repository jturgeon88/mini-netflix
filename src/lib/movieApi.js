import axios from 'axios'

// fetch the top 20 upcoming movies objects from TMDB
export const fetchUpcoming = () => {
  const axiosOpt = {
    url: '/movie/upcoming?',
    params: {
      queryParams: '&language=en-US&page=1'
    }
  }
  return movieApiRequest(axiosOpt)
}

// Fetch single movie object by specific movie title
export const fetchMovieByTitle = (title) => {
  const axiosOpt = {
    url: '/search/movie?',
    params: {
      queryParams: `&query=${title}`
    }
  }
  return movieApiRequest(axiosOpt)
}

// Helper method for making axios requests
const movieApiRequest = (axiosOpt) => {
  const url = `${axiosOpt.url}api_key=${process.env.API_KEY}`
  return axios({
    method: 'get',
    url: url,
    baseURL: 'https://api.themoviedb.org/3',
    params: axiosOpt.params
  })
    .then(response => {
      if(response.status >= 400) {
        throw(new Error('Error fetching search results'))
      } else {
        return response.data
      }
    })

}
