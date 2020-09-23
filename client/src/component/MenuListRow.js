import React from 'react';
import styled from 'styled-components';

import { MENU } from '../global/reserveWord';
import { remove } from '../util/service';
import { useAppContext } from '../global/context';

import Btn from './common/Btn';

const MenuListRow = ({ index, data }) => {
  const { name, group, subMenu, id } = data[index];
  const { dispatchRemove, handleNavEditPage } = useAppContext();
  const numSubMenu = Object.keys(subMenu).length;
  const totalItems = calcMenuItem(subMenu);

  const navToEdit = () => handleNavEditPage(MENU, id);
  const removeMenu = () => handleRemoveMenu();

  const btnProps = {
    flex: 1,
    height: 40,
    width: 100,
  };

  function calcMenuItem(obj) {
    let total = 0;
    for (let key in obj) {
      total += subMenu[key].length;
    }
    return total;
  }

  async function handleRemoveMenu() {
    try {
      await remove(MENU, id);
      dispatchRemove(MENU, id);
    } catch (err) {
      console.log('failed to delete', err);
    }
  }
  return (
    <RowContainer>
      <Name>{name}</Name>
      <Group>{group}</Group>
      <SubMenu>Sub Menu: {numSubMenu}</SubMenu>
      <Item>Item {totalItems}</Item>
      <Btn handleOnClick={navToEdit} {...btnProps} color="blue" txt="Edit" />
      <Btn handleOnClick={removeMenu} {...btnProps} color="red" txt="Remove" />
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Name = styled.div`
  flex: 1;
`;
const Group = styled.div`
  flex: 1;
`;

const SubMenu = styled.div`
  flex: 1;
`;

const Item = styled.div`
  flex: 1;
`;

export default MenuListRow;
