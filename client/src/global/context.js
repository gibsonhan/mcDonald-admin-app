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

function init(initalState) {
  return { initalState };
}

function reducer(state, action) {
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

  const values = useMemo(
    () => ({
      dispatchAdd,
      dispatchRemove,
      dispatchSetList,
      dispatchUpdate,
      history,
      oneModalOpen,
      setOneModalOpen,
      state,
    }),
    [dispatchAdd, dispatchRemove, dispatchSetList, dispatchUpdate, state],
  );
  useEffect(() => {
    console.log('stateCheck', state);
  }, [state]);
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
