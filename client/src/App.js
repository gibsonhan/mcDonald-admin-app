import React from 'react';
import styled from 'styled-components';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import DashboardScreen from './screens/Dashboard';

import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <AppContainer>
      <Switch>
        <Route path={['/admin', '/login']} component={LoginScreen} />
        <Route path="/dashboard" component={DashboardScreen} />
        <Route path="/" component={DashboardScreen}>
          <Redirect to="/dashboard/menu" />
        </Route>
      </Switch>
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
