// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/Store';
import Taskinput from './Components/Taskinput';
import TaskList from './Components/Tasklist';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Taskinput />} />
          <Route path="/tasklist" element={<TaskList />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
