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

let data = {
  img: '',
  title: 'Free Fries Day',
  titleContent: 'Enjoy free Medium Fries with a minium',
  titleContent2: '$1 Mobile Order & Pay purchase',
  btnText: 'View Deals',
  btnColor: 'yellow',
  navLink: 'Deals',
  dateRestriction: 'Friday',
  legal:
    "Get free Medium Fries with a minium $1 Mobile Order & Pay purchase, tax excl. Valid 1x/ Friday thru 9/27 at participating McD. Mobile Order & Pay at participating McD. McD app registration required. © 2020 McDonald's ",
};
const CreateHero = () => {
  console.log('inside create hero');
  return (
    <CreateHeroContainer>
      <PreviewHeroCard props={data} />
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
