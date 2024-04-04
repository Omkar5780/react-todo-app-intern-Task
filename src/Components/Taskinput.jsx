import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTask } from './TaskActions';
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
      <div style={{ marginTop: "10%", marginBottom: "5%" }} className="container w-50 shadow">
        <div className="card-body">
          <div className='d-flex justify-content-around '>
            <h1>Todo List</h1>
          </div>
          <br />
          <input
            value={data}
            onChange={handleChange}
            className="form-control w-75 d-flex"
            style={{ marginTop: "-10px", marginLeft: "60px" }}
            type="text"
            placeholder=""
          />
          <br />
          <br />

          <button onClick={handleAdd} style={{ marginTop: "-12px", marginLeft: "280px" }} className="btn btn-warning w-2 ">
            <strong>Add</strong>
          </button>
          <br />
          <br />
          <button onClick={HandleClick} style={{ marginLeft: "230px" }} className='btn btn-primary w-25 '>View List</button>

          <br />
          <p style={{ fontSize: 12 }}> </p>
        </div>
      </div>
    </>
  );
}

export default Taskinput;
