import React from 'react'
import '../styles/MovieRow.css'
import styled from 'styled-components'

const PosterComp = styled.img`
width: 8vw;
`;

const MovieTile = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w440_and_h660_bestv2/${movie.poster_path}`
  return (
    <div className="movie-tile-container">
      <PosterComp src={poster}></PosterComp>
    </div>
  )
}

export default MovieTile
