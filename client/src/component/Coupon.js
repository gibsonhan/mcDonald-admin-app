import React from 'react';
import styled from 'styled-components';

import handleFetchList from '../hooks/handleFetchList';
import { COUPON } from '../global/reserveWord';

import CreateModal from './CreateModal';
import List from './common/List';
import CouponListRow from './CouponListRow';

const Coupon = () => {
  const couponList = handleFetchList(COUPON);
  return (
    <CouponContainer>
      <ContentContainer>
        <div>Coupon</div>
        <div>Number of Coupons: {couponList.length}</div>
        <CreateModal type={COUPON} />
      </ContentContainer>
      <ListContainer>
        <List title={COUPON} data={couponList} row={CouponListRow} />
      </ListContainer>
    </CouponContainer>
  );
};

const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: yellow;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ListContainer = styled.div`
  display: flex;
  flex: 2;
`;

export default Coupon;
