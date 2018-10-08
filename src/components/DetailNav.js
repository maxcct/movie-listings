import React from 'react';

const DetailNav = props => (
  <nav className="details-nav">
    <img
      className="details-nav__icon"
      onClick={() => props.toggleView(null)}
      src="/icons/back-dark.png"
      alt="back nav item"
    />
    <img
      className="details-nav__icon"
      onClick={() => props.toggleFavourite(props.movie.imdbID)}
      src={
        !props.favourites.includes(props.movie.imdbID)
          ? '/icons/star-dark.png'
          : '/icons/star-gold.png'
      }
      alt="star nav item"
    />
  </nav>
);

export default DetailNav;
