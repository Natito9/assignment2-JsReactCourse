import React, { useState } from "react";

const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.

  const [formData, setSubmitData] = useState({ name: "", age: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubmitData({ ...formData, [name]: value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("form submitted:", formData);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={submitForm}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          ></input>
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyStateComponent;
