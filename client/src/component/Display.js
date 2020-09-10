import React from 'react';
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';

//styles
import Color from '../global/color';
import styled from 'styled-components';

//components
import Coupon from './Coupon';
import Edit from '../screens/Edit';
import Hero from './Hero';
import ItemList from './ItemList';
import Menu from './Menu';
import Summary from './Summary';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const switchNav = [
  { title: 'Hero', route: 'hero', component: Hero, exact: true },
  { title: 'Coupon', route: 'coupon', component: Coupon, exact: true },
  { title: 'Menu', route: 'menu', component: Menu, exact: true },
  { title: 'Items', route: 'item', component: ItemList, exact: true },
  { title: 'Summary', route: 'summary', component: Summary, exact: true },
];

const Display = () => {
  let { path } = useRouteMatch();
  return (
    <DisplayContainer>
      <Switch>
        {switchNav.map((obj) => (
          <Route
            key={obj.title}
            exact={obj.exact}
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
