import React from 'react';
import styled from 'styled-components';

import { MENU } from '../global/reserveWord';
import { remove } from '../util/service';
import { useAppContext } from '../global/context';

import Btn from './common/Btn';

const MenuListRow = ({ index, data }) => {
  const { name, group, subGroup, items, id } = data[index];
  const { dispatchRemove, handleNavEditPage } = useAppContext();

  const navToEdit = () => handleNavEditPage(MENU, id);

  const removeMenu = async () => {
    try {
      await remove(MENU, id);
      dispatchRemove(MENU, id);
    } catch (err) {
      console.log('failed to delete');
    }
  };

  const btnProps = {
    flex: 1,
    height: 40,
    width: 100,
  };

  console.log(data[index]);

  return (
    <RowContainer>
      <Name>{name}</Name>
      <Group>{group}</Group>
      <Item>Item {items || 0}</Item>
      <Btn handleOnClick={navToEdit} {...btnProps} color="blue" txt="Edit" />
      <Btn handleOnClick={removeMenu} {...btnProps} color="red" txt="Remove" />
    </RowContainer>
  );
};

const RowContainer = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Name = styled.div`
  flex: 1;
`;
const Group = styled.div`
  flex: 1;
`;
const Item = styled.div`
  flex: 1;
`;

export default MenuListRow;
