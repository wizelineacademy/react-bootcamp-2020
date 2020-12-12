import React, { useContext } from "react";
import "./LoginButton.css";
import PageContext from "../../providers/Context/PageContext";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const LoginButton = () => {
  const { userLogged, setUserLogged } = useContext(PageContext);

  const loggedOut = () => {
    setUserLogged({
      userStatus: false,
      user: ""
    });
  };

  return (

      <Link to={!userLogged.userStatus ? "/FormLogIn" : "/"}>
        <button className="LoginButton" onClick={loggedOut}>
          {userLogged.userStatus ? "Log Out" : "Log In"}
          <FiLogIn />
        </button>
      </Link>

  );
};

export default LoginButton;
