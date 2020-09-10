import React from 'react';
import styled from 'styled-components';

const ActiveBox = ({ active }) => {
  return (
    <ActiveBoxContainer>
      <div>Active Coupon</div>
      <Box active={active} />
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

const Box = styled.div`
  background: ${(props) => (!!props.active ? 'light-green' : 'red')};
  height: 25px;
  width: 25px;
`;

export default ActiveBox;
