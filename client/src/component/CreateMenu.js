import React from 'react';
import styled from 'styled-components';

import Form from './CreateMenuForm';
import { MENU, SUBMIT } from '../global/reserveWord';
import { MENUINPUTS } from '../global/tempData';

const CreateMenu = () => {
  return (
    <CreateMenuContainer>
      <Form title={MENU} inputs={MENUINPUTS}>
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
