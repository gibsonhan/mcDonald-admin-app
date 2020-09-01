import React from 'react';
import styled from 'styled-components';

import handleFetchList from '../hooks/handleFetchList';
import { COUPON } from '../global/reserveWord';

import CreateModal from './CreateModal';
import List from './common/List';
import MenuListRow from './MenuListRow';

const Coupon = () => {
  const couponList = handleFetchList(COUPON);
  return (
    <CouponContainer>
      coupon container
      <CreateModal type={COUPON} />
      <ListContainer>
        {!couponList.length && 'No List'}
        {!!couponList && (
          <List title={COUPON} data={couponList} row={MenuListRow} />
        )}
      </ListContainer>
    </CouponContainer>
  );
};

const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.div``;

export default Coupon;
