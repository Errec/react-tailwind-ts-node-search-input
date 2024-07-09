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
const SearchForm: React.FC<SearchFormProps> = ({ onSearch }: SearchFormProps): JSX.Element => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <form aria-label="Search form" className="flex flex-col space-y-4">
      <Input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} />
      <Button onClick={handleSearch}>Search</Button>
    </form>
  );
};

export default SearchForm;
