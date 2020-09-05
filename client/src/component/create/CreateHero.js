import React from 'react';
import styled from 'styled-components';

import { HERO, SUBMIT } from '../../global/reserveWord';

import { HEROINPUTS } from '../../global/tempData';
import PreviewHeroCard from './CreateHeroPreview';

import Form from './CreateHeroForm';

//TODO in the future
//Implementing cropping feature. Drawg and drop the image popsition
//Cropping feature, then it flattens it to jpg
//Implementing that AR tool I saw online
const CreateHero = () => {
  console.log('inside create hero');
  return (
    <CreateHeroContainer>
      <PreviewHeroCard />
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
