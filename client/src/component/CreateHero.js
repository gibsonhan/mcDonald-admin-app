import React from 'react';
import styled from 'styled-components';

import Form from './common/Form';
import { HEROINPUTS } from '../global/tempData';

const CreateHero = () => {
  return (
    <CreateHeroContainer>
      <Form title={'hero'} inputs={HEROINPUTS}>
        <button type="submit"> Create Menu</button>
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
