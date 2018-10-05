import React from 'react';
import formatTitle from '../helpers/format_title';

const Headings = movie => (
  <React.Fragment>
    <h2 className="movie-listing__type">
      {movie.Type === 'movie' ? 'FILM' : 'TV'}
    </h2>
    {formatTitle(movie.Title)}
  </React.Fragment>
);

export default Headings;
