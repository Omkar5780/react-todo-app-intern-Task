
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './TaskReducer';

const store = createStore(taskReducer);

export default store;
