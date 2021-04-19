import React, { useState, useContext } from 'react';

import { VideoContext } from '../../context/context';
import Icon from '../Icon/index';

const SearchBox = ({ placeholder, onTermSubmit }) => {
  const { dispatch } = useContext(VideoContext);

  const [searchField, setsearchField] = useState({
    term: 'Wizeline',
  });

  const handleChange = (e) => {
    setsearchField({
      term: e.target.value.trim(),
    });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    onTermSubmit(searchField.term);
    dispatch({ type: '@set/search_result', payload: searchField.term });
    dispatch({ type: '@get/videos', payload: [] });
    dispatch({ type: '@set/current_video', payload: null });
  };

  return (
    <>
      <div className="relative">
        <form onSubmit={onFormSubmit}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-0.5">
            <button type="submit" className="p-0 bg-blue-200 dark:bg-blue-100">
              <Icon iconName="search" className="fill-current text-white w-6 h-6 pt-1" />
            </button>
          </span>
          <input
            type="text"
            onChange={handleChange}
            placeholder={placeholder}
            className="focus:outline-none pl-8 rounded-lg shadow-lg p-0.5 bg-blue-200 dark:bg-blue-100 text-white"
          />
        </form>
      </div>
    </>
  );
};

export default SearchBox;
