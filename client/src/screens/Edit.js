import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../global/context';
import initEscapekey from '../hooks/handleEscapekey';

const Edit = () => {
  const { history } = useAppContext();
  const goBack = () => history.goBack();
  initEscapekey(goBack);

  return (
    <EditContainer>
      <button onClick={goBack}> back </button>
      <button> Update </button>
    </EditContainer>
  );
};

const EditContainer = styled.div``;

export default Edit;
