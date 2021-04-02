import React, { useState } from 'react';
import Icon from '../Icon/index';

const SearchBox = ({ placeholder, className, onTermSubmit }) => {
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
  };

  return (
    <>
      <div className="relative focus-within:text-white focus:bg-opacity-25 focus:text-white hidden md:block">
        <form onSubmit={onFormSubmit}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline focus:bg-white focus:bg-opacity-25"
            >
              <Icon iconName="search" className="fill-current text-white w-6 h-6 pt-1" />
            </button>
          </span>
          <input
            type="text"
            className={className}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </form>
      </div>
    </>
  );
};

export default SearchBox;
