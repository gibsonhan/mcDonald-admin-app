import axios from 'axios';
const baseUrl = 'http://localhost:3001/api';

async function createCoupon(data) {
  const url = baseUrl + '/create';
  const requestConfig = {
    //TODO implement auth restrictions
    headers: { Authorization: 'temp' },
  };
  const response = await axios.post(url, { ...data });
  return response.data;
}
async function createHero(data) {
  const url = baseUrl + 'api/hero/create';
  const requestConfig = {
    //TODO implement auth restrictions
    headers: { Authorization: 'temp' },
  };
  const response = await axios.post(url, { ...data });
  return response.data;
}

async function createItem(data) {
  const url = baseUrl + '/item/create';
  const requestConfig = {
    //TODO implement auth restrictions
    headers: { Authorization: 'temp' },
  };
  return await axios.post(url, { ...data });
}

async function createMenu(data) {
  const url = baseUrl + '/menu/create';
  const requestConfig = {
    //TODO implement auth restrictions
    headers: { Authorization: 'temp' },
  };
  return await axios.post(url, { ...data });
}

async function getItemList() {
  const url = baseUrl + '/item';
  const response = await axios.get(url);
  return response.data;
}

async function getList(type) {
  const url = baseUrl + `/${type}`;
  const response = await axios.get(url);
  return response.data;
}

async function getItem(data) {}

async function getCoupon(data) {}

async function getMenu(data) {}

async function getHero(data) {}
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
  return response.data;
}

async function uploadMultiImg(data) {
  const url = 'http://localhost:3001/api/amazonS3/multi-img';

  const requestConfig = {
    method: 'POST',
    config: {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  };
  const response = await axios.post(url, data, requestConfig);
  return response.data;
}

export {
  createCoupon,
  createHero,
  createItem,
  createMenu,
  getList,
  uploadSingleImg,
  uploadMultiImg,
};
