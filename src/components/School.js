import React, { Component } from "react";
import Field from "./Field";

class School extends Component {  
  render() {
    let id = this.props.schoolId;
    return(
      <div className="school-form">
        <h5 className="school-header">School #{id + 1}</h5>
        <Field name={'institution-' + id} value={this.props.institution} />
        <Field name={'location-' + id} value={this.props.location} />
        <Field name={'degree-' + id} value={this.props.degree} />
        <Field name={'focus-' + id} value={this.props.focus} />
        <Field name={'dateFinished-' + id} value={this.props.dateFinished} />
      </div>
    );
  }
}

export default School;
