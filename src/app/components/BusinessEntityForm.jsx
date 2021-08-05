import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TextInput from "./TextInput";

function BusinessEntityForm() {
  let originValue = useSelector((state) => state.entity);

  const [entity, setEntity] = useState(useSelector((state) => state.entity));
  const [saveResult, setSaveResult] = useState({});
  const normalizeMeta = useSelector((state) => {
    return state.meta.field.filter((_metaField) => entity[_metaField.name]);
  });

  console.log("compare", originValue, entity);

  const saveEntity = (e) => {
    e.preventDefault();
    setSaveResult({
      ...entity,
      $original: {
        ...originValue,
      },
    });
  };
  const handleInputChange = (e) => {
    setEntity({
      ...entity,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="justify-content-center d-flex">
      <div className="card p-3 col-6 mt-5">
        <h2>Business Entity</h2>
        <form onSubmit={saveEntity}>
          <div className="form-group row">
            {normalizeMeta.map((_field) => {
              return (
                <TextInput
                  handleChange={handleInputChange}
                  value={entity[_field.name]}
                  key={_field.name}
                  name={_field.label}
                  id={_field.name}
                  dataType={_field.dataType}
                />
              );
            })}
          </div>
          <button
            type="submit"
            className="form-control mt-2 btn btn-primary col-4"
          >
            Save
          </button>
          <div className="mt-4">
            <h2>Saved results print here:</h2>
            {JSON.stringify(saveResult)};
          </div>
        </form>
      </div>
    </div>
  );
}

export default BusinessEntityForm;
