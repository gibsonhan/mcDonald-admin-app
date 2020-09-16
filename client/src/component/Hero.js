import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { isEmpty } from '../util/handleIsEmpty';
import { HERO, UPDATE, CREATE, SUBMIT } from '../global/reserveWord';
import { getSingle } from '../util/service';
import { useAppContext } from '../global/context';

import Btn from './common/Btn';
import Form from './HeroForm';

const Hero = ({ edit, id }) => {
  const [preloadData, setPreloadData] = useState({});
  const { history, setIsLoading } = useAppContext();
  const buttonRef = useRef();
  const buttonTxt = edit ? UPDATE + ' ' + HERO : CREATE + ' ' + HERO;

  function clickInput() {
    !!buttonRef && buttonRef.current.click();
  }

  useEffect(() => {
    async function getSingleHero() {
      setIsLoading((prev) => true);
      const response = await getSingle(HERO, id);
      setPreloadData(response);
      setTimeout(() => {
        setIsLoading((prev) => false);
      }, 2000);
    }

    if (!edit) return;
    console.log('return?');
    getSingleHero();
  }, [edit]);

  return (
    <HeroContainer>
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
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Hero;
