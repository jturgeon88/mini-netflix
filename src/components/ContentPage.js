import React from 'react'
import { Route } from "react-router-dom";

import Home from './Home'
import HeaderNav from './HeaderNav'

function ContentPage() {
  return (
    <>
      <HeaderNav />
      <Route exact path="/" component={Home} />
    </>
  );
}

export default ContentPage;
