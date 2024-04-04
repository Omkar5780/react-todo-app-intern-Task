// TaskActions.js
export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task
    };
  };
  
  export const removeTask = (index) => {
    return {
      type: 'REMOVE_TASK',
      payload: index
    };
  };
  
  