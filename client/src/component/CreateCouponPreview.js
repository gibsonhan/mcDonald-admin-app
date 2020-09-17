import React from 'react';
import styled from 'styled-components';

//This is s a feature to add
const CreateCouponPreview = ({ title, expiration }) => {
  return (
    <CouponPreviewContainer>
      <Bar>
        <div id="circle" />
      </Bar>
      <Content>
        <Title>{title}</Title>
        <Expiration>{expiration}</Expiration>
      </Content>
    </CouponPreviewContainer>
  );
};

const CouponPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: pink;
  width: 300px;
`;

const Bar = styled.div``;

const Content = styled.div``;
const Title = styled.div``;
const Expiration = styled.div``;

export default CreateCouponPreview;
