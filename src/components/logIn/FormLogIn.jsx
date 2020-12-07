import React, { useContext, useState } from "react";
import VideoContext from "../../providers/VideoContext";
import { Route, Redirect } from "react-router-dom";
import * as Style from "../styles/styleSheet.js";
import users from "../../mockUsers/users";
import youtubeApi from "../../utils/Youtube";

const FormLogIn = () => {
  const [errorUser, setErrorUser] = useState("");
  const [errorUserNotFound, setErrorUserNotFound] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const { userSession, setUserSession } = useContext(VideoContext);
  const { changinggSetChangingg } = useContext(VideoContext);
  const { setFavoritesFlag } = useContext(VideoContext);
  const { setVideoMetaInfo } = useContext(VideoContext);

  var userMap = new Map();

  const onChange = (e) => {
    setUser(e.target.value);
    //setUserSessionLocal(e.target.value);
  };
  const onChange2 = (e) => {
    setPassword(e.target.value);
    //setUserPassLocal(e.target.value);
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
    console.log("do request with params FORMLOIn");
    const params = {
      q: ""
    };

    const varResponse = await youtubeApi.get("/search", {
      params
    });

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
    <Style.FormWrapper>
      <div>
        <Style.Input1
          value={user}
          onChange={onChange}
          id="userinput"
          type="text"
          placeholder="User..."
        />
      </div>
      {errorUserNotFound && <p style={{ color: "red" }}>{errorUserNotFound}</p>}

      {errorUser && <p style={{ color: "red" }}>{errorUser}</p>}

      <div>
        <Style.Input1
          value={password}
          onChange={onChange2}
          id="passwordinput"
          type="password"
          placeholder="Password..."
        />
      </div>
      {errorPassword && <p style={{ color: "red" }}>{errorPassword}</p>}
      <br />
      <br />
      <div>
      <Style.Boton1 type="button" onClick={onLogIn}>
        {" "}
        Log In
      </Style.Boton1>
      <Style.Boton1 type="button" onClick={onLogInWithoutSession}>
        {" "}
        Without Session
      </Style.Boton1>
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
    </Style.FormWrapper>
  );
};

export default FormLogIn;
