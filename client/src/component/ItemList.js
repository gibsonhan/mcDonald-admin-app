import React from 'react';
import styled from 'styled-components';

import onloadFetchList from '../util/handleFetchList';
import { CREATE, ITEM } from '../global/reserveWord';
import { useAppContext } from '../global/context';

import List from './common/List';
import ItemListRow from './ItemListRow';
import Btn from './common/Btn';

const ItemList = ({ props }) => {
  onloadFetchList(ITEM);
  const { state, handleNavToCreate } = useAppContext();
  const navToCreate = () => handleNavToCreate(ITEM);
  return (
    <ItemContainer>
      <ItemSummaryContainer>
        <header>Item</header>
        Number of items: {state[ITEM].length}
        <Btn
          color="#fffff0"
          handleOnClick={navToCreate}
          txt={CREATE + ' ' + ITEM}
        />
      </ItemSummaryContainer>
      <ItemListContainer>
        <List
          title={ITEM}
          data={state[ITEM]}
          row={ItemListRow}
          itemSize={250}
        />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const ItemListContainer = styled.div`
  flex: 6;
`;

export default ItemList;
