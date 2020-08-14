import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Entry = () => {
  let { entryID } = useParams();
  return <EntryContainer>Entry</EntryContainer>;
};

const EntryContainer = styled.div``;

export default Entry;
