import React from 'react';
import styled from 'styled-components';

//import Form from './common/Form';
import { COUPONINPUTS } from '../global/tempData';

const CreateCoupon = () => {
  return (
    <CreateCouponContainer>
      <button type="submit"> Create Menu</button>
    </CreateCouponContainer>
  );
};

const CreateCouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CreateCoupon;
