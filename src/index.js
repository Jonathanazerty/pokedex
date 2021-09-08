import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Home } from './Home';
import { Details } from './Details';

export {
    Home,
    Details,
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
