import React from 'react'
import '../styles/MovieRow.css'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const PosterComp = styled.img`
width: 8vw;
`;

const MovieTile = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w440_and_h660_bestv2/${movie.poster_path}`

  return (
    <div data-testid="movie-tile" className="movie-tile-container">
      <Link to={`/movies/${movie.id}`}>
        <PosterComp src={poster}></PosterComp>
      </Link>
    </div>
  )
}

export default MovieTile
