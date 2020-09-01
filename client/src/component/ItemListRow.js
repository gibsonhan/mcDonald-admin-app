import React from 'react';
import styled from 'styled-components';

import { ITEM } from '../global/reserveWord';
import { remove } from '../util/service';

const ItemRow = ({ index, data }) => {
  const hasCoupon = !!data[index].couponGroupID === false ? false : true;
  const { name, group, id } = data[index];
  return (
    <ItemRowContainer>
      <div>Name: {name}</div>
      <div>Menu: {group}</div>
      <ActiveBoxContainer>
        <div>Active Coupon:</div>
        <ActiveBox active={hasCoupon} />
      </ActiveBoxContainer>
      <button>Edit</button>
      <button onClick={() => remove(id, ITEM)}>Delete</button>
    </ItemRowContainer>
  );
};

const ItemRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const ActiveBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    margin-right: 10px;
  }
`;
const ActiveBox = styled.div`
  background: ${(props) => (!!props.active ? 'light-green' : 'red')};
  height: 25px;
  width: 25px;
`;

export default ItemRow;
