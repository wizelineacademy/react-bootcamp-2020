import React from 'react';
import { useThemeContext } from '../../providers/ThemeProvider/Provider';
import './ThemeToggle.styles.css';

function ThemeToggle() {
  const { setTheme } = useThemeContext();

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={() => setTheme()} />
        <div className="slider round" />
      </label>
    </div>
  );
}

export default ThemeToggle;
