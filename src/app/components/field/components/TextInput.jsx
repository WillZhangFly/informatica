import React from "react";

export default function TextInput({ name, id, value, handleChange }) {
  return (
    <>
      <label htmlFor={id} className="col-sm-2 col-form-label mt-3">
        {name}
      </label>
      <div className="col-sm-4">
        <input
          value={value}
          onChange={handleChange}
          type="text"
          className="form-control mt-3"
          id={id}
        />
      </div>
    </>
  );
}
