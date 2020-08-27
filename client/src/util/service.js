import axios from 'axios';

async function createItem(data) {
  const url = 'http://localhost:3001/api/item/create';
  const requestConfig = {
    //TODO implement auth restrictions
    headers: { Authorization: 'temp' },
  };
  return await axios.post(url, { ...data });
}

export { createItem };
