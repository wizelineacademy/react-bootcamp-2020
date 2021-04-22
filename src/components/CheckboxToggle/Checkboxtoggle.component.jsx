import React from 'react';

import useDarkMode from '../../utils/hooks/useDarkMode';

import './Checkboxtoggle.styles.css';

const Checkboxtoggle = ({ mode }) => {
  const [colorTheme, setTheme] = useDarkMode(mode);
  const darkMode = colorTheme === 'light' ? 'Dark Mode' : 'Light Mode';

  return (
    <>
      <div className="hidden md:block">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toggle"
              type="checkbox"
              className="hidden"
              onClick={() => setTheme(colorTheme)}
            />
            <div className="toggle__line w-8 h-4 bg-gray-400 rounded-full shadow-inner" />
            <div className="toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0" />
          </div>
          <div className="ml-3 text-white text-normal">{darkMode}</div>
        </label>
      </div>
    </>
  );
};

export default Checkboxtoggle;
