import React from 'react';
import styled from 'styled-components';

import { MENU } from '../global/reserveWord';
import onloadFetchList from '../hooks/handleFetchList';

import CreateModal from './CreateModal';
import List from './common/List';
import MenuListRow from './MenuListRow';

import { useAppContext } from '../global/context';

const Menu = () => {
  onloadFetchList(MENU);
  const { state } = useAppContext(); //For some reason this renders 4 times
  return (
    <MenuContainer>
      <div>Menu</div>
      <div>Number of menu {state.menu.length}</div>
      <ButtonContainer>
        <CreateModal type={MENU} />
      </ButtonContainer>
      <ListContainer>
        {!!state.menu && (
          <List title={MENU} data={state.menu} row={MenuListRow} />
        )}
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
