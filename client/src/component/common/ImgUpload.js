import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const ImgUpload = ({ title, register }) => {
  const [hasImg, setHasImg] = useState({
    uploaded: false,
    image: [],
  });
  const name = title + 'Img';
  const imgUploadRef = useRef();

  function triggerImgUpload(e) {
    e.preventDefault();
    imgUploadRef.current.firstChild.click();
  }

  function updatePreview(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    if (!file || !reader) return;

    reader.onload = () => {
      console.log('reading image');
      setHasImg({
        uploaded: true,
        prevUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
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

  //TODO Add image convertor? -https://github.com/scionoftech/webp-converter

  //TODO Preview Image before tehy are uploaded https://stackoverflow.com/questions/55526876/reactjs-preview-multiple-images-before-upload
  return (
    <ImgUploadContainer ref={imgUploadRef}>
      <input
        ref={register}
        accept="image/.png"
        type="file"
        id={name}
        name={name}
        onChange={(e) => updatePreview(e)}
        style={{ display: 'none' }}
      />
      {!!hasImg.uploaded && <img src={hasImg.prevUrl} />}
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
