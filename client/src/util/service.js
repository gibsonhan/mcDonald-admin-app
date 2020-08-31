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
  const url = 'http://localhost:3001/api/coupon/create';
  const requestConfig = {
    //TODO implement auth restrictions
    headers: { Authorization: 'temp' },
  };
  const response = await axios.post(url, { ...data });
  return response.data;
}

//TODO: need to refactor: remove the api from menu to a general s3/api/route
async function uploadSingleImg(data) {
  const url = 'http://localhost:3001/api/amazonS3/single-img';

  const requestConfig = {
    method: 'POST',
    config: {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  };

  const response = await axios.post(url, data, requestConfig);
  return response;
}

export { createCoupon, createItem, createMenu, uploadSingleImg };
