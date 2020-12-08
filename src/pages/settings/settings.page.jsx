import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { ThemeContext } from '../../providers/theme';
import { setTheme } from '../../providers/theme/theme.actions';

import {
  SettingsContainer,
  Main,
  Header,
  Body,
  SettingContainer,
} from './settings.styles';

function SettingsPage() {
  const { themeState, themeDispatch } = useContext(ThemeContext);
  const { themeName } = themeState;

  const handleThemeSwitch = ({ target: { checked } }) => {
    const themeAux = checked ? 'dark' : 'light';
    themeDispatch(setTheme(themeAux));
  };

  return (
    <SettingsContainer>
      <Main>
        <Header>
          <h1>Settings</h1>
        </Header>
        <Body>
          <SettingContainer>
            <p>Dark mode</p>
            <Switch
              checked={themeName === 'dark'}
              onChange={handleThemeSwitch}
              name='checked'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </SettingContainer>
        </Body>
      </Main>
    </SettingsContainer>
  );
}

export default SettingsPage;
