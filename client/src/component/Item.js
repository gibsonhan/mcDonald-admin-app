import React, { useRef } from 'react';
import styled from 'styled-components';

import {
  CREATE,
  ITEM,
  UPDATE,
  SUBMIT,
  SERVINGTIME,
} from '../global/reserveWord';

import Btn from './common/Btn';
import Form from './ItemForm';
import handleFetchPreloadValues from '../hooks/handleFetchPreloadValues';
import { ITEMVALUES_ARR } from '../global/defaultValues';
import { SERVINGTIMES } from '../global/tempData';

const Item = ({ update }) => {
  const buttonTxt = !!update ? UPDATE + ' ' + ITEM : CREATE + ' ' + ITEM;
  const buttonRef = useRef();
  const preloadData = !!update ? handleFetchPreloadValues(ITEM, update.id) : '';

  function clickInput() {
    !!buttonRef && buttonRef.current.click();
  }

  /**
   * before passing preloaded data into form,
   * need to unbind serving & prices
   *
   * TODO: Figure out why is it rendering 4 times
   */
  return (
    <CreateItemContainer>
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
    </CreateItemContainer>
  );
};

const CreateItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Item;
