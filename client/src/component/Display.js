import React from 'react';
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';

//styles
import Color from '../global/color';
import styled from 'styled-components';

//components
import CouponList from './CouponList';
import HeroList from './HeroList';
import ItemList from './ItemList';
import MenuList from './MenuList';

const switchNav = [
  { title: 'Hero', route: 'hero', component: HeroList, exact: true },
  { title: 'Coupon', route: 'coupon', component: CouponList, exact: true },
  { title: 'Menu', route: 'menu', component: MenuList, exact: true },
  { title: 'Items', route: 'item', component: ItemList, exact: true },
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
