import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { isEmpty } from '../util/handleIsEmpty';
import { SUBMIT, UPDATE, CREATE, CARD, TREND } from '../global/reserveWord';

import { getSingle } from '../util/service';
import { useAppContext } from '../global/context';

import Btn from './common/Btn';
import Form from './TrendForm';

const Trend = ({ edit, id }) => {
  const [preloadData, setPreloadData] = useState({});
  const { setIsLoading } = useAppContext();

  const buttonRef = useRef();
  const buttonTxt = !edit
    ? CREATE + ' ' + TREND + ' ' + CARD
    : UPDATE + ' ' + ' ' + TREND;

  function clickInput() {
    !!buttonRef && buttonRef.current.click();
  }

  useEffect(() => {
    async function fetchSingleTrendCard() {
      setIsLoading((prev) => true);
      const rep = await getSingle(TREND, id);
      setPreloadData((prev) => rep);
      setIsLoading((prev) => false);
    }

    if (!edit) return;
    fetchSingleTrendCard();
  }, [edit]);

  return (
    <TrendContainer>
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
    </TrendContainer>
  );
};

const TrendContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Trend;
