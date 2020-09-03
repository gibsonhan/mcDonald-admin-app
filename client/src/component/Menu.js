import React from 'react';
import styled from 'styled-components';

import { MENU } from '../global/reserveWord';
import onloadFetchList from '../util/handleFetchList';

import CreateModal from './CreateModal';
import List from './common/List';
import MenuListRow from './MenuListRow';

import { useAppContext } from '../global/context';

const Menu = () => {
  onloadFetchList(MENU);
  const { state } = useAppContext(); //For some reason this renders 4 times
  return (
    <MenuContainer>
      <Content>
        <div>Menu</div>
        <div>Number of menu {state.menu.length}</div>
        <CreateModal type={MENU} />
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
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ListContainer = styled.div`
  flex: 3;
`;

export default Menu;
