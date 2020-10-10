import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { COUPON, HERO, ITEM, MENU, TREND } from '../global/reserveWord';

import EscapeBtn from '../component/common/EscapeBtn';
import Text from '../component/common/Text';
import initEscapekey from '../hooks/handleEscapekey';

import Coupon from '../component/Coupon';
import Hero from '../component/Hero';
import Item from '../component/Item';
import Menu from '../component/Menu';
import Trend from '../component/Trend';

//TODO Refactor Edit and Edit into a single form?
const Edit = ({ history }) => {
  const id = history.location.state.id;
  const key = history.location.state.type;

  const editProps = { edit: true, id };
  const editObj = {
    [COUPON]: <Coupon {...editProps} />,
    [HERO]: <Hero {...editProps} />,
    [ITEM]: <Item {...editProps} />,
    [MENU]: <Menu {...editProps} />,
    [TREND]: <Trend {...editProps} />,
  };

  initEscapekey();

  return (
    <EditContainer>
      <Header>
        <Text size={50}>{key.toUpperCase()}</Text>
        <EscapeBtn />
      </Header>
      <Body>{editObj[key]}</Body>
    </EditContainer>
  );
};

const EditContainer = styled.div`
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

export default Edit;
