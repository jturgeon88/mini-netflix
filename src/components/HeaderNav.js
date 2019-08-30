import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../styles/HeaderNav.css'

class HeaderNav extends Component {
  render() {
    return (
      <div className="header-nav-container">
        <Link to="/" className="header-logo">
          MINI-FLIX
        </Link>
        <ul className="nav-links">
          <Link to="/">
            Home
          </Link>
          <Link to="/movies">
            Movies
          </Link>
          <Link to="/series">
            Series
          </Link>
          <Link to="/my-list">
            My List
          </Link>
        </ul>
      </div>
    )
  }
}

export default HeaderNav
