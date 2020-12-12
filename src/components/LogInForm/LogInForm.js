import React, { useContext, useState } from "react";
import PageContext from "../../providers/Context/PageContext";
import { Route, Redirect } from "react-router-dom";
import { Input } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { usersMock } from "../../mock/users";


const LogIn = () => {
  const { userLogged, setUserLogged } = useContext(PageContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [InputText, setUserText] = useState("");
  const [passText, setPassText] = useState("");
  const [errorInput, setError] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

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

  const validate = () => { //verifica que el user y el password coincidan con los puestos en el input
    let validation = false;
    if(mapUsers.get(user)){
      setUserText("");
      setError(false);
      if(mapUsers.get(user).password === pass){
        validation = true;
      }
      else{
        setPassText("Password incorrecto");
        setErrorPass(true);
      }
    }
    else{
      setUserText("Usuario no existe");
      setError(true);
    }
    return validation;
  }

  const validateInputs = () => {
    let validation2=true
    if(!user){
      setUserText("Usuario requerido");
      setError(true);
      validation2 = false;
    }
    if(!pass){
      setPassText("Password requerido");
      setErrorPass(true);
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
          {/* <Input      id="username"
                      error={errorInput} 
                      value={user} 
                      onChange={HandleMail} 
                      label="User" 
                      helpertext={InputText}/> */}
          <input 
                role="user" 
                value={user} 
                onChange={HandleMail}
                placeholder="User" />
        <div></div>
          <br />
          {/* <Input
            id="password"
            type="password"
            value={pass}
            onChange={HandlePassword}
            label="Password"
            error={errorPass}
            helpertext={passText}
          /> */}
          <input  
            role="pass" 
            value={pass} 
            onChange={HandlePassword}
            placeholder="Password" />
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
