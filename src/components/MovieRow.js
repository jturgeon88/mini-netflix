import React, { Component } from 'react'
import '../styles/MovieRow.css'
import MovieTile from './MovieTile'
import { fetchMovies } from '../lib/movieApi';

class MovieRow extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    const { category } = this.props
    this.fetchMovies(() => fetchMovies(category.url, category.searchTitle));
  }

  fetchMovies = (movieFunction) => (
    movieFunction()
    .then(fetchedData => {
      this.setState({ movies: [...fetchedData.results] });
    })
  )

  render() {
    const { category } = this.props
    return (
      <div className="movie-row-container">
        <div>{category.title}</div>
        <div>{this.state.movies.map(movie => <MovieTile movie={movie} />)}</div>
      </div>
    )
  }
}

export default MovieRow
