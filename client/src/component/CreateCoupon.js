import React from 'react';
import styled from 'styled-components';
import Form from './CreateCouponForm';

import { COUPON } from '../global/reserveWord';
import { COUPONINPUTS } from '../global/tempData';

const CreateCoupon = () => {
  return (
    <CreateCouponContainer>
      <Form title={COUPON} inputs={COUPONINPUTS}>
        <button type="submit"> Create Coupon</button>
      </Form>
    </CreateCouponContainer>
  );
};

const CreateCouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CreateCoupon;
