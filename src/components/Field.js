import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Field = (props) => {
  const [value, setValue] = useState("");
  
  useEffect(() => {
    if (document.getElementById(props.name)){
      const targetElement = document.getElementById(props.name);
      ReactDOM.render(value, targetElement);
    }
  });
  
  function handleChange(event){
    setValue(event.target.value);
  }

  function formatName(name) {
    let capitalizedName = name[0].toUpperCase() + name.substring(1);
    let spacedName = capitalizedName.replace(/([A-Z])/g, " $1");

    return spacedName.replace(/-\d$/, "");
  }

  return (
    <div className="field">
      <input type="text" placeholder={formatName(props.name)} onChange={handleChange} />
    </div>
  );
};

export default Field;
