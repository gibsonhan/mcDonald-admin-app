import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import List from '../common/List';

const Items = ({ props }) => {
  const [itemslist, setItemList] = useState([]);

  useEffect(async () => {
    try {
      const baseUrl = 'http://localhost:30001/api/items';
      const response = await axios.get(baseUrl);
      setItemList(response);
      console.log(response);
    } catch (error) {
      console.log('failed to load list');
    }
  }, []);
  return (
    <ItemsContainer>
      Items
      <List title={'Items'} data={itemslist} />
      {console.log('list')}
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div``;

export default Items;
