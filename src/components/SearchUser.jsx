import React, { useState } from 'react';
import { getChildByChildId } from '../utils/findUser';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaSpinner } from 'react-icons/fa';

function SearchUser() {
  const [input, setInput] = useState('');
  const [, setUserData] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsSearching(true);
    setError(null);
    try {
      const result = await getChildByChildId(input.trim());
      if (result) {
        setUserData(result);
        navigate(`/child/${input.trim()}`);
      } else {
        setError('No child found with this ID');
      }
    } catch (err) {
      setError('Error searching for child');
      console.error('Search error:', err);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Search Child Records</h2>

      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Enter child ID..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={isSearching || !input.trim()}
          className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center ${(isSearching || !input.trim()) ? 'opacity-70 cursor-not-allowed' : ''
            }`}
        >
          {isSearching ? <FaSpinner className="animate-spin mr-2" /> : <FaSearch className="mr-2" />}
          Search
        </button>
      </form>

      {isSearching && (
        <div className="text-center py-4 text-blue-600">
          <FaSpinner className="animate-spin inline-block mr-2" />
          Searching...
        </div>
      )}

      {error && (
        <div className="p-3 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500">
        <p>Enter the child's unique ID to view their vaccination records.</p>
      </div>
    </div>
  );
}

export default SearchUser;