import React from 'react';
import styled from 'styled-components';

import { HERO } from '../global/reserveWord';
import { remove } from '../util/service';

//TODO recreate the coupon here?
const HeroListRow = ({ index, data }) => {
  const { title, id, ...rowObj } = data[index];
  const removeHero = () => remove(id, HERO);
  return (
    <RowContainer>
      <div>{title}</div>
      <button>Edit</button>
      <button onClick={removeHero}>Delete</button>
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export default HeroListRow;

const Hero = () => {
  return <HeroContainer>Hello World</HeroContainer>;
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
`;
