import React, { useRef } from 'react';
import styled from 'styled-components';

const ImgUpload = ({ title, register }) => {
  const name = title + 'Img';
  const imgUploadRef = useRef();

  function triggerImgUpload(e) {
    imgUploadRef.current.firstChild.click();
  }

  //TODO.
  //[]Upload image should naming should be limited
  //[]Specific dimension of image
  //[]Limit size of upload
  // this is to be done with the schemea stuff

  //TODO
  //UI design
  //Upading a picture next to the calories, gott ahave the assets
  //that shows no imtem when not uploading
  //www.google.com/search?q=how+to+upload+image+to+mogodb&oq=how+to+upload+image+to+mogodb&aqs=chrome..69i57j0l2.5932j0j4&sourceid=chrome&ie=UTF-8
  https: return (
    <ImgUploadContainer ref={imgUploadRef}>
      <input
        ref={register}
        accept="image/*"
        type="file"
        id={name}
        name={name}
        style={{ display: 'none' }}
      />
      <button onClick={(e) => triggerImgUpload(e)}> Upload Image </button>
    </ImgUploadContainer>
  );
};

const ImgUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export default ImgUpload;
