import React from "react";

import FormComponent from "./FormComponent";
class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: ""
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: [value]
    });
  }
  handleSubmit(event) {
    // let fname = this.state.firstName;
    // let lname = this.state.lastName;
    // let age = this.state.age;
  }
  render() {
    return (
     <FormComponent data={this.state} handleChange={this.handleChange}/>
    );
  }
}

export default FormContainer;

