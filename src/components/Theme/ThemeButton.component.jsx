import React, { useContext } from 'react';

import { ThemeContext, themes } from '../../state/ThemeContext';

import './ThemeButton.styles.css';

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    if (theme === themes.light) {
      setTheme(themes.dark);
      document.body.className = themes.dark;
    } else {
      setTheme(themes.light);
      document.body.className = themes.light;
    }
  }

  return (
    <button type="button" onClick={toggleTheme} className="button">
      {theme === themes.light && (
        <span role="img" aria-label="moon">
          🌙
        </span>
      )}
      {theme === themes.dark && (
        <span role="img" aria-label="sun">
          🌞
        </span>
      )}
    </button>
  );
}
