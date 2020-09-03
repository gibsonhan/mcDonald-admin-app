import React from 'react';
import styled from 'styled-components';

import { COUPON, SUBMIT } from '../global/reserveWord';
import { COUPONINPUTS } from '../global/tempData';

import Form from './CreateCouponForm';

const CreateCoupon = () => {
  return (
    <CreateCouponContainer>
      <Form title={COUPON} inputs={COUPONINPUTS}>
        <button type={SUBMIT}> Create Coupon</button>
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
