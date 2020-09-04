import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../global/context';

const Edit = () => {
  const { history } = useAppContext();
  const goBack = () => history.goBack();

  function escapeGoBack(e) {
    if (e.key === 'Escape') {
      goBack();
    }
  }

  useEffect(() => {
    console.log(history);
    window.addEventListener('keydown', escapeGoBack);
    return () => window.removeEventListener('keydown', escapeGoBack);
  }, []);

  return (
    <EditContainer>
      <button onClick={goBack}> back </button>
      <button> Update </button>
    </EditContainer>
  );
};

const EditContainer = styled.div``;

export default Edit;
