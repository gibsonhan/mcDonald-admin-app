import React, { useRef } from 'react';
import styled from 'styled-components';

const PreviewImg = ({ props, title, register, updatePreview }) => {
  const imgUploadRef = useRef();
  const { display, url } = props;
  const name = title + 'Img';

  function handleImgUpload(e) {
    const uploadBtn = imgUploadRef.current.firstElementChild;
    uploadBtn.click();
  }

  return (
    <PrevImgContainer onClick={() => handleImgUpload()} ref={imgUploadRef}>
      <input
        ref={register}
        accept="image/.png"
        type="file"
        id={name}
        name={name}
        onChange={(e) => updatePreview(e)}
        style={{ display: 'none' }}
      />
      {!display && 'Upload Img'}
      {display && (
        <img
          src={url}
          style={{ objectFit: 'contain', width: '100px', height: '100px' }}
        />
      )}
    </PrevImgContainer>
  );
};

const PrevImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: grey;
`;

export default PreviewImg;
