import React, { Component } from 'react'

const MovieDetails = props => {
  return (
    <div className="movie-tile-container">
      <video width="320" height="240" controls>
        <source src={props.video} type="video/mp4">
      </video>
    </div>
  )
}

export default MovieDetails
