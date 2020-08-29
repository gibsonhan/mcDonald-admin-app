import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { HERO, MENU, ITEM, COUPON } from '../global/reserveWord';
import CreateModal from './CreateModal';
import List from './common/List';
import MenuListRow from './MenuListRow';

const Menu = () => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    console.log('hello world');
    async function fetchItemList() {
      const baseUrl = 'http://localhost:3001/api/menu';
      const response = await axios.get(baseUrl);
      console.log('check menu response', response);
      setMenuList(response.data);
    }
    fetchItemList();
  }, []);

  const buttonTitle = [HERO, MENU, ITEM, COUPON];
  return (
    <MenuContainer>
      <ButtonContainer>
        {buttonTitle.map((type) => (
          <CreateModal key={type} type={type} />
        ))}
      </ButtonContainer>
      <ListContainer>
        {!!menuList && (
          <List title={'Menu'} data={menuList} row={MenuListRow} />
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
