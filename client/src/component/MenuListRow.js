import React from 'react';
import styled from 'styled-components';
import { MENU } from '../global/reserveWord';
import { remove } from '../util/service';

const MenuListRow = ({ index, data }) => {
  const { name, group, subGroup, id } = data[index];
  const removeItem = () => remove(id, MENU);
  return (
    <RowContainer>
      <div>{name}</div>
      <div>{group}</div>
      <div>Items</div>
      <button>Edit</button>
      <button onClick={removeItem}>Delete</button>
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
