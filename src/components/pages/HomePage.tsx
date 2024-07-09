import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from '../molecules/SearchForm';
import SearchResults from '../organisms/SearchResults';
import LoadingModal from '../atoms/LoadingModal';
import { SearchResult } from '../../types';

/**
 * Home page component
 *
 * @returns {JSX.Element} The rendered component
 */
const HomePage: React.FC = (): JSX.Element => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    console.log('Search query:', query);
    try {
      const response = await axios.get<SearchResult[]>('/api/data', { params: { search: query } });
      console.log('Search results:', response.data);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto p-4" aria-labelledby="main-title">
      <h1 id="main-title" className="text-2xl font-bold mb-4">Search Items</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <LoadingModal />}
      <SearchResults results={results} />
    </main>
  );
};

export default HomePage;
