import React from 'react';
import styled from 'styled-components';

import { HERO, CREATE } from '../global/reserveWord';
import onloadFetchList from '../util/handleFetchList';
import { useAppContext } from '../global/context';

import List from './common/List';
import HeroListRow from './HeroListRow';
import Text from './common/Text';
import Btn from './common/Btn';

const Hero = () => {
  onloadFetchList(HERO);
  const { state, handleNavToCreate } = useAppContext();
  const navToCreate = () => handleNavToCreate(HERO);
  return (
    <HeroContainer>
      <ContentContainer>
        <Text>Hero</Text>
        <Text>number of hero {state[HERO].length}</Text>
        <Btn
          color="grey"
          handleOnClick={navToCreate}
          txt={CREATE + ' ' + HERO}
        />
      </ContentContainer>
      <ListContainer>
        {!state[HERO].length && 'No List'}
        {state[HERO] && (
          <List
            title={HERO}
            data={state[HERO]}
            row={HeroListRow}
            itemSize={250}
          />
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
  flex: 4;
`;

export default Hero;
