import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Job from "./Job";
import School from "./School";
import Field from "./Field";

const Form = () => {  
  const [jobs, setJobs] = useState([]);
  const [schools, setSchools] = useState([]);
  
  useEffect(() => {    
    displayAllJobs();
    displayAllSchools();
  });

  function createJob(job) {
    job.preventDefault();
    addJob();
  }

  function addJob() {
    const newIndex = jobs.length;
    const newJob = {
      key: newIndex,
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    };

    setJobs(jobs.concat(newJob));
  }

  function displayAllJobs() {
    const jobCount = jobs.length;
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

  function generateJobFields(job) {
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

  function createSchool(school) {
    school.preventDefault();
    addSchool();
  }

  function addSchool() {
    const newIndex = schools.length;
    const newSchool = {
      key: newIndex,
      institution: "",
      location: "",
      degree: "",
      focus: "",
      dateFinished: "",
    };

    setSchools(schools.concat(newSchool));
  }

  function displayAllSchools() {
    const schoolCount = schools.length;
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

  function generateSchoolFields(school) {
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

  return (
    <div className="form">
      <div className="general-info">
        <Field name="name" />
        <Field name="email" />
        <Field name="phone" />
      </div>
      <div className="experience-form">
        <form onSubmit={createJob}>
          {jobs.map(generateJobFields)}
          <button type="submit">Add A Job</button>
        </form>
      </div>
      <div className="education-form">
        <form onSubmit={createSchool}>
          {schools.map(generateSchoolFields)}
          <button type="submit">Add A School</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
