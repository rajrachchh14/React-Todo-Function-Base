import React from 'react';

export default function App() {
  return (
    <>
      <div>
        <section className="vh-100 section">
          <div className="container py-5">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className="col col-lg-9 col-xl-7">
                <div className="card rounded-3">
                  <div className="card-body p-4">
                    <h4 className="text-center my-3 pb-3">To Do App</h4>

                    <div className="row p-12">
                      <div className="col-10">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form1"
                            className="form-control"
                            placeholder="Enter a task here"
                          />
                        </div>
                      </div>

                      <div className="col-2">
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </div>

                    <table className="table mb-4">
                      <thead>
                        <tr>
                          <th scope="col">No.</th>
                          <th scope="col">Todo item</th>

                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Buy groceries for next week</td>

                          <td>
                            <button type="submit" className="btn btn-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
