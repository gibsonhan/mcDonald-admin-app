import React, { useRef } from 'react';
import styled from 'styled-components';

import { CREATE, ITEM, UPDATE, SUBMIT } from '../global/reserveWord';

import Btn from './common/Btn';
import Form from './ItemForm';

const Item = ({ preloadValues }) => {
  const buttonTxt = !!preloadValues ? UPDATE + ' ' + ITEM : CREATE + ' ' + ITEM;
  const buttonRef = useRef();

  function clickInput() {
    !!buttonRef && buttonRef.current.click();
  }
  return (
    <CreateItemContainer>
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
    </CreateItemContainer>
  );
};

const CreateItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Item;
