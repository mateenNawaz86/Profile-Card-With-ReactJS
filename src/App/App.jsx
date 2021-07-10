import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SaveUserList from "../components/ProfileCard/SaveUserList";
import "./App.css";

const App = () => {
  const [saveCard, setSaveCard] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const addSaveHandler = (userName, userStatus) => {
    setSaveCard((prevUserInfo) => {
      return [
        ...prevUserInfo,
        { name: userName, status: userStatus, id: Math.random().toString() },
      ];
    });
    setIsValid(true);
  };
  return (
    <React.Fragment>
      <section id="profile_card">
        <ProfileCard onSaveCard={addSaveHandler} />
      </section>
      {isValid && <SaveUserList saveUser={saveCard} />}
    </React.Fragment>
  );
};

export default App;
