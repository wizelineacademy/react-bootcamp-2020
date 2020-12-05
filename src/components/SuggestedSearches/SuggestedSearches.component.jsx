import React from 'react';
import './SuggestedSearches.styles.css';
import GetSuggestedSearches from './GetSuggestedSearches.component';

export default function Sugestedsearches() {
  const randomSuggestedSearches = GetSuggestedSearches();
  return (
    <div className="suggested_searches">
      <p>Try this searches:</p>
      <div className="suggested_searches_list"> {randomSuggestedSearches} </div>
    </div>
  );
}
