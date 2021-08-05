import React from "react";
import { useSelector } from "react-redux";

function BusinessEntityForm() {
  let entity = useSelector((state) => state.entity);
  console.log("entity:::::", entity);
  return (
    <div className="justify-content-center d-flex">
      <div className="card p-3 col-6 mt-5">
        <h2>Business Entity</h2>
        <form onSubmit={() => {}}>
          <div className="form-group row">
            <label htmlFor="firstName" className="col-sm-2 col-form-label">
              First Name
            </label>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstName" />
            </div>
            <label htmlFor="lastName" className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="lastName" />
            </div>
          </div>
          <button type="submit" className="form-control mt-2 btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default BusinessEntityForm;
