import React, { memo } from 'react';
import PokemonCard from './PokemonCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './ui/Button';
import LoadingSpinner from './ui/LoadingSpinner';
import { usePokemons } from '../hooks/usePokemons';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setOffset } from '../store/slices/pokemonSlice';
import Pagination from './ui/Pagination';

const PokemonList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { offset, limit } = useAppSelector(state => state.pokemon);
  const { data, isLoading, isError } = usePokemons();

  const handlePrevPage = () => {
    dispatch(setOffset(Math.max(0, offset - limit)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    if (data && offset + limit < data.totalCount) {
      dispatch(setOffset(offset + limit));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500">Error loading Pokémon data. Please try again later.</p>
      </div>
    );
  }

  if (!data || data.pokemons.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>No Pokémon found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {data.pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      
      <Pagination 
        currentPage={Math.floor(offset / limit) + 1}
        totalPages={Math.ceil(data.totalCount / limit)}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        totalItems={data.totalCount}
        itemsPerPage={limit}
        currentOffset={offset}
      />
    </div>
  );
};

export default PokemonList;