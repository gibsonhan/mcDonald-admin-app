import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../global/context';

import { ADDCOUPON, ADDMENU, ADDITEM, ADDHERO } from '../global/reserveWord';

const Summary = (props) => {
  const { dispatch, state } = useAppContext();

  const test = (type) =>
    function handleDispatch() {
      dispatch({ type: type });
    };
  return (
    <SummaryContainer>
      Summary
      <button onClick={test(ADDCOUPON)}> Add</button>
      <button onClick={test(ADDMENU)}> Add</button>
      <button onClick={test(ADDITEM)}> Add</button>
      <button onClick={test(ADDHERO)}> Add</button>
    </SummaryContainer>
  );
};

const SummaryContainer = styled.div``;

export default Summary;
