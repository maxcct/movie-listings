import React from 'react';
import Headings from './Headings';
import DetailNav from './DetailNav';

const releaseDate = movie =>
  movie.Released ? (
    <p className="movie-detail__release-date">
      <img
        className="movie-detail__release-date-icon"
        src="/icons/clock.png"
        alt="clock icon"
      />
      {movie.Released}
    </p>
  ) : null;

const Detail = props => (
  <main
    className="movie-detail"
    style={{ backgroundImage: `url(${props.movie.Poster})` }}
  >
    <div className="movie-detail__details">
      <Headings movie={props.movie} />
      {releaseDate(props.movie)}
      <DetailNav
        movie={props.movie}
        toggleView={props.toggleView}
        favourites={props.favourites}
        toggleFavourite={props.toggleFavourite}
      />
    </div>
  </main>
);

export default Detail;
