import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import { useUserPreferences } from '../../providers/Preferences/UserPreferences.provider';

function ThemeButton() {
  const { isLightThemeOn, invertTheme } = useUserPreferences();

  return (
    <IconButton onClick={invertTheme}>
      {isLightThemeOn ? <Brightness3Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}

export default ThemeButton;
