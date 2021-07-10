import React, { useState } from "react";
import Button from "../UI/Button";
import ProgressBar from "../UI/ProgressBar";
import "./FormInput.css";

const FormInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setEnteredStatus(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length > 0 && enteredStatus.trim().length > 0) {
      props.onSaveUserInfo(enteredName, enteredStatus);
      setEnteredName("");
      setEnteredStatus("");
    }
  };

  return (
    <form onSubmit={saveHandler}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        placeholder="Alexa"
        onChange={nameChangeHandler}
        value={enteredName}
      />

      <label htmlFor="status">status:</label>
      <input
        type="text"
        placeholder="It's a nice day!"
        onChange={statusChangeHandler}
        value={enteredStatus}
      />

      {/* <ProgressBar /> */}

      <Button type="submit">Save</Button>
    </form>
  );
};

export default FormInput;
