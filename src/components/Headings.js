import React from 'react';
import formatTitle from '../helpers/format_title';

const Headings = props => {
  let type = 'OTHER';
  if (props.movie.Type === 'movie') {
    type = 'FILM';
  } else if (props.movie.Type === 'series') {
    type = 'TV';
  }
  return (
    <React.Fragment>
      <h2 className="movie-listing__type">{type}</h2>
      {formatTitle(props.movie.Title)}
    </React.Fragment>
  );
};

export default Headings;
