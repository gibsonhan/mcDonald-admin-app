import React from 'react';
import styled from 'styled-components';

import { ITEM } from '../global/reserveWord';
import { remove } from '../util/service';
import { useAppContext } from '../global/context';

import ActiveBox from './common/ActiveBox';
import Btn from './common/Btn';

const ItemRow = ({ index, data }) => {
  const { name, group, id } = data[index];
  const { dispatchRemove, handleNavEditPage } = useAppContext();
  const hasCoupon = !!data[index].couponGroupID === false ? false : true;

  const navToEdit = () => handleNavEditPage(ITEM, id);

  const removeItem = async () => {
    try {
      await remove(ITEM, id);
      dispatchRemove(ITEM, id);
    } catch (error) {
      console.log('failed to delete item', error);
    }
  };

  const btnProps = {
    flex: 1,
    height: 40,
    width: 100,
  };

  return (
    <ItemRowContainer>
      <Name>{name}</Name>
      <Group>Group {group} </Group>
      <ActiveBox active={hasCoupon} />
      <Btn handleOnClick={navToEdit} {...btnProps} color="blue" txt="Edit" />
      <Btn handleOnClick={removeItem} {...btnProps} color="red" txt="Remove" />
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

const Name = styled.div`
  flex: 1;
`;
const Group = styled.div`
  flex: 1;
`;
const Item = styled.div`
  flex: 1;
`;

export default ItemRow;
