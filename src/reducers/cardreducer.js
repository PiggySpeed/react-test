import * as types from '../actions/actiontypes';

const initialState = {
  value: 8
};

const cardReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.INCREMENT:
      return {
        ...state,
        value: 1
      };
    default:
      return state
  }
};
export default cardReducer