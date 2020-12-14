import React, { useContext } from 'react';
import { Loader } from 'semantic-ui-react';
import ThemeContext from '../../context/ThemeContext';

const LoaderComponent = () => {
  const { light } = useContext(ThemeContext);
  return <Loader active size="massive" inverted={!light} />;
};

export default LoaderComponent;
