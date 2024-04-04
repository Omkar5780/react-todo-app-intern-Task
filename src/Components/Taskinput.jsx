import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Home from './Home';
import { useNavigate } from 'react-router-dom';

function Taskinput() {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function handleAdd() {
    if (data.trim() !== '') {
      const existingData = JSON.parse(localStorage.getItem('todoList')) || [];
      const updatedData = [...existingData, data];
      localStorage.setItem('todoList', JSON.stringify(updatedData));
      // Clear input after adding
      setData('');
    }
  }

  function handleChange(event) {
    setData(event.target.value);
  }

  function HandleClick() {
    navigate("/tasklist");
  }

  return (
    <>
      <Home />
      <div className="container mt-5 mb-3">
        <div className="card shadow">
          <div className="card-body">
            <div className='d-flex justify-content-center'>
              <h1>Todo List</h1>
            </div>
            <div className="input-group mb-3">
              <input
                value={data}
                onChange={handleChange}
                className="form-control"
                type="text"
                placeholder="Enter task..."
              />
              <div className="input-group-append">
                <button onClick={handleAdd} className="btn btn-warning">
                  Add
                </button>
              </div>
            </div>
            <button onClick={HandleClick} className='btn btn-primary btn-block'>View List</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Taskinput;
