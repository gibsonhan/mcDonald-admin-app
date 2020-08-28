import React from 'react';
import styled from 'styled-components';

const CreateMenu = () => {
  function handleCreateMenu(e) {
    console.log('create menu');
  }

  function handleCloseModal(e) {
    console.log('Me');
  }

  const createMenu = handleCreateMenu();
  const closeModal = handleCloseModal();
  return (
    <CreateMenuContainer>
      <button onClick={createMenu}> Create Menu</button>
      <button onClick={closeModal}> Cancel </button>
    </CreateMenuContainer>
  );
};

const CreateMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CreateMenu;
