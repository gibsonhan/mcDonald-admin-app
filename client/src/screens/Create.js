import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../global/context';

const Create = () => {
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
    <CreateContainer>
      <button onClick={goBack}> back </button>
      <button> Update </button>
    </CreateContainer>
  );
};

const CreateContainer = styled.div``;

export default Create;
