import React, { useState } from 'react';
import { Search, MapPin, DollarSign } from 'lucide-react';

interface SearchBarProps {
  onSearch: (location: string, price?: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(location, price ? parseInt(price) : undefined);
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-3xl mx-auto p-2 bg-white rounded-lg shadow-md"
    >
      <div className="flex items-center flex-1 w-full border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-transparent">
        <MapPin size={20} className="text-neutral-400 mr-2" />
        <input
          type="text"
          placeholder="Where are you looking?"
          className="flex-1 outline-none text-neutral-800"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      
      <div className="flex items-center w-full sm:w-auto border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-transparent">
        <DollarSign size={20} className="text-neutral-400 mr-2" />
        <input
          type="number"
          placeholder="Max price"
          className="w-full sm:w-24 outline-none text-neutral-800"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      
      <button
        type="submit"
        className="w-full sm:w-auto bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        <span className="flex items-center justify-center">
          <Search size={20} className="mr-2" />
          Search
        </span>
      </button>
    </form>
  );
};

export default SearchBar;