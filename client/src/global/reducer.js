import { ADD, SET, UPDATE, REMOVE } from './reserveWord';

function reducer(state, action) {
  const { payload } = action;
  const { type, data } = payload;
  ///const { coupon, hero, item, menu } = state;
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
