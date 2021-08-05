import React from "react";

export default function TextInput({ name, id, value, handleChange, dataType }) {
  return (
    <>
      <label htmlFor={id} className="col-sm-2 col-form-label mt-3">
        {name}
      </label>
      <div className="col-sm-4">
        <input
          value={dataType === "String" ? value : value.split("T")[0]}
          onChange={handleChange}
          type={dataType === "String" ? "text" : dataType.toLowerCase()}
          className="form-control mt-3"
          id={id}
        />
      </div>
    </>
  );
}
