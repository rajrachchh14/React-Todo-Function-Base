import React, { useState } from 'react';
import List from './List';

export default function App() {
  const [taskName, setTaskName] = useState('');
  const [taskList, setTaskList] = useState([]);

  let InputValue = (e) => {
    setTaskName(e.target.value);
  };

  let Submit = () => {
    setTaskList((oldValue) => {
      // Old array + New items Merge and Return New array
      return [...oldValue, taskName];
    });
    setTaskName('');
  };

  let deleteItems = (id) => {
    console.log('clickem');
    setTaskList((oldValue) => {
      return oldValue.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>

                <div className="row p-12">
                  <div className="col-9">
                    <div className="form-outline">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a task here"
                        name="taskName"
                        onChange={InputValue}
                        value={taskName}
                      />
                    </div>
                  </div>

                  <div className="col-2">
                    <button
                      type="submit"
                      className="btn btn-dark"
                      onClick={Submit}
                    >
                      Save
                    </button>
                  </div>
                </div>

                <table className="table mb-4">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taskList.map((items, index) => {
                      return (
                        <List
                          key={index}
                          id={index}
                          name={items}
                          delete={deleteItems}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
