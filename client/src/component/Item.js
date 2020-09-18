import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { CREATE, ITEM, SUBMIT, UPDATE } from '../global/reserveWord';
import { getSingle } from '../util/service';
import { useAppContext } from '../global/context';

import Btn from './common/Btn';
import Form from './ItemForm';
import { isEmpty } from '../util/handleIsEmpty';

const Item = ({ edit, id }) => {
  const { isLoading, setIsLoading } = useAppContext();
  const [preloadData, setPreloadData] = useState({});
  const buttonTxt = edit ? UPDATE + ' ' + ITEM : CREATE + ' ' + ITEM;
  const buttonRef = useRef();

  function clickInput() {
    !!buttonRef && buttonRef.current.click();
  }

  //Fetch Single Item only when Edit is enable
  useEffect(() => {
    async function fetchItem() {
      setIsLoading((prev) => true);
      const response = await getSingle(ITEM, id);
      setPreloadData(response);
      setIsLoading((prev) => false);
    }
    if (!edit) return;
    fetchItem();
  }, [edit]);

  if (isLoading) return <></>;
  return (
    <CreateItemContainer>
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
    </CreateItemContainer>
  );
};

const CreateItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Item;
