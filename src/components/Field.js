import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Field extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      value: this.props.value,
      formattedName: this.formatName(props.name),
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.displayContents = this.displayContents.bind(this);
    this.formatName = this.formatName.bind(this);
  };
  
  componentDidMount(){
    if (document.getElementById(this.props.name)){
      this.displayContents();
    };
  }
  
  componentDidUpdate(){
    this.displayContents();
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  displayContents() {
    const elementName = this.props.name;
    const targetElement = document.getElementById(elementName);
    const display = this.state.value;
    
    ReactDOM.render(display, targetElement);
  }
  
  formatName (){
    let capitalizedName = this.props.name[0].toUpperCase() + this.props.name.substring(1);
    let spacedName = capitalizedName.replace(/([A-Z])/g, ' $1');
    
    return spacedName.replace(/-\d$/, '');
  }
  
  render() {
    return (
      <div className="field">
        <input type="text" placeholder={this.state.formattedName} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Field;
