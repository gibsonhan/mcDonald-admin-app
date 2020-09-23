import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { isEmpty } from '../util/handleIsEmpty';
import { getSingle } from '../util/service';
import { MENU, SUBMIT, UPDATE, CREATE } from '../global/reserveWord';
import { useAppContext } from '../global/context';

import Btn from './common/Btn';
import Form from './MenuForm';

const Menu = ({ edit, id }) => {
  const [preloadData, setPreloadData] = useState({});
  const { isLoading, setIsLoading } = useAppContext();
  const buttonRef = useRef();
  const buttonTxt = !!edit ? UPDATE + ' ' + MENU : CREATE + ' ' + MENU;

  function clickInput() {
    !!buttonRef && buttonRef.current.click();
  }

  useEffect(() => {
    async function fetchSingleMenu() {
      setIsLoading((prev) => true);
      const response = await getSingle(MENU, id);
      setPreloadData((prev) => response);
      setTimeout(() => {
        setIsLoading((prev) => false);
      }, 2000);
    }

    if (!edit) return;
    fetchSingleMenu();
  }, [edit]);

  if (isLoading) return <></>;
  return (
    <MenuContainer>
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
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Menu;
