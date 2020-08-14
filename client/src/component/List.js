import React from 'react';
import styled from 'styled-components';
import { VariableSizeList as List } from 'react-window';

const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const getItemSize = (index) => rowHeights[index];

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

const Example = () => (
  <List height={150} itemCount={1000} itemSize={getItemSize} width={300}>
    {Row}
  </List>
);

const List = ({ title, data }) => {
  return (
    <ListContainer>
      <header>{title}</header>
      <Example />
    </ListContainer>
  );
};

const ListContainer = styled.div``;

export default List;
