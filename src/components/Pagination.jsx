import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <>
      <div className="row">
          <div className="col-lg-6">
              <p className="m-b-0 h5">Showing {counter} of {Math.ceil(total / showPerPage)}</p>
          </div>
          <div className="col-lg-6">
              <nav aria-label="Page m-b-0">
                  <ul className="pagination pagination-flat" style={{float:'right'}}>
                      <li className="page-item">
                          <a className="page-link" onClick={() => onButtonClick("prev")}>Previous</a>
                      </li>
                      <li className="page-item">
                          <a className="page-link" onClick={() => onButtonClick("next")}>Next</a>
                      </li>
                  </ul>
              </nav>
          </div>
      </div>
    </>
  );
};

export default Pagination;