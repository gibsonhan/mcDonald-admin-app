import React from 'react';
import styled from 'styled-components';

import Form from './CreateMenuForm';
import { MENU, SUBMIT, ADD } from '../global/reserveWord';
import { MENUINPUTS } from '../global/tempData';

import { useAppContext } from '../global/context';

const CreateMenu = () => {
  const { dispatch } = useAppContext();

  const handleDispatch = (data) => {
    dispatch({
      type: ADD,
      payload: {
        data: data,
        type: MENU,
      },
    });
  };

  return (
    <CreateMenuContainer>
      <Form title={MENU} inputs={MENUINPUTS} updateLocalState={handleDispatch}>
        <button type={SUBMIT}> Create Menu</button>
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
