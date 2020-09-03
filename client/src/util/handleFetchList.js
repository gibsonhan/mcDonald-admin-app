import { useState, useEffect } from 'react';
import { getList } from './service';
import { useAppContext } from '../global/context';

export default (type) => {
  const { dispatchSetList, state } = useAppContext();

  async function fetchAndSet(type) {
    const response = await getList(type);
    dispatchSetList(type, response);
  }

  useEffect(() => {
    console.log('attempting to fetch', type);
    if (state[type].length > 0) return;
    fetchAndSet(type);
  }, []);
};
