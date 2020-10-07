import React from 'react';
import styled from 'styled-components';

import { TREND } from '../global/reserveWord';
import { remove } from '../util/service';
import { useAppContext } from '../global/context';

import Btn from './common/Btn';

const TrendListRow = ({ index, data }) => {
  const { name, group, id } = data[index];
  const { dispatchRemove, handleNavEditPage } = useAppContext();
  const numSubMenu = !subMenu ? 0 : Object.keys(subMenu).length;
  const totalItems = calcMenuItem(subMenu);

  const navToEdit = () => handleNavEditPage(EDIT, id);
  const removeMenu = () => handleRemoveMenu();

  const btnProps = {
    flex: 1,
    height: 40,
    width: 100,
  };

  async function handleRemoveMenu() {
    try {
      await remove(TREND, id);
      dispatchRemove(TREND, id);
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

export default TrendListRow;
