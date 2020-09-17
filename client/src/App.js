import React from 'react';
import styled from 'styled-components';

import AppGlobalEvent from './component/AppGlobalEvent';
import Create from './screens/Create';
import Dashboard from './screens/Dashboard';
import Edit from './screens/Edit';
import Login from './screens/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useAppContext } from './global/context';

function App() {
  const { history, isLoading } = useAppContext();
  return (
    <AppContainer>
      <AppGlobalEvent>
        <Router history={history}>
          <Switch>
            <Route path={['/admin', '/login']} component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/edit" component={Edit} />
            <Route path="/create" component={Create} />
            <Route path="/" component={Dashboard}>
              <Redirect to="/dashboard/summary" />
            </Route>
          </Switch>
        </Router>
      </AppGlobalEvent>
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
