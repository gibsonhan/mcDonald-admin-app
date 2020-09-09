import React from 'react';
import styled from 'styled-components';

import { COUPON } from '../global/reserveWord';
import { remove } from '../util/service';
import { useAppContext } from '../global/context';

import Btn from './common/Btn';
import Text from './common/Text';

//TODO recreate the coupon here?
const CouponListRow = ({ index, data }) => {
  const { title, id, ...rowObj } = data[index];
  const { dispatchRemove, handleNavEditPage } = useAppContext();

  const navToEdit = () => handleNavEditPage(COUPON, id);

  const removeCoupon = async () => {
    try {
      await remove(COUPON, id);
      dispatchRemove(COUPON, id);
    } catch (error) {
      console.log('faield to catch error', error);
    }
  };

  const btnProps = {
    flex: 1,
    height: 40,
    width: 100,
  };

  return (
    <RowContainer>
      <Text flex={1} justify="center">
        {title}
      </Text>
      <Btn
        handleOnClick={navToEdit}
        {...btnProps}
        color="blue"
        txt="Edit"
        justify="center"
      />
      <Btn
        handleOnClick={removeCoupon}
        {...btnProps}
        color="red"
        txt="Remove"
        justify="center"
      />
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
  padding: 10px;
`;

export default CouponListRow;
