import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import AppProvider from './global/context';
import Loading from './screens/Loading/Loading';

//TODO refactor history in APPContext
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
