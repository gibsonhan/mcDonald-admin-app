import React from 'react';
import styled from 'styled-components';

import { COUPON } from '../global/reserveWord';
import onloadFetchList from '../util/handleFetchList';
import { useAppContext } from '../global/context';

import CouponListRow from './CouponListRow';
import Btn from './common/Btn';
import List from './common/List';

//TODO debug the app and see what the app is firing so many times
const CouponList = () => {
  onloadFetchList(COUPON);
  const { state, handleNavToCreate } = useAppContext();
  const navToCreate = () => handleNavToCreate(COUPON);
  return (
    <CouponContainer>
      <ContentContainer>
        <div>Coupon</div>
        <div>Number of Coupons: {state[COUPON].length}</div>
        <Btn color="#fffff0" handleOnClick={navToCreate}>
          Create Coupon
        </Btn>
      </ContentContainer>
      <ListContainer>
        <List title={COUPON} data={state[COUPON]} row={CouponListRow} />
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

export default CouponList;
