import React from 'react';
import Headings from './Headings';
import ListingsNav from './ListingsNav';

const Listings = props => {
  const listings = props.movies.map((movie, index) => {
    const selectMovie = () => props.toggleView(movie);
    return (
      <div
        className="movie-listing"
        style={{ backgroundImage: `url(${movie.Poster})` }}
        key={index}
        onClick={() => selectMovie()}
      >
        <Headings movie={movie} />
      </div>
    );
  });
  return (
    <main className="movie-listings">
      {listings}
      <ListingsNav
        toggleSearchView={props.toggleSearchView}
        searchOpen={props.searchOpen}
        search={props.search}
        searchText={props.searchText}
        updateSearchText={props.updateSearchText}
        searchPlaceholder={props.searchPlaceholder}
        favourites={props.favourites}
        favouritesView={props.favouritesView}
        toggleFavouritesView={props.toggleFavouritesView}
        warn={props.warn}
      />
    </main>
  );
};

export default Listings;
