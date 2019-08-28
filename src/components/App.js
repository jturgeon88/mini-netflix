import React from 'react'
import logo from '../logo.svg'
import '../styles/App.css'
import Home from './Home'
import HeaderNav from './HeaderNav'

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Home />
    </div>
  );
}

export default App;
