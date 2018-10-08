import React from 'react';

const formatTitle = title => {
  const titleWordsArray = title.split(' ');
  if (titleWordsArray.length > 1) {
    let firstWordOfTitle = titleWordsArray[0];
    let restOfTitle = titleWordsArray.slice(1);
    if (parseInt(restOfTitle[0]) || restOfTitle[0].slice(-1) === ':') {
      firstWordOfTitle = `${firstWordOfTitle} ${restOfTitle[0]}`;
      restOfTitle = restOfTitle.slice(1).join(' ');
    } else {
      restOfTitle = restOfTitle.join(' ');
    }
    if (restOfTitle) {
      return [firstWordOfTitle, restOfTitle].map((titleComponent, index) => (
        <h1 className="movie-listing__title" key={index}>
          {titleComponent}
        </h1>
      ));
    } else {
      title = firstWordOfTitle;
    }
  }
  return <h1 className="movie-listing__title">{title}</h1>;
};

export default formatTitle;
