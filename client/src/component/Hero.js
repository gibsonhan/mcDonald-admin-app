import React from 'react';
import styled from 'styled-components';

import { HERO } from '../global/reserveWord';
import onloadFetchList from '../util/handleFetchList';
import { useAppContext } from '../global/context';

import CreateModal from './CreateModal';
import List from './common/List';
import HeroListRow from './HeroListRow';

const Hero = () => {
  onloadFetchList(HERO);
  const { state } = useAppContext();
  return (
    <HeroContainer>
      <ContentContainer>
        <div>Hero</div>
        <div>number of hero {state[HERO].length}</div>
        <CreateModal type={HERO} />
      </ContentContainer>
      <ListContainer>
        {!state[HERO].length && 'No List'}
        {state[HERO] && (
          <List title={HERO} data={state[HERO]} row={HeroListRow} />
        )}
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
