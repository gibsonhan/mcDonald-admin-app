import React from 'react';
import { FixedSizeList as ListInput } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { isEmpty } from '../../util/handleIsEmpty';

const List = ({ data, row, itemSize, props }) => {
  const itmSize = !!itemSize ? itemSize : 30;
  console.log('checking props from list', props);
  const dataObj = isEmpty(props) ? data : { ...data, ...props };
  return (
    <AutoSizer>
      {({ height, width }) => (
        <ListInput
          itemData={dataObj}
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
