import React from 'react';
import styled from 'styled-components';
import { MENU } from '../global/reserveWord';
import { remove } from '../util/service';

import { useAppContext } from '../global/context';

const MenuListRow = ({ index, data }) => {
  const { name, group, subGroup, id } = data[index];
  const { dispatchRemove } = useAppContext();

  const removeMenu = async () => {
    try {
      await remove(MENU, id);
      dispatchRemove(MENU, id);
    } catch (err) {
      console.log('failed to delete');
    }
  };

  return (
    <RowContainer>
      <div>{name}</div>
      <div>{group}</div>
      <div>Items</div>
      <button>Edit</button>
      <button onClick={removeMenu}>Delete</button>
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export default MenuListRow;
