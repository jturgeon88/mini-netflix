import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from '../logo.svg'
import '../styles/App.css'
import Home from './Home'
import HeaderNav from './HeaderNav'
import MovieDetails from './MovieDetails'

function App() {
  return (
    <Router>
      <Route path="/" component={HeaderNav} />
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={MovieDetails} />
    </Router>
  );
}

export default App;
