import { ADD, SET, UPDATE, REMOVE } from '../global/reserveWord';
import { useAppContext } from '../global/context';

const { dispatch } = useAppContext();

function reducer(state, action) {
  const { payload } = action;
  const { type, data } = payload;
  switch (action.type) {
    case ADD:
      return {
        ...state,
        [type]: [state[type], data],
      };
    case SET:
      return {
        ...state,
        [type]: [...state[type], data],
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
      type: NONE,
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

export {
  reducer,
  dispatchAdd,
  dispatchRemove,
  dispatchSetInitial,
  dispatchSetList,
  dispatchSetInitial,
  dispatchUpdate,
};
