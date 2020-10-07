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
import { useAppContext } from '../global/context';

import Btn from './common/Btn';
import Form from './TrendForm';

const Trend = ({ edit, id }) => {
  const buttonRef = useRef();
  const buttonTxt = CREATE + ' ' + TREND + ' ' + CARD;

  function clickInput() {
    !!buttonRef && buttonRef.current.click();
  }

  return (
    <TrendContainer>
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
