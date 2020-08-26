export function createImgObj(_sizes, _formObj) {
  return _sizes.reduce((acc, curr) => {
    let key = curr + 'Img';
    if (_formObj[curr] === true) acc[key] = _formObj[key][0];
    return acc;
  }, {});
}
