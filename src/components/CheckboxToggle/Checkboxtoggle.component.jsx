import React from 'react';

import useDarkMode from '../../hooks/useDarkMode';
import { useVideosContext } from '../../context/context';

import './Checkboxtoggle.styles.css';

const Checkboxtoggle = ({ mode }) => {
  const { dispatch } = useVideosContext();

  const [colorTheme, setTheme] = useDarkMode(mode);
  const theme = colorTheme === 'light' ? 'Dark Mode' : 'Light Mode';

  const onSelectMode = () => {
    dispatch({ type: '@set/theme', payload: colorTheme });
    setTheme(colorTheme);
  };

  return (
    <>
      <div className="hidden md:block">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toggle"
              type="checkbox"
              className="hidden"
              onClick={onSelectMode}
            />
            <div className="toggle__line w-8 h-4 bg-gray-400 rounded-full shadow-inner" />
            <div className="toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0" />
          </div>
          <div className="ml-3 text-white text-normal">{theme}</div>
        </label>
      </div>
    </>
  );
};

export default Checkboxtoggle;
