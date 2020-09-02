import React from 'react';
import styled from 'styled-components';
import handleFetchList from '../hooks/handleFetchList';
import { HERO } from '../global/reserveWord';

import CreateModal from './CreateModal';
import List from './common/List';
import HeroListRow from './HeroListRow';

const Hero = () => {
  const heroList = handleFetchList(HERO);
  return (
    <HeroContainer>
      <div>Hero</div>
      <div>number of hero {heroList.length}</div>
      <ContentContainer>
        <CreateModal type={HERO} />
      </ContentContainer>
      <ListContainer>
        {!heroList.length && 'No List'}
        {heroList && <List title={HERO} data={heroList} row={HeroListRow} />}
      </ListContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const ListContainer = styled.div`
  flex: 1;
`;

export default Hero;
