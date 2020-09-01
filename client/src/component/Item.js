import React from 'react';
import styled from 'styled-components';

import List from './common/List';
import ItemListRow from './ItemListRow';

import handleFetchList from '../hooks/handleFetchList';
import { ITEM } from '../global/reserveWord';

const Item = ({ props }) => {
  const itemList = handleFetchList(ITEM);
  return (
    <ItemContainer>
      <ItemSummaryContainer>
        <header>Item</header>
        <button>Add new item</button>
        <section>
          <input></input>
          <button>Jump To</button>
        </section>
        Number of items: {itemList.length}
      </ItemSummaryContainer>
      <ItemListContainer>
        <List title={'Item'} data={itemList} row={ItemListRow} />
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
