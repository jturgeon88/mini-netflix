import React, { Component } from 'react'
import '../styles/HeaderNav.css'

class HeaderNav extends Component {
  render() {
    return (
      <div className="header-nav-container">
        <span>
          Logo
        </span>
        <ul className="nav-links">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Movies</a>
          </li>
          <li>
            <a>Series</a>
          </li>
          <li>
            <a>Recently Added</a>
          </li>
          <li>
            <a>My List</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default HeaderNav
