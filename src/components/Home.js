import React, { Component } from 'react'
import MovieRow from './MovieRow'

const movieCategories = [
  {title: 'My List', url: '/search/movie', searchTitle: 'Jack Reacher'},
  {title: 'Popular on Netflix', url: '/movie/popular'},
  {title: 'Upcoming', url: '/movie/upcoming'},
]

class Home extends Component {
  render() {
    return (
      <div>
        {movieCategories.map(category => <MovieRow category={category} />)}
      </div>
    )
  }
}

export default Home
