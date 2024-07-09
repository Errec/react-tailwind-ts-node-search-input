import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

/**
 * Search form component
 *
 * @param {SearchFormProps} props - React props
 * @returns {JSX.Element} The rendered component
 */
const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('SearchForm handleSearch called with query:', query);
    onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <form aria-label="Search form" className="flex flex-col space-y-4" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
      <Input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} />
      <Button onClick={handleSearch}>Search</Button>
    </form>
  );
};

export default SearchForm;
