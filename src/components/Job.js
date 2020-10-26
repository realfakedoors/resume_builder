import React, { Component } from "react";
import Field from "./Field";

class Job extends Component {
  render() {
    let id = this.props.jobId;
    return (
      <div className="job-form">
        <h5 className="job-header">Job #{id + 1}</h5>
        <Field name={"company-" + id} value={this.props.company} />
        <Field name={"title-" + id} value={this.props.title} />
        <Field name={"startDate-" + id} value={this.props.startDate} />
        <Field name={"endDate-" + id} value={this.props.endDate} />
        <Field
          name={"responsibilities-" + id}
          value={this.props.responsibilities}
        />
      </div>
    );
  }
}

export default Job;
