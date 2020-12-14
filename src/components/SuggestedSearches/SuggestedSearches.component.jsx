import React from 'react';
import './SuggestedSearches.styles.css';
import GetSuggestedSearches from './GetSuggestedSearches.component';
import { useAuth } from '../../providers/Auth';

export default function Sugestedsearches() {
  const randomSuggestedSearches = GetSuggestedSearches();
  const { authenticated, userInfo } = useAuth();

  return (
    <div className="suggested_searches">
      <p>{authenticated ? `Welcome back ${userInfo.name}. ` : ''}Try this searches:</p>
      <div className="suggested_searches_list"> {randomSuggestedSearches} </div>
    </div>
  );
}
