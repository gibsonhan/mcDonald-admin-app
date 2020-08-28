import React from 'react';
import styled from 'styled-components';

import Form from './common/Form';
import { COUPONINPUTS } from '../global/tempData';

const CreateCoupon = () => {
  return (
    <CreateCouponContainer>
      <Form title={'coupon'} inputs={COUPONINPUTS}>
        <button type="submit"> Create Menu</button>
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
