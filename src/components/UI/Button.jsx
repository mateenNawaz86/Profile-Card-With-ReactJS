import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.saveBtn}>
      <button className={classes.btn} onClick={props.onClick} type="submit">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
