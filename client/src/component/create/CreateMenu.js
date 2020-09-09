import React, { useRef } from 'react';
import styled from 'styled-components';

import Form from './CreateMenuForm';
import { CREATE, MENU, SUBMIT, UPDATE } from '../../global/reserveWord';

//TODO refactor the menuInput inputs
import Btn from '../common/Btn';
const CreateMenu = ({ defaultValues }) => {
  const buttonTxt = !!defaultValues ? UPDATE + ' ' + MENU : CREATE + ' ' + MENU;
  const buttonRef = useRef();

  function clickInput() {
    !!buttonRef && buttonRef.current.click();
  }
  return (
    <CreateMenuContainer>
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
    </CreateMenuContainer>
  );
};

const CreateMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CreateMenu;
