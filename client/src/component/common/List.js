import React from 'react';
import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import axios from 'axios';
//TODO Set up modal

const ListComp = ({ data, row }) => {
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
          {row}
        </List>
      )}
    </AutoSizer>
  );
};

export default ListComp;
