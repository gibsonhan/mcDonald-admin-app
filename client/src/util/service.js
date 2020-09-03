import axios from 'axios';
import { BASEURL } from '../global/reserveWord';

async function create(type, payload) {
  const url = BASEURL + type;
  const requestConfig = {
    //TODO implement auth restrictions
    headers: { Authorization: 'temp' },
  };
  const response = await axios.post(url, payload);
  return response.data;
}

async function getList(type) {
  const url = BASEURL + type;
  const response = await axios.get(url);
  return response.data;
}

async function getSingle(type, id) {
  const url = BASEURL + type + `${id}`;
  const response = await axios.get(url);
  return response.data;
}

async function remove(id, type) {
  const url = BASEURL + type + `/${id}`;
  const response = await axios.delete(url);
  return response.data;
}

//TODO: need to refactor: remove the api from menu to a general s3/api/route
async function uploadSingleImg(data) {
  const url = BASEURL + 'amazonS3/single-img';
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
  const url = BASEURL + 'amazonS3/multi-img';
  const requestConfig = {
    method: 'POST',
    config: {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  };
  const response = await axios.post(url, data, requestConfig);
  return response.data;
}

//TODO replace the single and multi upload fucntions
async function uploadImg(type, data) {
  const url = BASEURL + `amazons3/${type}-img`;
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
  create,
  getList,
  getSingle,
  remove,
  uploadSingleImg,
  uploadMultiImg,
  uploadImg,
};
