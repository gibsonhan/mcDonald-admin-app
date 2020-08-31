import React from 'react';
import styled from 'styled-components';
import Form from './CreateHeroForm';
import { HEROINPUTS } from '../global/tempData';

const CreateHero = () => {
  return (
    <CreateHeroContainer>
      <Form type="Hero" inputs={HEROINPUTS}>
        <button type="submit"> Create Hero</button>
      </Form>
    </CreateHeroContainer>
  );
};

const CreateHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CreateHero;
