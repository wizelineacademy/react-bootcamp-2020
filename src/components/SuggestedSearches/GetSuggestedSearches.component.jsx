import React from 'react';
import { Link } from 'react-router-dom';
import { suggestedSearchesElements } from '../../utils/mockedData';
import { NUMBER_OF_SUGGESTIONS } from '../../utils/constants';

export default () => {
  function getRandomElements(arr, n) {
    const len = arr.length;
    const result = new Array(n);
    let counter = n;
    while (counter) {
      counter -= 1;
      result[counter] = arr[Math.floor(Math.random() * len)];
    }
    return result;
  }

  const randomSuggestedSearchesElements = getRandomElements(
    suggestedSearchesElements,
    NUMBER_OF_SUGGESTIONS
  );
  const elements = randomSuggestedSearchesElements.map((value) => (
    <Link key={value} to={`/search/${value}`}>
      <span>{value}</span>
    </Link>
  ));
  return elements;
};
