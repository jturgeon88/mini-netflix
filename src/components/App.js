import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import logo from '../logo.svg'
import '../styles/App.css'
import Home from './Home'
import HeaderNav from './HeaderNav'
import MovieDetails from './MovieDetails'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route path="/" component={HeaderNav} />
      </Switch>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
