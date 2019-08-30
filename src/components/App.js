import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from '../logo.svg'
import '../styles/App.css'
import ContentPage from './ContentPage'
import MovieDetails from './MovieDetails'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route path="/" component={ContentPage} />
      </Switch>
    </Router>
  );
}

export default App;
