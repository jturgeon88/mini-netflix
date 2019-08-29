import React, { Component } from 'react'
import MovieRow from './MovieRow'

const movieCategories = [
  {title: 'My List', url: '/search/movie', searchTitle: 'Jack Reacher', id: 123},
  {title: 'Popular on Netflix', url: '/movie/popular', id: 456},
  {title: 'Upcoming', url: '/movie/upcoming', id: 789},
]

class Home extends Component {
  render() {
    return (
      <div>
        {movieCategories.map((category) => <MovieRow key={category.id} category={category} />)}
      </div>
    )
  }
}

export default Home
