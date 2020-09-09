import React from 'react';
import styled from 'styled-components';

import { HERO, SUBMIT } from '../../global/reserveWord';

import { HEROINPUTS } from '../../global/tempData';

import Form from './CreateHeroForm';

const CreateHero = () => {
  return (
    <CreateHeroContainer>
      <Form type={HERO} inputs={HEROINPUTS}>
        <button type={SUBMIT}> Create {HERO}</button>
      </Form>
    </CreateHeroContainer>
  );
};

const CreateHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export default CreateHero;
