import React from 'react';

const Listings = props => {
  const listings = props.movies.map((movie, index) => (
    <div
      className="movie-listing"
      style={{ backgroundImage: `url(${movie.Poster})` }}
      key={index}
    />
  ));
  return <main className="movie-listings">{listings}</main>;
};

export default Listings;
