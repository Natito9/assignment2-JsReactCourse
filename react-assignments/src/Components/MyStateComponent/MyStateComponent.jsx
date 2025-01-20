import React, { useState } from "react";

const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
  return (
    <div>
      <h1>Form</h1>
      <form>
        <label>Name:
          <input type="text"></input>
        </label>
        <label>Age:
          <input type="text"></input>
        </label>
      </form>
    </div>
  );
};

export default MyStateComponent;
