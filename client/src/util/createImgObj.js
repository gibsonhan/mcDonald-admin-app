//TODO: Refactor and move the post upload request into this function
function createImgObj(_sizes, _formObj) {
  return _sizes.reduce((acc, curr) => {
    //TODO refactor and remove Img
    let key = curr + 'Img';
    if (_formObj[curr] === true) acc[curr] = _formObj[key][0];
    return acc;
  }, {});
}

module.exports = {
  createImgObj,
};

function ImgUploadRequst(imgObje) {
  /*
    Object.keys(imgObjg.forEach((key) => formData.append(key, imgObj[key])));
    formData.append('files', sizeImg);
    formData.append('name', name);

    const requestConfig = {
      method: 'POST',
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    };
    const uploadUrl = 'http://localhost:3001/api/item/img-upload';
    const response = await axios.post(uploadUrl, formData, requestConfig);
    console.log('repsonse', response.data);
    */
}
