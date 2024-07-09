import React from 'react';
import HomePage from './components/pages/HomePage';

/**
 * App component
 *
 * @returns {JSX.Element} The rendered component
 */
const App: React.FC = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <HomePage />
    </header>
  </div>
);

export default App;
