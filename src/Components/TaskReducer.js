
const initialState = {
    tasks: JSON.parse(localStorage.getItem('todoList')) || []
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task, index) => index !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default taskReducer; // Exporting the reducer as default
  