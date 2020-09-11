import React, { useRef } from 'react';
import styled from 'styled-components';

import { COUPON, CREATE, SUBMIT, UPDATE } from '../global/reserveWord';
import { COUPONINPUTS } from '../global/tempData';

import Form from './CouponForm';
import Btn from './common/Btn';

const Coupon = ({ defaultValues }) => {
  const buttonRef = useRef();
  const buttonTxt = !!defaultValues
    ? UPDATE + ' ' + COUPON
    : CREATE + ' ' + COUPON;

  function clickInput() {
    !!buttonRef && buttonRef.current.click();
  }

  return (
    <CouponContainer>
      <Form title={COUPON} inputs={COUPONINPUTS} defaultValues={defaultValues}>
        <Btn
          type={SUBMIT}
          clickRef={buttonRef}
          handleOnClick={clickInput}
          color="grey"
          justify="center"
          txt={buttonTxt}
        />
      </Form>
    </CouponContainer>
  );
};

const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Coupon;
