import React, { useEffect } from 'react';
import styled from 'styled-components';

import { COUPON, HERO, ITEM, MENU } from '../global/reserveWord';

import { useAppContext } from '../global/context';

import Text from '../component/common/Text';
import EscapeBtn from '../component/common/EscapeBtn';
import initEscapekey from '../hooks/handleEscapekey';

import Coupon from '../component/Coupon';
import Hero from '../component/Hero';
import Item from '../component/Item';
import Menu from '../component/Menu';

const createObj = {
  [COUPON]: <Coupon />,
  [HERO]: <Hero />,
  [ITEM]: <Item />,
  [MENU]: <Menu />,
};

const Create = () => {
  const { history } = useAppContext();
  const key = history.location.state;
  const goBack = () => history.goBack();

  initEscapekey(goBack);

  return (
    <CreateContainer>
      <Header>
        <Text size={50}>{key.toUpperCase()}</Text>
        <EscapeBtn />
      </Header>
      <Body>{createObj[key]}</Body>
    </CreateContainer>
  );
};

const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 100%;
  width: 100%;
`;
const Header = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Body = styled.div`
  flex: 4;
  display: flex;
  background: yellow;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Create;
