import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';

import { COUPON, HERO, ITEM, MENU, INITIALSTATE } from '../global/reserveWord';
import { ADD, NONE, REMOVE, SET, SETINITIAL, UPDATE } from './reserveWord';
import { createBrowserHistory } from 'history';
import { getAll } from '../util/service';
import {
  setLocalStorage,
  getLocalStorage,
} from '../util/handleSetLocalStorage';

const initalState = { hero: [], item: [], menu: [], coupon: [] };

function init(initalState) {
  return { ...initalState };
}

function reducer(state, action) {
  const { payload } = action;
  const { type, data } = payload;
  switch (action.type) {
    case SETINITIAL:
      return init(data);
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
    case UPDATE:
      return {
        ...state,
        [type]: state[type].map((item) => (item.id === data.id ? data : item)),
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
  const [oneModalOpen, setOneModalOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initalState);
  const history = createBrowserHistory();

  const dispatchAdd = (type, data) => {
    dispatch({
      type: ADD,
      payload: {
        type: type,
        data: data,
      },
    });
  };

  const dispatchRemove = (type, data) => {
    dispatch({
      type: REMOVE,
      payload: {
        type: type,
        data: data,
      },
    });
  };

  const dispatchSetList = (type, data) => {
    dispatch({
      type: SET,
      payload: {
        type: type,
        data: data,
      },
    });
  };

  const dispatchSetInitial = (data) => {
    dispatch({
      type: SETINITIAL,
      payload: {
        type: NONE,
        data: data,
      },
    });
  };

  const dispatchUpdate = (type, data) => {
    dispatch({
      type: UPDATE,
      payload: {
        type: type,
        data: data,
      },
    });
  };

  function handleNavEditPage(type, id) {
    history.push(`/edit?type=${type}`, { type, id });
    history.go();
  }

  function handleNavToCreate(type) {
    history.push(`/create?type=${type}`, type);
    history.go();
  }

  const values = useMemo(
    () => ({
      dispatch,
      dispatchAdd,
      dispatchRemove,
      dispatchSetInitial,
      dispatchSetList,
      dispatchUpdate,
      history,
      oneModalOpen,
      setOneModalOpen,
      handleNavEditPage,
      handleNavToCreate,
      state,
    }),
    [
      dispatch,
      dispatchAdd,
      dispatchRemove,
      dispatchSetInitial,
      dispatchSetList,
      dispatchUpdate,
      history,
      oneModalOpen,
      setOneModalOpen,
      handleNavEditPage,
      handleNavToCreate,
      state,
    ],
  );

  /**
   *  On load get All list
   *  Set it to local storage
   *
   */

  //TODO need to figure updating local state strategy
  //Need to diagram these stuff?
  useEffect(() => {
    const hasInitalState = getLocalStorage(INITIALSTATE);
    async function getListsAndSetLocalStorage() {
      const types = [COUPON, HERO, ITEM, MENU];
      const response = await getAll(types);
      dispatchSetInitial(response);
      setLocalStorage(INITIALSTATE, response);
    }

    !hasInitalState
      ? getListsAndSetLocalStorage()
      : dispatchSetInitial(hasInitalState);

    return () => getListsAndSetLocalStorage();
  }, []);

  useEffect(() => {
    console.log('stateCheck', state);
  }, [state]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
