// fetch a complete Search object from TMDB which contains an array of Movie objects
export const fetchResults = () => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=4d607e131c52e3c7b3f49a1eed738529&language=en-US&page=1`;
  return fetch(url)
    .then(response => {
      if(response.status >= 400) {
        throw(new Error('Error fetching search results'))
      } else {
        return response.json()
      }
    })
}

// // Fetch single movie object by specific movie title
// export const fetchMovie = (title) => {
//   const url = `http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`;
//   return fetch(url)
//     .then(response => {
//       if(response.status >= 400) {
//         throw(new Error('Error fetching movies'))
//       } else {
//         return response.json()
//       }
//     })
// }
