import React, { useContext, useState } from "react";
import VideoContext from "../../providers/VideoContext";
import { Route, Redirect } from "react-router-dom";
import {BotonLogIn,FormWrapper,Input} from "./FormLogIn.style"
import users from "../../mockUsers/users";
import * as youtubeAPI from "../../utils/Youtube";

const FormLogIn = () => {
  const [errorUser, setErrorUser] = useState("");
  const [errorUserNotFound, setErrorUserNotFound] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const { userSession, setUserSession, changinggSetChangingg, setFavoritesFlag,setVideoMetaInfo } = useContext(VideoContext);
  
  var userMap = new Map();

  const settingUserName = (e) => {
    setUser(e.target.value);
  };
  
  const settingUserPassword = (e) => {
    setPassword(e.target.value);
  };

  const validate = () => {
    let isValid = true;
    if (!user) {
      setErrorUser("User required");
      isValid = false;
    } else if (user.length < 3) {
      setErrorUser("User length higher than 3");
      isValid = false;
    } else {
      setErrorUser("");
    }
    if (!password) {
      setErrorPassword("Pass required");
      isValid = false;
    } else {
      setErrorPassword("");
    }

    return isValid;
  };

  const validateUser = () => {
    let isValid = true;
    if (validate()) {
      if (userMap.get(user)) {
        if (userMap.get(user).pass !== password) {
          isValid = false;
          setErrorUserNotFound("Wrong Pass");
        }
      } else {
        isValid = false;
        setErrorUserNotFound("User Not Found");
      }
    } else {
      isValid = false;
    }
    return isValid;
  };

  const getmapUsers = () => {
    let localusers = { ...users };

    for (let i in localusers) {
      userMap.set(localusers[i].user, localusers[i]);
    }
  };

  const videoTendencies = async () => {
   
    const params = {
      q: ""
    };

    const varResponse = await youtubeAPI.search(
      params
    );
    
    changinggSetChangingg(false);
    setFavoritesFlag(false);

    if (
      varResponse &&
      varResponse.data &&
      Array.isArray(varResponse.data.items)
    ) {
      setVideoMetaInfo(varResponse.data.items);
    }
   
  };

  const onLogIn = () => {
    getmapUsers();
    if (validateUser()) {
      setUserSession({
        user: user,
        pass: password,
        email: "",
        loggedIn: true
      });
    }
    videoTendencies();
  };
  const onLogInWithoutSession = () => {
    setUserSession({
      user: "noSession",
      pass: "",
      email: "",
      loggedIn: true
    });
    videoTendencies();
  };

  return (
    <FormWrapper>
      <div>
        <Input
          value={user}
          onChange={settingUserName}
          id="userinput"
          type="text"
          placeholder="User..."
        />
      </div>
      {errorUserNotFound && <p style={{ color: "red" }}>{errorUserNotFound}</p>}

      {errorUser && <p style={{ color: "red" }}>{errorUser}</p>}

      <div>
        <Input
          value={password}
          onChange={settingUserPassword}
          id="passwordinput"
          type="password"
          placeholder="Password..."
        />
      </div>
      {errorPassword && <p style={{ color: "red" }}>{errorPassword}</p>}
      <br />
      <br />
      <div>
      <BotonLogIn role = "aria-roledescription" type="button" onClick={onLogIn}>
        {" "}
        Log In
      </BotonLogIn>

      <BotonLogIn type="button" onClick={onLogInWithoutSession}   role="onLogWS">
        {" "}
        Without Session
      </BotonLogIn>
      </div>
      <br />

      {
        <Route
          render={() =>
            userSession.loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Redirect to="/logIn" />
            )
          }
        />
      }
    </FormWrapper>
  );
};

export default FormLogIn;
