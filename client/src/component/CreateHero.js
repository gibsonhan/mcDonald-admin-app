import React from 'react';
import styled from 'styled-components';

//import Form from './common/Form';
import { HEROINPUTS } from '../global/tempData';

const CreateHero = () => {
  return (
    <CreateHeroContainer>
      <button type="submit"> Create Menu</button>
    </CreateHeroContainer>
  );
};

const CreateHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CreateHero;
