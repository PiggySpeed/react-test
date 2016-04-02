import * as types from '../actions/actiontypes';
import update from 'react/lib/update';

const initialState = {
  cardkeys: [0,1],
  cardtextbyid: [{0: "holo"}, {1:"hala"}],
  cardstatusbyid: [{0: "default"}, {1: "default"}]
};
const cardlistReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.TOGGLE_TODO:
      return {
        ...state,
        cardtextbyid: update(state.cardtextbyid, {[action.cardkey]: {$merge:
          {[action.cardkey]: action.cardtext}}}),
        cardstatusbyid: update(state.cardstatusbyid, {[action.cardkey]: {$merge:
          {[action.cardkey]: action.cardstatus}}})
      };
    default:
      return {
        ...state
      }
  }
};

//const task = (state = initialTaskState, action) => {
//  console.log("reducer is called with state ", state, " and action ", action);
//  switch(action.type) {
//    case types.TASK_UNFINISHED:
//      return {
//        ...state,
//        order: state.order + action.order +  "task not yet finished!"
//      };
//    case types.TASK_FINISHED:
//      return {
//        ...state,
//        order: state.order + action.order +  "task done!"
//      };
//    case types.TASK_DELAYED:
//      return {
//        ...state,
//        order: action.order
//      };
//    default:
//      return state
//  }
//};
export default cardlistReducer