import React from 'react';

/**
 * Loading modal component
 *
 * @returns {JSX.Element} The rendered component
 */
const LoadingModal: React.FC = () => (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center" aria-live="polite">
    <div className="bg-white p-8 rounded text-center">
      <p>Loading...</p>
    </div>
  </div>
);

export default LoadingModal;
