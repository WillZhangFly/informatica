import React from "react";

function BusinessEntityForm() {
  return (
    <div className="justify-content-center d-flex">
      <div className="card p-3 col-6 mt-5">
        <h2>Business Entity</h2>
        <form onSubmit={() => {}}>
          <div class="form-group row">
            <label for="firstName" class="col-sm-2 col-form-label">
              First Name
            </label>
            <div class="col-sm-4">
              <input type="text" class="form-control" id="firstName" />
            </div>
            <label for="lastName" class="col-sm-2 col-form-label">
              Last Name
            </label>
            <div class="col-sm-4">
              <input type="text" class="form-control" id="lastName" />
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
