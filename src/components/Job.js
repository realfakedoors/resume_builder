import React from "react";
import Field from "./Field";

const Job = (props) => {
  let id = props.jobId;
  return (
    <div className="job-form">
      <h5 className="job-header">Job #{id + 1}</h5>
      <Field name={"company-" + id} />
      <Field name={"title-" + id} />
      <Field name={"startDate-" + id} />
      <Field name={"endDate-" + id} />
      <Field name={"responsibilities-" + id} />
    </div>
  );
}

export default Job;
