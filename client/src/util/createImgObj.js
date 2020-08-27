import axios from 'axios';
//TODO: Refactor and move the post upload request into this function

export async function createImgObj(_sizes, _name, _formObj) {
  console.log('request');
  const sizeImgObj = filterSizeImgObj(_sizes, _formObj);
  const formData = new FormData();
  formData.append('files', sizeImgObj);
  formData.append('name', _name);

  Object.keys(sizeImgObj).forEach((key) =>
    formData.append(key, sizeImgObj[key]),
  );

  const s3_sizeImgObj = await ImgUploadRequest(formData);
  return s3_sizeImgObj.data;
}

function filterSizeImgObj(_sizes, _formObj) {
  return _sizes.reduce((acc, curr) => {
    let key = curr + 'Img';
    if (_formObj[curr] === true) acc[curr] = _formObj[key][0];
    return acc;
  }, {});
}

async function ImgUploadRequest(data) {
  const uploadUrl = 'http://localhost:3001/api/item/img-upload';
  const requestConfig = {
    method: 'POST',
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  };
  return await axios.post(uploadUrl, data, requestConfig);
}
