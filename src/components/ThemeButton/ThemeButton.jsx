import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

export default function ThemeButton() {
  const [darkTheme, setDarkTheme] = React.useState(false);

  const handleThemeClick = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <IconButton onClick={handleThemeClick}>
      {!darkTheme ? <Brightness2Icon /> : <WbSunnyIcon />}
    </IconButton>
  );
}
