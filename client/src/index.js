import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createBrowserHistory } from 'history';

import AppProvider from './global/context';

//TODO refactor history in APPContext
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
