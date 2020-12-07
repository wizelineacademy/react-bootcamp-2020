import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { ThemeContext } from '../../providers/theme';
import { setTheme } from '../../providers/theme/theme.actions';

import { SettingsContainer } from './settings.styles';

function SettingsPage() {
  const { themeDispatch } = useContext(ThemeContext);

  const handleThemeSwitch = ({ target: { checked } }) => {
    const theme = checked ? 'dark' : 'light';
    themeDispatch(setTheme(theme));
  };

  return (
    <SettingsContainer>
      <h1>Settings</h1>
      <p>Dark mode</p>
      <Switch
        //  checked={toogleState}
        onChange={handleThemeSwitch}
        name='checkedA'
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </SettingsContainer>
  );
}

export default SettingsPage;
