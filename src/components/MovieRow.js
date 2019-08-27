import React, { Component } from 'react'
import '../styles/MovieRow.css'
import MovieTile from './MovieTile'
import { fetchResults } from '../lib/fetchMovies';

class MovieRow extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [

      ],
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => (
    fetchResults()
      .then(fetchedData => {
        this.setState({ movies: [...fetchedData.results] });
        // console.log('movies', this.state.movies);
        console.log(fetchedData);
      })
  )

  render() {
    console.log('movies', this.state.movies);

    return (
      <div className="movie-row-container">
        <div>{this.props.title}</div>
        <div>{this.state.movies.map(movie => <MovieTile movie={movie} />)}</div>
      </div>
    )
  }
}

export default MovieRow
