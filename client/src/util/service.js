import axios from 'axios';
import { BASEURL } from '../global/reserveWord';

async function create(type, payload) {
  const url = BASEURL + type;
  const requestConfig = {
    //TODO implement auth restrictions
    headers: { Authorization: 'temp' },
  };
  const response = await axios.post(url, payload);
  return response.data.id;
}

async function getAll(types) {
  //Create an array of promise
  const promises = types.map((type) => {
    const url = BASEURL + type;
    return axios.get(url);
  });

  //THE RXJS how to we combine the stuff
  //TODO functional program to combine to list
  const response = await Promise.all(promises);

  return response.reduce((acc, curr, indx) => {
    acc[types[indx]] = curr.data;
    return acc;
  }, {});
}

async function getList(type) {
  const url = BASEURL + type;
  const response = await axios.get(url);
  return response.data;
}

async function getSingle(type, id) {
  const url = BASEURL + type + `/${id}`;
  const response = await axios.get(url);
  return response.data;
}

async function remove(type, id) {
  const url = BASEURL + type + `/${id}`;
  const response = await axios.delete(url);
  return response.data;
}

async function update(type, id, payload) {
  const url = BASEURL + type + `/${id}`;
  const response = await axios.put(url, payload);
  console.log('checking update inside service', response);
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

export {
  create,
  getAll,
  getList,
  getSingle,
  remove,
  update,
  uploadSingleImg,
  uploadMultiImg,
};
