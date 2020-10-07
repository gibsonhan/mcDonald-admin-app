import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { isEmpty } from '../util/handleIsEmpty';
import {
  MENU,
  SUBMIT,
  UPDATE,
  CREATE,
  CARD,
  TREND,
} from '../global/reserveWord';

import { getSingle } from '../util/service';
import { useAppContext } from '../global/context';

import Btn from './common/Btn';
import Form from './TrendForm';

const Trend = ({ edit, id }) => {
  const [preloadData, setPreloadData] = useState({});
  const { isLoading, setIsLoading } = useAppContext();

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
      console.log('1check resposne', rep);
      setPreloadData((prev) => rep);
      setIsLoading((prev) => false);
    }

    if (!edit) return;
    fetchSingleTrendCard();
  }, [edit]);

  useEffect(() => {
    console.log('what is preloadData', preloadData);
  }, [preloadData]);
  //Pass information into form
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
