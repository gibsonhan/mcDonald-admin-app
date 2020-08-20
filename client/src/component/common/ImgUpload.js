import React from 'react';
import styled from 'styled-components';

const ImgUpload = ({ title }) => {
  return (
    <ImgUploadContainer>
      <button>Upload Image</button>
    </ImgUploadContainer>
  );
};

const ImgUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export default ImgUpload;
