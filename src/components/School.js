import React from "react";
import Field from "./Field";

const School = (props) => {
  let id = props.schoolId;
  return(
    <div className="school-form">
      <h5 className="school-header">School #{id + 1}</h5>
      <Field name={'institution-' + id} />
      <Field name={'location-' + id} />
      <Field name={'degree-' + id} />
      <Field name={'focus-' + id} />
      <Field name={'dateFinished-' + id} />
    </div>
  );
}

export default School;
