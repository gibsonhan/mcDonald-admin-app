import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

//styles
import Color from '../global/color';
import styled from 'styled-components';

//components
import Coupon from './Coupon';
import Hero from './Hero';
import Item from './Item';
import Menu from './Menu';
import Summary from './Summary';

const switchNav = [
  { title: 'Hero', route: 'hero', component: Hero },
  { title: 'Coupon', route: 'coupon', component: Coupon },
  { title: 'Menu', route: 'menu', component: Menu },
  { title: 'Items', route: 'item', component: Item },
  { title: 'Summary', route: 'summary', component: Summary },
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
