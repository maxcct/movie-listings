import React, { Component } from 'react';
import Listings from './components/Listings';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      selection: null,
    };
  }

  toggleView(selection) {
    this.setState({
      selection: selection,
    });
  }

  render() {
    return !this.state.selection ? (
      <Listings movies={this.state.movies} toggleView={this.toggleView} />
    ) : null;
  }
}

export default App;
