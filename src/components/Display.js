import React from "react";

const Display = () => {
  return (
    <div className="display">
      <section id="general-info">
        <div id="name"></div>
        <div id="email"></div>
        <div id="phone"></div>
      </section>
      <hr />
      <h4 className="section-header">Experience</h4>
      <section id="experience">{/* display all Jobs. */}</section>
      <hr />
      <h4 className="section-header">Education</h4>
      <section id="education">{/* display all Schools. */}</section>
    </div>
  );
};

export default Display;
