import React, { useEffect } from 'react';
import { useAppContext } from '../global/context';
import Loading from '../screens/Loading/Loading';

const AppGlobalEvent = ({ children }) => {
  const { isLoading } = useAppContext();
  return (
    <>
      <Loading isLoading={isLoading} />
      {children}
    </>
  );
};

export default AppGlobalEvent;
