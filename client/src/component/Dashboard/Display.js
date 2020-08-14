import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Color from '../../global/color';
import Create from './Create';
import Entry from './Entry';
import Summary from './Summary';
import Traffic from './Traffic';

const Display = () => {
  let { path, url } = useRouteMatch();
  return (
    <DisplayContainer>
      <Switch>
        <Route exact path={`${path}/entry/:id`} component={Entry} />
        <Route exact path={`${path}/create`} component={Create} />
        <Route path={`${path}/summary`} component={Summary} />
        <Route path={`${path}/traffic`} component={Traffic} />
      </Switch>
    </DisplayContainer>
  );
};

const DisplayContainer = styled.div`
  background-color: ${Color.offwhite};
  padding: 20px 40px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export default Display;
