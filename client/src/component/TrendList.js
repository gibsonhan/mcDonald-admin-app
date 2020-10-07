import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../global/context';
import { CARD, CREATE, TREND } from '../global/reserveWord';

import Btn from './common/Btn';
import List from './common/List';
import TrendListRow from './MenuListRow';

const TrendList = () => {
  const { state, handleNavToCreate } = useAppContext();
  const navToCreate = () => handleNavToCreate(TREND);

  return (
    <TrendListContainer>
      <Btn color="grey" handleOnClick={navToCreate} txt={CREATE + ' ' + CARD} />
      <ListContainer>
        {!!state.trend && (
          <List title={TREND} data={state.trend} row={TrendListRow} />
        )}
      </ListContainer>
    </TrendListContainer>
  );
};

const ListContainer = ({ props }) => {
  return <Row />;
};

const Row = () => {
  return (
    <div>
      {' '}
      Card name: <button> edit </button> <button> delete</button>
    </div>
  );
};

const TrendListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export default TrendList;
