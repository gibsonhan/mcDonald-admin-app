import React from 'react';
import styled from 'styled-components';

import { HERO, MENU, ITEM, COUPON } from '../global/reserveWord';
import handleFetchList from '../hooks/handleFetchList';

import CreateModal from './CreateModal';
import List from './common/List';
import MenuListRow from './MenuListRow';

const Menu = () => {
  const menuList = handleFetchList(MENU);
  const buttonTitle = [HERO, MENU, ITEM, COUPON];
  return (
    <MenuContainer>
      <div>Menu</div>
      <div>Number of menu {menuList.length}</div>
      <ButtonContainer>
        {buttonTitle.map((type) => (
          <CreateModal key={type} type={type} />
        ))}
      </ButtonContainer>
      <ListContainer>
        {!!menuList && <List title={MENU} data={menuList} row={MenuListRow} />}
      </ListContainer>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ListContainer = styled.div`
  flex: 4;
`;

export default Menu;
