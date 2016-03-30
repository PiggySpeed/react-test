import * as types from './actiontypes';

export const getTodoList = () => {
  return {
    type: types.GET_TODO_LIST
  }
};
export const toggleTaskUnfinished = (taskNum) => {
  return {
    type: types.TASK_UNFINISHED,
    taskNum
  }
};
export function toggleTaskFinished(taskNum) {
  return {
    type: types.TASK_FINISHED,
    order: taskNum
  }
}
export function toggleTaskDelayed(taskNum){
  return {
    type: types.TASK_DELAYED,
    order: taskNum
  }
}