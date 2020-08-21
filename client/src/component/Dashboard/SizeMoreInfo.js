import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { SIZEMOREINFO } from '../../global/tempData';
import PreviewImg from '../common/PreviewImg';

//Need to understand control and register
const SizeMoreInfo = ({ title, register, control }) => {
  const [prevImg, setPrevImg] = useState({ display: false, url: '' });

  function updatePreview(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    if (!file || !reader) return;
    reader.onload = () => {
      console.log('reading image');
      setPrevImg({
        display: true,
        url: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    if (!prevImg.url) return;
    //console.log('prev', prevImg.url);
  }, [prevImg]);

  //TODO: redthink the upload image
  return (
    <SizeMoreInfoContainer>
      <PreviewImg
        props={prevImg}
        register={register}
        title={title}
        updatePreview={updatePreview}
      />
      <PriceAndCalContainer>
        {SIZEMOREINFO.map((item) => (
          <Controller
            as={TextField}
            key={title + item}
            name={title + item}
            label={item}
            type={'number'}
            InputLabelProps={{ shrink: true }}
            control={control}
          />
        ))}
      </PriceAndCalContainer>
    </SizeMoreInfoContainer>
  );
};

const SizeMoreInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PriceAndCalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SizeMoreInfo;
