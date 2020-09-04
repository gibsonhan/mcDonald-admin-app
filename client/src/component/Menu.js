import React from 'react';
import styled from 'styled-components';

import { MENU } from '../global/reserveWord';
import onloadFetchList from '../util/handleFetchList';
import { useAppContext } from '../global/context';

import List from './common/List';
import MenuListRow from './MenuListRow';

const Menu = () => {
  onloadFetchList(MENU);
  const { state, handleNavToCreate } = useAppContext(); //For some reason this renders 4 times
  const navToCreate = () => handleNavToCreate(MENU);
  return (
    <MenuContainer>
      <Content>
        <div>Menu</div>
        <div>Number of menu {state.menu.length}</div>
        <button onClick={navToCreate}> Create {MENU} </button>
      </Content>

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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ListContainer = styled.div`
  flex: 3;
`;

export default Menu;
