import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setSearchTerm } from '../store/slices/pokemonSlice';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(state => state.pokemon.searchTerm);
  const [mobileSearchVisible, setMobileSearchVisible] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const toggleMobileSearch = () => {
    setMobileSearchVisible(!mobileSearchVisible);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600">Pokédex</Link>
        
        {mobileSearchVisible ? (
          <div className="absolute inset-x-0 top-0 bg-white p-3 flex items-center shadow-md z-20">
            <input
              type="text"
              placeholder="Search Pokémon..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-1 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <button 
              className="ml-2 p-2 text-gray-700"
              onClick={toggleMobileSearch}
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search Pokémon..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <button 
              className="md:hidden text-gray-700 p-2"
              onClick={toggleMobileSearch}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <button className="text-gray-700 p-2" aria-label="Menu">
              <Menu size={20} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;