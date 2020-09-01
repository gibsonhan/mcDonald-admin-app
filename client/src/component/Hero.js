import React from 'react';
import styled from 'styled-components';
import handleFetchList from '../hooks/handleFetchList';
import { HERO } from '../global/reserveWord';

const Hero = () => {
  const heroList = handleFetchList(HERO);
  return <HeroContainer>hero Container</HeroContainer>;
};

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default Hero;
