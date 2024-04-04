import React, { useEffect } from 'react';
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
    // setTodoList(updatedList);
    localStorage.setItem('todoList', JSON.stringify(updatedList));
    
  }
  function handleView() {
    location.reload()
  }

  return (
    <>
      <div style={{ marginTop: "10%", marginBottom: "5%" }} className="container w-50 shadow">
        <div className="card-body">
          <div className='d-flex justify-content-between align-items-center mb-3'>
            <h1><strong>Todo List</strong></h1>
            <button onClick={handleView} className="btn btn-danger btn-sm ms-5">View List</button>
            <Link to={"/"} className='btn btn-success'>Home</Link>

          </div>
          <ul style={{ padding: 0, listStyle: 'none' }}>
            {todoList.map((item, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', padding: '5px'}}>
                <span style={{ flex: 1 }}>{item}</span>
                <button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm ml-2">Delete</button>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 12 }}> </p>
        </div>
      </div>
    </>
  );
}

export default Tasklist;