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

const rating = movie => {
  if (movie.Ratings) {
    const rottenTomatoes = movie.Ratings.find(
      rating => rating.Source === 'Rotten Tomatoes',
    );
    if (rottenTomatoes && rottenTomatoes.Value) {
      const rottenTomatoesScore = parseInt(rottenTomatoes.Value);
      const rottenTomatoesStatus =
        rottenTomatoesScore < 60 ? 'rotten' : 'fresh';
      return (
        <p className="movie-detail__rating">
          <img
            className="movie-detail__rating-icon"
            src={`/icons/tomato-${rottenTomatoesStatus}.png`}
            alt="rotten tomatoes icon"
          />
          {`${rottenTomatoes.Value} ${rottenTomatoesStatus}`}
        </p>
      );
    }
  }
  return null;
};

const Detail = props => (
  <main
    className="movie-detail"
    style={{ backgroundImage: `url(${props.movie.Poster})` }}
  >
    <div className="movie-detail__details">
      <Headings movie={props.movie} />
      {releaseDate(props.movie)}
      {rating(props.movie)}
    </div>
    <DetailNav
      movie={props.movie}
      toggleView={props.toggleView}
      favourites={props.favourites}
      toggleFavourite={props.toggleFavourite}
    />
  </main>
);

export default Detail;
