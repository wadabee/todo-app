import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SetupWorkerApi } from 'msw';

if (process.env.REACT_APP_USE_MOCK === 'true') {
  const { worker } = require('./mocks/browser') as { worker: SetupWorkerApi };
  worker.start({
    serviceWorker: {
      url: 'https://wadabee.github.io/todo-app/mockServiceWorker.js',
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
