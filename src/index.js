import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const apiKey = '9721b04b';
const imdbIDs = [
  '2527336',
  '5109784',
  '0248654',
  '0478304',
  '0103064',
  '2265171',
];

const initialiseApp = data => {
  ReactDOM.render(
    <App movies={data} apiKey={apiKey} />,
    document.getElementById('root'),
  );
};

Promise.all(
  imdbIDs.map(id =>
    Axios.get(`http://www.omdbapi.com/?i=tt${id}&apikey=${apiKey}`),
  ),
).then(data => initialiseApp(data.map(movie => movie.data)));

serviceWorker.unregister();
