import React from 'react';
import styled from 'styled-components';

import CreateMenuForm from './CreateMenuForm';
import { MENUINPUTS } from '../global/tempData';

const CreateMenu = () => {
  return (
    <CreateMenuContainer>
      <CreateMenuForm title={'menu'} inputs={MENUINPUTS}>
        <button type="submit"> Create Menu</button>
      </CreateMenuForm>
    </CreateMenuContainer>
  );
};

const CreateMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CreateMenu;
