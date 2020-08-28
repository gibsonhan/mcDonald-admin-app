import axios from 'axios';

async function createItem(data) {
  const url = 'http://localhost:3001/api/item/create';
  const requestConfig = {
    //TODO implement auth restrictions
    headers: { Authorization: 'temp' },
  };
  return await axios.post(url, { ...data });
}

async function createMenu(data) {
  const url = 'http://localhost:3001/api/menu/create';
  const requestConfig = {
    //TODO implement auth restrictions
    headers: { Authorization: 'temp' },
  };
  return await axios.post(url, { ...data });
}

async function createCoupon(data) {
  const url = 'http://localhost:3001/api/coupon/';
  const requestConfig = {
    //TODO implement auth restrictions
    headers: { Authorization: 'temp' },
  };
  return await axios.post(url, { ...data });
}

async function uploadSingleImg(data) {
  const url = 'https//localhost:3001/api/menu/upload-img';

  const requestConfig = {
    method: 'POST',
    config: {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  };

  const response = await axios.post(url, data, requestConfig);
  return response.data;
}

export { createCoupon, createItem, createMenu, uploadSingleImg };
