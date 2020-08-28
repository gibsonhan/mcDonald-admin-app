import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

//styles
import Color from '../../global/color';
import styled from 'styled-components';

//components
import Create from './Create';
import Hero from './Hero';
import Items from './Items';
import Menu from './Menu';
import Summary from './Summary';
import Traffic from './Traffic';

const switchNav = [
  { title: 'Create', route: 'create', component: Create },
  { title: 'Hero', route: 'hero', component: Hero },
  { title: 'Menu', route: 'menu', component: Menu },
  { title: 'Items', route: 'items', component: Items },
  { title: 'Summary', route: 'summary', component: Summary },
  { title: 'Traffic', route: 'traffic', component: Traffic },
];

const Display = () => {
  let { path } = useRouteMatch();
  return (
    <DisplayContainer>
      <Switch>
        {switchNav.map((obj) => (
          <Route
            key={obj.title}
            exact
            path={`${path}/${obj.route}`}
            component={obj.component}
          />
        ))}
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
