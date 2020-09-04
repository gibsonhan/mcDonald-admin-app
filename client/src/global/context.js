import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { ADD, REMOVE, SET, UPDATE } from './reserveWord';
import { createBrowserHistory } from 'history';

const initalState = { hero: [], item: [], menu: [], coupon: [] };
var reducerCount = 0;

function init(initalState) {
  return { initalState };
}

function reducer(state, action) {
  console.log('reducer firing');
  const { payload } = action;
  const { type, data } = payload;
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
  reducerCount++;
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
    history.push(`/create?type=${type}`, { type });
    history.go();
  }

  const values = useMemo(
    () => ({
      dispatchAdd,
      dispatchRemove,
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
      dispatchAdd,
      dispatchRemove,
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
  /*
  useEffect(() => {
    console.log('stateCheck', state);
  }, [state]);
  */
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
