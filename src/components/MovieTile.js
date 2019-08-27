import React, { Component } from 'react'
import '../styles/MovieRow.css'

const MovieTile = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w440_and_h660_bestv2/${movie.poster_path}`
  return (
    <div className="movie-tile-container">
      <img src={poster}></img>
    </div>
  )
}

export default MovieTile
