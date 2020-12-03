import React, { Timeout } from 'react';

const Loader = (props) => {
  return (
    <Timeout ms={props.ms}>
      {(didTimeout) => {
        return didTimeout ? props.fallback : props.children;
      }}
    </Timeout>
  );
};

export default Loader;
