import React, { Component } from 'react'
import MovieRow from './MovieRow'

const movieCategories = [
  {title: 'My List'},
  {title: 'Popular on Netflix'},
  {title: 'Continue watching'},
]

class Home extends Component {
  render() {
    return (
      <div>
        {movieCategories.map(movie => <MovieRow title={movie.title} />)}
      </div>
    )
  }
}

export default Home
