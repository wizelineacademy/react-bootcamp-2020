import React, { useContext, useState } from "react";
import PageContext from "../../providers/Context/PageContext";
import { Route, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { usersMock } from "../../mock/users";


const LogIn = () => {
  const { userLogged, setUserLogged } = useContext(PageContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [helper, setHelper] = useState("");
  const [helper2, setHelper2] = useState("");

  let mapUsers = new Map();

  const createMap = () =>{
    const arrUsers = [...usersMock];
    for (let i = 0; i < arrUsers.length; i++) {
      mapUsers.set(arrUsers[i].user,arrUsers[i]);
    }

  } ;

  const HandleMail = (e) => {
    setUser(e.target.value);

  };

  const HandlePassword = (e) => {
    setPass(e.target.value);
  };

  const validate = () => {
    let validation = false;
    if(mapUsers.get(user)){
      setHelper("");
      if(mapUsers.get(user).password === pass){
        validation = true;
      }
      else{
        setHelper2("Password incorrecto");
      }
    }
    else{
      setHelper("Usuario no existe");
    }
    return validation;
  }

  const validateInputs = () => {
    let validation2=true
    if(!user){
      setHelper("Usuario requerido");
      validation2 = false;
    }
    if(!pass){
      setHelper2("Password requerido");
      validation2 = false;
    }
    return validation2;
  }

  const onLogging = () => {
  if(validateInputs()){
      createMap();
      if(validate()){
        setUserLogged({
          userStatus: true,
          user: user,
          password: pass
        });
      } 
  }
  };

  return (
    <div>
      <Card className="Root">
        <CardContent>
          <input 
                role="user" 
                value={user} 
                onChange={HandleMail}
                placeholder="User" />
                <p style={{color: "red"}}>{helper}</p>
        <div></div>
          <br />
        
          <input
            type="password" 
            role="pass" 
            value={pass} 
            onChange={HandlePassword}
            placeholder="Password" />
            <p style={{color: "red"}}>{helper2}</p>
          <div></div>
          <br />
          <CardActions>
            <Button variant="outlined" onClick={onLogging}>
              LogIn
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <br />
      <Route
        render={() =>
          userLogged.userStatus ? (
            <Redirect to="/" />
          ) : (
            <Redirect to="/FormLogIn" />
          )
        }
      />
    </div>
  );
};

export default LogIn;
