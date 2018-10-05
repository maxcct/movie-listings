import React from 'react';
import Headings from './Headings';

const Listings = props => {
  const listings = props.movies.map((movie, index) => {
    return (
      <div
        className="movie-listing"
        style={{ backgroundImage: `url(${movie.Poster})` }}
        key={index}
        onClick={movie => props.toggleView(movie)}
      >
        <Headings movie={movie} />
      </div>
    );
  });
  return <main className="movie-listings">{listings}</main>;
};

export default Listings;
