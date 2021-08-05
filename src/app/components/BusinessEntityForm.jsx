import React, { useState } from "react";
import { useSelector } from "react-redux";
import TextInput from "./TextInput";

function BusinessEntityForm() {
  const [entity, setEntity] = useState(useSelector((state) => state.entity));
  const normalizeMeta = useSelector((state) => {
    return state.meta.field.filter((_metaField) => entity[_metaField.name]);
  });

  const handleInputChange = (e) => {
    console.log(e);
    setEntity({
      ...entity,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="justify-content-center d-flex">
      <div className="card p-3 col-6 mt-5">
        <h2>Business Entity</h2>
        <form onSubmit={() => {}}>
          <div className="form-group row">
            {normalizeMeta.map((_field) => {
              return (
                <TextInput
                  handleChange={handleInputChange}
                  value={entity[_field.name]}
                  key={_field.name}
                  name={_field.label}
                  id={_field.name}
                />
              );
            })}
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
