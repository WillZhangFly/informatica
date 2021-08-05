import React from "react";

function BusinessEntityForm() {
  return (
    <div className="card p-3 col-6">
      <h2>Please Login</h2>
      <form onSubmit={() => {}}>
        <input
          type="text"
          placeholder="username"
          name="username"
          defaultValue="Developer"
          className="form-control"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          defaultValue=""
          className="form-control mt-2"
        />
        <button type="submit" className="form-control mt-2 btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default BusinessEntityForm;
