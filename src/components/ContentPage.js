import React from 'react'
import { Route } from "react-router-dom";

import Home from './Home'
import HeaderNav from './HeaderNav'
import MoviesPage from './MoviesPage'
import SeriesPage from './SeriesPage'
import MyListPage from './MyListPage'

function ContentPage() {
  return (
    <>
      <HeaderNav />
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route exact path="/series" component={SeriesPage} />
      <Route exact path="/my-list" component={MyListPage} />
    </>
  );
}

export default ContentPage;
