import React from 'react';
import styled from 'styled-components';

import Form from './CreateMenuForm';
import { MENUINPUTS } from '../global/tempData';

const CreateMenu = () => {
  return (
    <CreateMenuContainer>
      <Form title={'menu'} inputs={MENUINPUTS}>
        <button type="submit"> Create Menu</button>
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
