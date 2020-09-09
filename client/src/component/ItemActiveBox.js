import React from 'react';
import styled from 'styled-components';

const ItemActiveBox = ({ active }) => {
  return (
    <ActiveBoxContainer>
      <div>Active Coupon</div>
      <ActiveBox active={active} />
    </ActiveBoxContainer>
  );
};

const ActiveBoxContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    margin-right: 10px;
  }
`;

const ActiveBox = styled.div`
  background: ${(props) => (!!props.active ? 'light-green' : 'red')};
  height: 25px;
  width: 25px;
`;

export default ItemActiveBox;
