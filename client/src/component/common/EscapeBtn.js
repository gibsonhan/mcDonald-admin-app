import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { useAppContext } from '../../global/context';

const EscapeBtn = () => {
  const { history } = useAppContext();
  return <EscapeContaner onClick={() => history.goBack()}>x</EscapeContaner>;
};

//TODO a fun thing would be createing the aesthethics of a website
//Then implementing a segment of it in the future
//Product design and UI/UX
const EscapeContaner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 60px;

  background: #f90;
  color: #fff;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: ${rem(30)};
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
`;
export default EscapeBtn;
