import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const PreviewImg = ({ title, register }) => {
  const imgUploadRef = useRef();
  const [prevImg, setPrevImg] = useState({ display: false, url: '' });
  const name = title + 'Img';

  const uploadImg = function handleImgUpload(e) {
    const uploadBtn = imgUploadRef.current.firstElementChild;
    uploadBtn.click();
  };

  function updatePreview(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    if (!file || !reader) return;
    reader.onload = () => {
      setPrevImg({
        display: true,
        url: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  return (
    <PrevImgContainer onClick={uploadImg} ref={imgUploadRef}>
      <input
        ref={register}
        accept="image/.png"
        type="file"
        id={name}
        name={name}
        onChange={(e) => updatePreview(e)}
        style={{ display: 'none' }}
      />
      {!prevImg.display && 'Upload Img'}
      {prevImg.display && (
        <img
          src={prevImg.url}
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
