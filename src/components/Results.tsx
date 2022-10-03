import React from 'react';
import { ResultListProps } from '../types/autocomplete-types';
import HighlightedSuggestion from './HighlightedSuggestion';
import '../css/suggestions.css';

const Results = ({ results, filter, handleAutoComplete, autoCompleted }: ResultListProps) => {
    if (!filter || autoCompleted) return null; // we don't want to show anything until a user starts typing
    if ((!results || !results.length) && filter) {
      return (
        <p className="suggestion" data-testid="no-results">
          No results found for <mark>{filter}</mark>
        </p>
      );
    }
    return (
      <div className="suggestion-container">
        {results?.map((item) => (
          <HighlightedSuggestion key={item.id} text={item.title} match={filter} handleAutoComplete={handleAutoComplete} />
        ))}
      </div>
    );
  };
  
  export default Results;