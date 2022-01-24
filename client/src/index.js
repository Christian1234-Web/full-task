import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
      </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
