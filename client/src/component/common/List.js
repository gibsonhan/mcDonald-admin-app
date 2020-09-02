import React from 'react';
import { FixedSizeList as ListInput } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

const List = ({ data, row }) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <ListInput
          itemData={data}
          height={height}
          width={width}
          itemCount={data.length}
          itemSize={30}
        >
          {row}
        </ListInput>
      )}
    </AutoSizer>
  );
};

export default List;
