import React from 'react';
import formatTitle from '../helpers/format_title';

const Headings = props => {
  return (
    <React.Fragment>
      <h2 className="movie-listing__type">
        {props.movie.Type === 'movie' ? 'FILM' : 'TV'}
      </h2>
      {formatTitle(props.movie.Title)}
    </React.Fragment>
  );
};

export default Headings;
