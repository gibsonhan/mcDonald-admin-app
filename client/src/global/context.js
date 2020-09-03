import React, { useReducer, useContext, useEffect, useMemo } from 'react';
import { ADD, REMOVE, SET } from './reserveWord';

const initalState = { hero: [], item: [], menu: [], coupon: [] };

function init(initalState) {
  return { initalState };
}

function reducer(state, action) {
  const { payload } = action;
  const { type, data } = payload;
  ///const { coupon, hero, item, menu } = state;
  switch (action.type) {
    case ADD:
      return {
        ...state,
        [type]: [...state[type], data],
      };
    case SET:
      return {
        ...state,
        [type]: [...data],
      };
    case REMOVE:
      return {
        ...state,
        [type]: state[type].filter((item) => item.id != data),
      };
    default:
      throw new Error();
  }
}

const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const values = useMemo(
    () => ({
      dispatch,
      state,
    }),
    [dispatch, state],
  );
  useEffect(() => {
    console.log('stateCheck', state);
  }, [state]);
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
