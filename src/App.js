import React, { Component } from 'react';
import Listings from './components/Listings';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
    };
  }

  render() {
    return (
      <div className="App">
        <Listings movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
