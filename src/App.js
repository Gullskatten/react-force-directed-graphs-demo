import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <Route path="/" component={Home} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
