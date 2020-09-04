import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppProvider from './global/context';

//TODO refactor history in APPContext
const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
