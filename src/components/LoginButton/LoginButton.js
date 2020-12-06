import React, { useContext } from "react";
import "./LoginButton.css";
import Button from "@material-ui/core/Button";
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
    <>
      <Link to={!userLogged.userStatus ? "/FormLogIn" : "/"}>
        <Button className="LoginButton" onClick={loggedOut}>
          {userLogged.userStatus ? "Log Out" : "Log In"}
          <FiLogIn />
        </Button>
      </Link>
    </>
  );
};

export default LoginButton;
