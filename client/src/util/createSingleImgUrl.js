import { uploadSingleImg } from '../util/service';

async function createSingleImgUrl(obj, name) {
  const formData = new FormData();
  formData.append('img', obj);
  formData.append('name', name);
  //TODO double check this
  Object.keys(obj).forEach((key) => formData.append(key, obj[key]));

  return await uploadSingleImg(formData);
}

export { createSingleImgUrl };
