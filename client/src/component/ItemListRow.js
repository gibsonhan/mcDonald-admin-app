import React from 'react';
import styled from 'styled-components';

import { ITEM } from '../global/reserveWord';
import { remove } from '../util/service';
import { useAppContext } from '../global/context';

const ItemRow = ({ index, data }) => {
  const { name, group, id } = data[index];
  const { dispatchRemove, handleNavEditPage } = useAppContext();
  const hasCoupon = !!data[index].couponGroupID === false ? false : true;

  const navTo = () => handleNavEditPage(ITEM, id);

  const removeItem = async () => {
    try {
      await remove(ITEM, id);
      dispatchRemove(ITEM, id);
    } catch (error) {
      console.log('failed to delete item', error);
    }
  };

  return (
    <ItemRowContainer>
      <div>Name: {name}</div>
      <div>Menu: {group}</div>
      <ActiveBoxContainer>
        <div>Active Coupon:</div>
        <ActiveBox active={hasCoupon} />
      </ActiveBoxContainer>
      <button onClick={navTo}>Edit</button>
      <button onClick={removeItem}>Delete</button>
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
