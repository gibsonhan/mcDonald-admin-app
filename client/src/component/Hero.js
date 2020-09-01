import React from 'react';
import styled from 'styled-components';
import handleFetchList from '../hooks/handleFetchList';
import { HERO } from '../global/reserveWord';

import CreateModal from './CreateModal';
import List from './common/List';
import MenuListRow from './MenuListRow';

const Hero = () => {
  const heroList = handleFetchList(HERO);
  return (
    <HeroContainer>
      hero container
      <CreateModal type={HERO} />
      <ListContainer>
        {!heroList.length && 'No List'}
        {!!heroList && <List title={HERO} data={heroList} row={MenuListRow} />}
      </ListContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.div``;

export default Hero;
