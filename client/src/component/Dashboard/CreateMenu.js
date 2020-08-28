import React from 'react';
import styled from 'styled-components';

import Form from '../common/Form';
import { MENUINPUTS } from '../../global/tempData';

const CreateMenu = ({ toggleMod }) => {
  function handleCloseModal(e) {
    e.preventDefault();
    toggleMod((prev) => !prev);
  }

  const closeModal = (e) => handleCloseModal(e);

  return (
    <CreateMenuContainer>
      <Form title={'menu'} inputs={MENUINPUTS} previewImg>
        <button type="submit"> Create Menu</button>
        <button onClick={closeModal}> Cancel </button>
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
