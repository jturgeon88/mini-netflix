import React, { Component } from 'react'
import ResponsivePlayer from './ResponsivePlayer'
import { fetchVideo } from '../lib/movieApi';
import '../styles/MovieDetails.css'

class MovieDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videoKey: ''
    }
  }

  componentDidMount() {
    const { match } = this.props
    fetchVideo(match.params.id)
    .then(data => {
      this.setState({videoKey: data.results[0].key})
    })
  }

  render() {
    const { videoKey } = this.state
    return (
      <div data-testid="movie-details" className="movie-details-container">
        <ResponsivePlayer videoKey={this.state.videoKey} />
      </div>
    )
  }
}

export default MovieDetails
