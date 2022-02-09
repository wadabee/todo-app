import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

if (process.env.REACT_APP_USE_MOCK === 'true') {
  const { worker } = require('./mocks/browser');
  worker.start({
    serviceWorker: {
      options: {
        // Narrow the scope of the Service Worker to intercept requests
        // only from pages under this path.
        scope: '/todo-app/',
      },
    },
  });
}

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
