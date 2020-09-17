import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { COUPON, CREATE, SUBMIT, UPDATE } from '../global/reserveWord';
import { getSingle } from '../util/service';
import { isEmpty } from '../util/handleIsEmpty';
import { useAppContext } from '../global/context';

import Form from './CouponForm';
import Btn from './common/Btn';

const Coupon = ({ edit, id }) => {
  const { isLoading, setIsLoading } = useAppContext();
  const [preloadData, setPreloadData] = useState({});
  const buttonRef = useRef();
  const buttonTxt = edit ? UPDATE + ' ' + COUPON : CREATE + ' ' + COUPON;

  function clickInput() {
    !!buttonRef && buttonRef.current.click();
  }

  useEffect(() => {
    async function getSingleCoupon() {
      setIsLoading((prev) => true);
      let response = await getSingle(COUPON, id);
      setPreloadData((prev) => response);
      setIsLoading((prev) => false);
    }

    if (!edit) return;
    getSingleCoupon();
  }, []);

  if (isLoading) return <></>;
  return (
    <CouponContainer>
      {isEmpty(preloadData) && (
        <Form>
          <Btn
            type={SUBMIT}
            clickRef={buttonRef}
            handleOnClick={clickInput}
            color="grey"
            justify="center"
            txt={buttonTxt}
          />
        </Form>
      )}
      {!isEmpty(preloadData) && (
        <Form preloadData={preloadData}>
          <Btn
            type={SUBMIT}
            clickRef={buttonRef}
            handleOnClick={clickInput}
            color="grey"
            justify="center"
            txt={buttonTxt}
          />
        </Form>
      )}
    </CouponContainer>
  );
};

const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Coupon;
