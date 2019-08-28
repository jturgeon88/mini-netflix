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
        <h2 className="movie-row-title">{category.title}</h2>
        <div className="movie-row">{this.state.movies.map(movie => <MovieTile movie={movie} />)}</div>
      </div>
    )
  }
}

export default MovieRow
