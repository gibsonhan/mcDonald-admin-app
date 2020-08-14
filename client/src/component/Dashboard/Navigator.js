import React from 'react';
import styled from 'styled-components';
import Color from '../../global/color';

import { NavLink, useRouteMatch } from 'react-router-dom';

//https://reactrouter.com/web/example/route-config
const Navigator = ({ history }) => {
  let { path, url } = useRouteMatch();
  const nav = [
    { title: 'Summary', route: 'summary' },
    { title: 'Web Traffic', route: 'traffic' },
    { title: 'Store', route: 'store' },
    { title: 'Hero', route: 'hero' },
    { title: 'Menu', route: 'menu' },
    { title: 'Items', route: 'items' },
    { title: 'Coupon', route: 'coupton' },
    { title: 'Settings', route: 'setting' },
    { title: 'Create', route: 'create' },
  ];
  return (
    <NavigatorContainer>
      {nav.map((item) => (
        <NavButton key={item.title} props={item} url={url} history={history} />
      ))}
    </NavigatorContainer>
  );
};

const NavigatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fbab7e;
  background-image: linear-gradient(313deg, #fbab7e 0%, #f7ce68 100%);
  border-radius: 20px 0 0 20px;
`;

const NavButton = ({ props, url, history }) => {
  const { title, route } = props;
  const path = `${url}/${route}`;
  const redirect = () => history.push(path);
  return (
    <NavButtonContainer onClick={redirect}>
      <SvgContainer>Icon</SvgContainer>
      <TitleContainer>{title}</TitleContainer>
    </NavButtonContainer>
  );
};

const NavButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 10px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 10px;
  opacity: 0.7;

  &:hover {
    background-color: ${Color.offwhite};
    color: #ff2525;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  width: 50px;

  text-align: center;
  background-color: red;
  border-radius: 10px;
  color: #f35c07;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export default Navigator;
