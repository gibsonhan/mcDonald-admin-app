import { uploadSingleImg } from '../util/service';

async function createSingleImgUrl(obj, name) {
  if (!obj[0]) return 'none';
  const formData = new FormData();
  formData.append('img', obj[0]);
  formData.append('name', name); //TODO double check this
  const response = await uploadSingleImg(formData);
  return response.data;
}

export { createSingleImgUrl };
