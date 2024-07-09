import React from 'react';
import { SearchResult } from '../../types';

interface SearchResultsProps {
  results: SearchResult[];
}

/**
 * Search results component
 *
 * @param {SearchResultsProps} props - React props
 * @returns {JSX.Element} The rendered component
 */
const SearchResults: React.FC<SearchResultsProps> = ({ results }: SearchResultsProps): JSX.Element => (
  <div aria-live="polite" className="mt-4 space-y-4">
    {results.length === 0 ? (
      <p>There are no results matching your query.</p>
    ) : (
      results.map((result) => (
        <div
          key={result.id}
          className="border border-gray-300 p-4 rounded hover:bg-gray-100 cursor-pointer"
          onClick={() => window.open(result.url, '_blank')}
          role="link"
          tabIndex={0}
          aria-label={`Search result: ${result.title}`}
        >
          <h3 className="font-bold">{result.title}</h3>
          <p>{result.description}</p>
          <span className="text-sm text-gray-500">{result.category}</span>
        </div>
      ))
    )}
  </div>
);

export default SearchResults;
