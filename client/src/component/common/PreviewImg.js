import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { NONE } from '../../global/reserveWord';

const PreviewImg = ({ name, register, defaultImg }) => {
  const imgUploadRef = useRef();
  const [prevImg, setPrevImg] = useState({ display: false, url: '' });
  const uniqueName = name + 'Img';

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

  //For Updating Form
  //Set image Preview if default image is passed through
  useEffect(() => {
    function setImage() {
      if (!!defaultImg) {
        setPrevImg({ display: true, url: defaultImg });
      }
    }
    setImage();
    return () => setImage();
  }, [defaultImg]);

  const noImage = !prevImg.display || prevImg.display === NONE;
  return (
    <PrevImgContainer onClick={uploadImg} ref={imgUploadRef}>
      <input
        ref={register}
        accept="image/.png"
        type="file"
        id={uniqueName}
        name={uniqueName}
        onChange={(e) => updatePreview(e)}
        style={{ display: 'none' }}
      />
      {noImage && <div>Upload Img</div>}
      {!noImage && (
        <img
          src={prevImg.url}
          style={{ objectFit: 'fill', width: '100px', height: '100px' }}
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
