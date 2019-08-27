import React, { Component } from 'react'

const MovieDetails = ({ video }) => {
  return (
    <div className="movie-tile-container">
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4">
      </video>
    </div>
  )
}

export default MovieDetails
