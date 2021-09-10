import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Home } from './Home';
import { Details } from './components/Details';

export {
    Home,
    Details,
};

ReactDOM.render(
  <React.StrictMode>
    <center><App /></center>
  </React.StrictMode>,
  document.getElementById('root')
);
