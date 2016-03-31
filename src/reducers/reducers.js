import * as types from '../actions/actiontypes';
import update from 'react/lib/update';

const initialState = {
  cardkeys: [0,0],
  cards: [{tree: 80}]

};
const cardlistReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_TODO_LIST:
      return {
        ...state,
        cardkeys: [8, 5],
        cards: update(state.cards, {$merge: {a: 3}})
      };
    default:
      return {
        ...state,
        cards: update(state.cards, {$merge: ({a: 3})})
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