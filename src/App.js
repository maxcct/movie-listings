import React, { Component } from 'react';
import Axios from 'axios';
import Listings from './components/Listings';
import Detail from './components/Detail';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.updateSearchText = this.updateSearchText.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.toggleSearchView = this.toggleSearchView.bind(this);
    this.toggleFavouritesView = this.toggleFavouritesView.bind(this);
    this.toggleFavourite = this.toggleFavourite.bind(this);
    this.movieListings = this.movieListings.bind(this);
    this.state = {
      movies: this.props.movies,
      searchResults: [],
      selection: null,
      searchOpen: false,
      searchText: '',
      searchPlaceholder: 'Search a film or TV title',
      favouritesView: false,
      favourites: [],
      warningClass: 'warning',
    };
  }

  search() {
    Axios.get(
      `http://www.omdbapi.com/?s=${this.state.searchText}&apikey=${
        this.props.apiKey
      }`,
    ).then(response => {
      if (response.data.Search && response.data.Search.length) {
        const searchResults = response.data.Search.filter(
          movie => movie.Title !== 'N/A' && movie.Poster !== 'N/A',
        );
        if (searchResults.length) {
          return this.setState({
            searchResults: searchResults,
          });
        }
      }
      return this.setState({
        searchText: '',
        searchPlaceholder: "Couldn't find a good match!",
      });
    });
  }

  updateSearchText(text) {
    this.setState({
      searchText: text,
    });
  }

  toggleView(selection) {
    this.setState({
      selection: selection,
    });
  }

  toggleSearchView() {
    this.setState(prevState => ({
      searchOpen: !prevState.searchOpen,
    }));
  }

  toggleFavouritesView() {
    if (this.state.favourites.length) {
      this.setState(prevState => ({
        favouritesView: !prevState.favouritesView,
      }));
    }
  }

  toggleFavourite(imdbID) {
    if (!this.state.favourites.includes(imdbID)) {
      this.setState(prevState => {
        const searchedMovie = prevState.searchResults.find(
          movie => movie.imdbID === imdbID,
        );
        return {
          favourites: [imdbID, ...prevState.favourites],
          movies: searchedMovie
            ? [searchedMovie, ...prevState.movies]
            : prevState.movies,
        };
      });
    } else {
      this.setState(prevState => ({
        favourites: prevState.favourites.filter(
          favourite => favourite !== imdbID,
        ),
      }));
    }
  }

  movieListings() {
    if (this.state.searchOpen && this.state.searchResults.length) {
      return this.state.searchResults;
    }
    return !this.state.favouritesView || !this.state.favourites.length
      ? this.state.movies
      : this.state.movies.filter(movie =>
          this.state.favourites.includes(movie.imdbID),
        );
  }

  warn(about) {
    if (about === 'favourites') {
      this.setState({
        warningClass: 'warning--visible',
      });
    }
  }

  mainContent() {
    return !this.state.selection ? (
      <Listings
        movies={this.movieListings()}
        toggleView={this.toggleView}
        toggleSearchView={this.toggleSearchView}
        searchOpen={this.state.searchOpen}
        search={this.search}
        searchText={this.state.searchText}
        updateSearchText={this.updateSearchText}
        searchPlaceholder={this.state.searchPlaceholder}
        favourites={this.state.favourites}
        favouritesView={this.state.favouritesView}
        toggleFavouritesView={this.toggleFavouritesView}
        warn={this.warn}
      />
    ) : (
      <Detail
        movie={this.state.selection}
        toggleView={this.toggleView}
        favourites={this.state.favourites}
        toggleFavourite={this.toggleFavourite}
      />
    );
  }

  render() {
    return (
      <div>
        <p className={this.state.warningClass}>
          You don't have any favourites! Add some by selecting a listing, then
          starring it
        </p>
        {this.mainContent()}
      </div>
    );
  }
}

export default App;
