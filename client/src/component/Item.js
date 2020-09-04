import React from 'react';
import styled from 'styled-components';

import CreateModal from './CreateModal';
import List from './common/List';
import ItemListRow from './ItemListRow';

import onloadFetchList from '../util/handleFetchList';
import { ITEM } from '../global/reserveWord';
import { useAppContext } from '../global/context';

const Item = ({ props }) => {
  onloadFetchList(ITEM);
  const { state, handleNavToCreate } = useAppContext();
  const navToCreate = () => handleNavToCreate(ITEM);
  return (
    <ItemContainer>
      <ItemSummaryContainer>
        <header>Item</header>
        Number of items: {state[ITEM].length}
        <button onClick={navToCreate}> Create {ITEM}</button>
      </ItemSummaryContainer>
      <ItemListContainer>
        <List title={'Item'} data={state[ITEM]} row={ItemListRow} />
      </ItemListContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ItemSummaryContainer = styled.div`
  flex: 2;
`;
const ItemListContainer = styled.div`
  flex: 6;
`;

export default Item;
