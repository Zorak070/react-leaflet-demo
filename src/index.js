import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App2 from './App2';

ReactDOM.render(
  <React.StrictMode>

    {/*Uncomment App to see Local data from json file*/}

    {/* <App /> */}

    {/*Map from an  Api data in App2 */}
    <App2 />

  </React.StrictMode>,
  document.getElementById('root')
);
