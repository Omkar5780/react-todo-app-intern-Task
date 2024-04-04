import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeTask } from './TaskActions';

function Tasklist() {
  const todoList = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  function handleDelete(index) {
    dispatch(removeTask(index)); // Dispatch action to remove task
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(updatedList));
  }

  function handleView() {
    location.reload();
  }

  return (
    <>
      <div className="container mt-5 mb-3">
        <div className="card shadow">
          <div className="card-body">
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <h1><strong>Todo List</strong></h1>
              <div>
                <button onClick={handleView} className="btn btn-danger btn-sm">View List</button>
                <Link to={"/"} className='btn btn-success ms-2'>Home</Link>
              </div>
            </div>
            <ul className="list-group">
              {todoList.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{item}</span>
                  <button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm">Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tasklist;
