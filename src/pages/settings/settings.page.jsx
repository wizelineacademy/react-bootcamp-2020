import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { ThemeContext } from '../../providers/theme';
import { setTheme } from '../../providers/theme/theme.actions';

import './settings.styles.scss';

function SettingsPage() {
  const { themeDispatch } = useContext(ThemeContext);

  const handleThemeSwitch = ({ target: { checked } }) => {
    const theme = checked ? 'dark' : 'light';
    themeDispatch(setTheme(theme));
  };

  return (
    <div className='settings-container'>
      <h1>Settings</h1>
      <p>Dark mode</p>
      <Switch
        //  checked={toogleState}
        onChange={handleThemeSwitch}
        name='checkedA'
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}

export default SettingsPage;
