import React from 'react';
import styled from 'styled-components';

import { COUPON } from '../global/reserveWord';
import { remove } from '../util/service';
import { useAppContext } from '../global/context';

//TODO recreate the coupon here?
const CouponListRow = ({ index, data }) => {
  const { title, id, ...rowObj } = data[index];
  const { dispatchRemove, handleNavEditPage } = useAppContext();

  const navTo = () => handleNavEditPage(COUPON, id);

  const removeCoupon = async () => {
    try {
      await remove(COUPON, id);
      dispatchRemove(COUPON, id);
    } catch (error) {
      console.log('faield to catch error', error);
    }
  };

  return (
    <RowContainer>
      <div>{title}</div>
      <button onClick={navTo}>Edit</button>
      <button onClick={removeCoupon}>Delete</button>
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export default CouponListRow;

const Coupon = () => {
  return <CouponContainer>Hello World</CouponContainer>;
};

const CouponContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
`;
