import React from 'react';

const favouritesNavItem = props => {
  const toggleFavourites = () => {
    if (
      props.favouritesView ||
      (!props.favouritesView && props.favourites.length)
    ) {
      return props.toggleFavouritesView();
    }
    return props.warn('no favourites');
  };
  const iconSrc = props.favouritesView
    ? '/icons/star-gold.png'
    : '/icons/star-dark.png';
  return (
    <img
      className="listings-nav__star-icon"
      onClick={() => toggleFavourites()}
      src={iconSrc}
      alt="star nav item"
    />
  );
};

const ListingsNav = props => {
  return !props.searchOpen ? (
    <nav className="listings-nav">
      <img
        className="listings-nav__search-icon"
        onClick={() => props.toggleSearchView()}
        src="/icons/search-dark.png"
        alt="search nav item"
      />
      {favouritesNavItem(props)}
    </nav>
  ) : (
    <nav className="listings-nav listings-search-nav">
      <input
        className="listings-search-nav__input"
        onChange={event => props.updateSearchText(event.target.value)}
        type="text"
        value={props.searchText}
        placeholder={props.searchPlaceholder}
      />
      <button
        className="listings-search-nav__submit"
        onClick={() => !props.searchText || props.search()}
      >
        <img
          className="listings-search-nav__search-icon"
          src="/icons/search-light.png"
          alt="search nav item"
        />
      </button>
      <img
        className="listings-search-nav__close-icon"
        onClick={() => props.toggleSearchView()}
        src="/icons/close.png"
        alt="close nav item"
      />
    </nav>
  );
};

export default ListingsNav;
