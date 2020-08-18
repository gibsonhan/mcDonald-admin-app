import React from 'react';
import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import axios from 'axios';

//TODO Set up modal
//https://github.com/reactjs/react-modal
const Row = ({ index, data }) => {
  const hasCoupon = !!data[index].couponGroupID === false ? false : true;
  async function removeItem(id) {
    //TODO: pop up modul Confirm do you want to delete
    //TODO: move the data stuff to app Context
    try {
      const baseUrl = `http://localhost:3001/api/item/delete/${id}`;
      const response = await axios.delete(baseUrl);
      console.log('resposne', response);
    } catch (error) {
      console.log('this is a weird error', error);
    }
  }

  const { name, group, subGroup, id } = data[index];
  return (
    <RowContainer>
      <div>N: {name}</div>
      <div>G: {group}</div>
      <div>S: {subGroup}</div>
      <div>
        Active Coupon: <ActiveBox active={hasCoupon} />
      </div>
      <button>Edit</button>
      <button onClick={() => removeItem(id)}>Delete</button>
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ActiveBox = styled.div`
  background: ${(props) => (!!props.active ? 'light-green' : 'red')};
  height: 25px;
  width: 25px;
`;

const ListComp = ({ data }) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          itemData={data}
          height={height}
          width={width}
          itemCount={data.length}
          itemSize={30}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default ListComp;
