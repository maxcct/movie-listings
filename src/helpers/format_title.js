import React from 'react';

const formatTitle = title => {
  const titleWordsArray = title.split(' ');
  if (titleWordsArray.length > 1) {
    let firstWordOfTitle = titleWordsArray.slice(0, 1);
    let restOfTitle = titleWordsArray.slice(1);
    if (parseInt(restOfTitle[0]) || restOfTitle[0].slice(-1) === ':') {
      firstWordOfTitle.push(` ${restOfTitle[0]}`);
      restOfTitle = restOfTitle.slice(1).join(' ');
    } else {
      firstWordOfTitle = firstWordOfTitle[0];
      restOfTitle = restOfTitle.join(' ');
    }
    return [firstWordOfTitle, restOfTitle].map((titleComponent, index) => (
      <h1 className="movie-listing__title" key={index}>
        {titleComponent}
      </h1>
    ));
  } else {
    return <h1 className="movie-listing__title">{title}</h1>;
  }
};

export default formatTitle;
