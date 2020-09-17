import React from 'react';
import styled from 'styled-components';
import LoadingDots from './LoadingDots';

const Loading = ({ isLoading }) => {
  if (!isLoading) return <></>;
  return (
    <LoadingContainer>
      <LoadingDots />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  background: rgba(220, 213, 172, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
`;

export default Loading;
