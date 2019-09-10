import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from '../logo.svg'
import '../styles/App.css'
import ContentPage from './ContentPage'
import MovieDetails from './MovieDetails'
import RouterComponent from '../lib/utils'

function App() {
  return (
    <RouterComponent>
      <Switch>
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route path="/" component={ContentPage} />
      </Switch>
    </RouterComponent>
  );
}

export default App;
