import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../global/context';
import { CARD, CREATE, TREND } from '../global/reserveWord';

import Btn from './common/Btn';
import List from './common/List';
import TrendListRow from './TrendListRow';

const TrendList = () => {
  const { state, handleNavToCreate } = useAppContext();
  const navToCreate = () => handleNavToCreate(TREND);

  return (
    <TrendListContainer>
      <SummaryContainer>
        <Btn
          color="grey"
          handleOnClick={navToCreate}
          txt={CREATE + ' ' + CARD}
        />
      </SummaryContainer>
      <ListContainer>
        {!!state.trend && (
          <List title={TREND} data={state.trend} row={TrendListRow} />
        )}
      </ListContainer>
    </TrendListContainer>
  );
};

const SummaryContainer = styled.div`
  flex: 2;
`;

const ListContainer = styled.div`
  flex: 4;
`;

const TrendListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export default TrendList;
