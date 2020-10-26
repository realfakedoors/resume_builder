import React, { Component } from "react";
import ReactDOM from "react-dom";

import Job from "./Job";
import School from "./School";
import Field from "./Field";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      jobs: [],
      schools: [],
    };

    this.createJob = this.createJob.bind(this);
    this.addJob = this.addJob.bind(this);
    this.removeJob = this.removeJob.bind(this);
    this.displayAllJobs = this.displayAllJobs.bind(this);
    this.generateJobFields = this.generateJobFields.bind(this);

    this.createSchool = this.createSchool.bind(this);
    this.addSchool = this.addSchool.bind(this);
    this.removeSchool = this.removeSchool.bind(this);
    this.displayAllSchools = this.displayAllSchools.bind(this);
    this.generateSchoolFields = this.generateSchoolFields.bind(this);
  }

  createJob(job) {
    job.preventDefault();
    this.addJob();
  }

  addJob() {
    const newIndex = this.state.jobs.length;
    const newJob = {
      key: newIndex,
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    };

    this.setState((prevState) => ({
      jobs: prevState.jobs.concat(newJob),
    }));
  }

  removeJob(key) {}

  displayAllJobs() {
    const jobCount = this.state.jobs.length;
    let allJobs = [];

    for (let i = 0; i < jobCount; i++) {
      let jobDisplay = (
        <div className="job-display">
          <p id={"company-" + i}></p>
          <p id={"title-" + i}></p>
          <br />
          <p id={"startDate-" + i}></p>
          <p id={"endDate-" + i}></p>
          <p id={"responsibilities-" + i}></p>
        </div>
      );

      allJobs.push(jobDisplay);
    }

    const targetDiv = document.getElementById("experience");
    ReactDOM.render(allJobs, targetDiv);
  }

  generateJobFields(job) {
    return (
      <Job
        key={job.key}
        jobId={job.key}
        company={job.company}
        title={job.title}
        startDate={job.startDate + " -"}
        endDate={job.endDate}
        responsibilities={job.responsibilities}
      />
    );
  }

  createSchool(school) {
    school.preventDefault();
    this.addSchool();
  }

  addSchool() {
    const newIndex = this.state.schools.length;
    const newSchool = {
      key: newIndex,
      institution: "",
      location: "",
      degree: "",
      focus: "",
      dateFinished: "",
    };

    this.setState((prevState) => ({
      schools: prevState.schools.concat(newSchool),
    }));
  }

  removeSchool(key) {}

  displayAllSchools() {
    const schoolCount = this.state.schools.length;
    let allSchools = [];

    for (let i = 0; i < schoolCount; i++) {
      let schoolDisplay = (
        <div className="school-display">
          <p id={"institution-" + i}></p>
          <p id={"location-" + i}></p>
          <p id={"degree-" + i}></p>
          <p id={"focus-" + i}></p>
          <p id={"dateFinished-" + i}></p>
        </div>
      );

      allSchools.push(schoolDisplay);
    }

    const targetDiv = document.getElementById("education");
    ReactDOM.render(allSchools, targetDiv);
  }

  generateSchoolFields(school) {
    return (
      <School
        key={school.key}
        schoolId={school.key}
        institution={school.institution}
        location={school.location}
        degree={school.degree}
        focus={school.focus}
        dateFinished={school.dateFinished}
      />
    );
  }

  componentDidMount() {
    this.addJob();
    this.addSchool();
  }

  componentDidUpdate() {
    this.displayAllJobs();
    this.displayAllSchools();
  }

  render() {
    let allJobs = this.state.jobs;
    let jobFields = allJobs.map(this.generateJobFields);

    let allSchools = this.state.schools;
    let schoolFields = allSchools.map(this.generateSchoolFields);

    return (
      <div className="form">
        <div className="general-info">
          <Field name="name" value={this.state.name} />
          <Field name="email" value={this.state.email} />
          <Field name="phone" value={this.state.phone} />
        </div>
        <div className="experience-form">
          <form onSubmit={this.createJob}>
            {jobFields}
            <button type="submit">Add Another Job</button>
          </form>
        </div>
        <div className="education-form">
          <form onSubmit={this.createSchool}>
            {schoolFields}
            <button type="submit">Add Another School</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
