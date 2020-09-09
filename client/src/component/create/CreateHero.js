import React from 'react';
import styled from 'styled-components';

import { HERO, SUBMIT } from '../../global/reserveWord';

import { HEROINPUTS } from '../../global/tempData';

import Form from './CreateHeroForm';
import Btn from '../common/Btn';

const CreateHero = ({ defaultValues }) => {
  return (
    <CreateHeroContainer>
      <Form
        type={HERO}
        inputs={HEROINPUTS}
        defaultValues={defaultValues}
      ></Form>
      <Btn color="grey" justify="center" txt="Create Hero" />
      <Btn color="grey" justify="center" txt="Update Hero" />
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
