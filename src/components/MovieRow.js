import React, { Component } from 'react'
import '../styles/MovieRow.css'
import MovieTile from './MovieTile'
import { fetchUpcoming } from '../lib/movieApi';

class MovieRow extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => (
    fetchUpcoming()
      .then(fetchedData => {
        this.setState({ movies: [...fetchedData.results] });
      })
  )

  render() {
    return (
      <div className="movie-row-container">
        <div>{this.props.title}</div>
        <div>{this.state.movies.map(movie => <MovieTile movie={movie} />)}</div>
      </div>
    )
  }
}

export default MovieRow
