import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSesion } from '../../utils/State';

const Private = ({ component: Component, ...rest }) => {

  const Sesion = useSesion();

  return (
    <Route {...rest} render={(props) => {
        if(Sesion){
            return <Component {...props} />
        }
        else{
            return <Redirect to="/" />
        }
    }} />
  );
}

export default Private;
