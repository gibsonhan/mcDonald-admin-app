import axios from 'axios';
//TODO: Refactor and move the post upload request into this function

function isEmpty(obj) {
  for (let i in obj) return false;
  return true;
}

function filterSizeImgObj(_sizes, _formObj) {
  return _sizes.reduce((acc, curr) => {
    let key = curr + 'Img';
    let file = _formObj[key][0];
    if (!!_formObj[curr] && !!file) acc[curr] = file;
    return acc;
  }, {});
}

async function ImgUploadRequest(data) {
  const uploadUrl = 'http://localhost:3001/api/amazons3/multi-img';
  const requestConfig = {
    method: 'POST',
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  };

  const response = await axios.post(uploadUrl, data, requestConfig);
  return response.data;
}

export async function createImgObj(_name, _formObj) {
  const ITEMSIZES = ['xSmall', 'small', 'regular', 'large', 'xLarge'];
  const sizeImgObj = filterSizeImgObj(ITEMSIZES, _formObj);

  if (isEmpty(sizeImgObj)) {
    console.log('is empty firing');
    return {
      xSmall: 'none',
      small: 'none',
      regular: 'none',
      large: 'none',
      xLarege: 'none',
    };
  }

  const formData = new FormData();
  formData.append('files', sizeImgObj);
  formData.append('name', _name);
  Object.keys(sizeImgObj).forEach((key) =>
    formData.append(key, sizeImgObj[key]),
  );

  const s3_sizeImgObj = await ImgUploadRequest(formData);

  return ITEMSIZES.reduce((acc, curr) => {
    acc[curr] = !!s3_sizeImgObj[curr] ? s3_sizeImgObj[curr] : 'none';
    return acc;
  }, {});

  console.log(test);
}
