import React from 'react';
import styled from 'styled-components';
import { COUPON } from '../global/reserveWord';
import handleFetchList from '../hooks/handleFetchList';

const Coupon = () => {
  const couponList = handleFetchList(COUPON);
  return <CouponContainer>Coupon Container</CouponContainer>;
};

const CouponContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default Coupon;
