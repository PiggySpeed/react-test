import * as types from '../actions/actiontypes';

const todoReducer = (state = [1,2,3], action) => {
  console.log("working", state, action);
  switch(action.type) {
    case types.GET_TODO_LIST:
      return {
        ...state,
        todolist: [5, 8, 1]
      };
    default:
      return state
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
export default todoReducer