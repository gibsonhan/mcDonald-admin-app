import React from 'react';
import styled from 'styled-components';

import { COUPON } from '../global/reserveWord';
import onloadFetchList from '../util/handleFetchList';
import { useAppContext } from '../global/context';

import CreateModal from './CreateModal';
import CouponListRow from './CouponListRow';
import List from './common/List';

const Coupon = () => {
  onloadFetchList(COUPON);
  const { state } = useAppContext();

  return (
    <CouponContainer>
      <ContentContainer>
        <div>Coupon</div>
        <div>Number of Coupons: {state[COUPON].length}</div>
        <CreateModal type={COUPON} />
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

export default Coupon;
