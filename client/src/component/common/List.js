import React from 'react';
import { FixedSizeList as ListInput } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

const List = ({ data, row, itemSize }) => {
  const itmSize = !!itemSize ? itemSize : 30;
  return (
    <AutoSizer>
      {({ height, width }) => (
        <ListInput
          itemData={data}
          height={height}
          width={width}
          itemCount={data.length}
          itemSize={itmSize}
        >
          {row}
        </ListInput>
      )}
    </AutoSizer>
  );
};

export default List;
