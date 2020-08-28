import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import CreateModal from './CreateModal';
import { HERO, MENU, ITEM, COUPON } from '../global/reserveWord';

const Menu = () => {
  const buttonTitle = [HERO, MENU, ITEM, COUPON];
  return (
    <MenuContainer>
      <ButtonContainer>
        {buttonTitle.map((type) => (
          <CreateModal key={type} type={type} />
        ))}
      </ButtonContainer>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Menu;
