import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div className="display">
        <section id="general-info">
          <div id="name"></div>
          <div id="email"></div>
          <div id="phone"></div>
        </section>
        <hr />
        <h4 className="section-header">Experience</h4>
        <section id="experience">
          {/* display all Jobs in Experience's state. */}
          sssss
        </section>
        <hr />
        <h4 className="section-header">Education</h4>
        <section id="education">
          {/* display all Schools in Education's state. */}
        </section>
      </div>
    );
  }
}

export default Display;
