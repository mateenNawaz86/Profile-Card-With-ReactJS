import React from "react";
import Card from "../UI/Card";
import FormInput from "./FormInput";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  return (
    <Card>
      <div className="container">
        <div className="card_heading">
          <h1>profile card</h1>
        </div>

        <div className="profile_logo">
          <i className="far fa-user-circle" />
        </div>

        <div className="form_controls">
          <FormInput onSaveUserInfo={props.onSaveCard} />
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
