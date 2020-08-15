import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import List from '../common/List';

const Items = ({ props }) => {
  const [itemsList, setItemList] = useState([]);

  useEffect(() => {
    async function fetchItemsList() {
      const baseUrl = 'http://localhost:3001/api/item';
      const response = await axios.get(baseUrl);
      setItemList(response.data);
    }

    fetchItemsList();
  }, []);

  return (
    <ItemsContainer>
      <ItemSummaryContainer>
        <header>Items</header>
        <button>Add new item</button>
        <section>
          <input></input>
          <button>Jump To</button>
        </section>
        Number of items: {itemsList.length}
      </ItemSummaryContainer>
      <ItemListContainer>
        <List title={'Items'} data={itemsList} />
      </ItemListContainer>
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div`
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

export default Items;
