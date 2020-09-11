import React from 'react';
import styled from 'styled-components';

import Create from './screens/Create';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Update from './screens/Update';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useAppContext } from './global/context';

function App() {
  const { history } = useAppContext();
  return (
    <AppContainer>
      <Router history={history}>
        <Switch>
          <Route path={['/admin', '/login']} component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/update" component={Update} />
          <Route path="/create" component={Create} />
          <Route path="/" component={Dashboard}>
            <Redirect to="/dashboard/summary" />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

//TODO fix the style sheet stuff. Need global style sheet
const AppContainer = styled.div`
  margin: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /**
   TODO add box shadow
   */
`;

export default App;
