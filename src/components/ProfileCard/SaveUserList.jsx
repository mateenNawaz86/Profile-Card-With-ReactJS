import React from "react";
import Card from "../UI/Card";
import classes from "./SaveUserList.module.css";

const SaveUserList = (props) => {
  return (
    <Card className={classes.saveUser}>
      <ul>
        {props.saveUser.map((enteredUserInfo) => {
          return (
            <li key={enteredUserInfo.id}>
              {enteredUserInfo.name},
              {"\t"}
              {enteredUserInfo.status}!
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default SaveUserList;
