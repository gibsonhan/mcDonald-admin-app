import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/';

async function create(type, payload) {
  const url = baseUrl + type;
  const requestConfig = {
    //TODO implement auth restrictions
    headers: { Authorization: 'temp' },
  };
  const response = await axios.post(url, payload);
  return response.data;
}

async function getList(type) {
  const url = baseUrl + type;
  const response = await axios.get(url);
  return response.data;
}

async function getSingle(type, id) {
  const url = baseUrl + type + `${id}`;
  const response = await axios.get(url);
  return response.data;
}

async function remove(id, type) {
  const url = baseUrl + type + `/${id}`;
  const response = await axios.delete(url);
  return response.data;
}

//TODO: need to refactor: remove the api from menu to a general s3/api/route
async function uploadSingleImg(data) {
  const url = baseUrl + 'amazonS3/single-img';

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
  const url = baseUrl + 'amazonS3/multi-img';

  const requestConfig = {
    method: 'POST',
    config: {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  };
  const response = await axios.post(url, data, requestConfig);
  return response.data;
}

export { create, getList, remove, uploadSingleImg, uploadMultiImg };
