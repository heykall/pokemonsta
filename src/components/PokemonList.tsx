import React, { memo, useEffect, useCallback } from 'react';
import PokemonCard from './PokemonCard';
import { PokemonCardSkeleton } from './ui/SkeletonLoader';
import { usePokemons } from '../hooks/usePokemons';
import { useAppSelector } from '../hooks';
import { useInView } from 'react-intersection-observer';
import { Pokemon } from '../types/pokemon';

const PokemonList: React.FC = () => {
  const { searchTerm } = useAppSelector(state => state.pokemon);
  const { data, isLoading, isError, isFetchingNextPage, fetchNextPage, hasNextPage } = usePokemons();
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px 500px 0px',
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  const filteredPokemons = useCallback((pokemons: Pokemon[]) => {
    if (!searchTerm) return pokemons;
    
    return pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      pokemon.id.toString().includes(searchTerm)
    );
  }, [searchTerm]);

  const allPokemons = data?.pages.flatMap(page => page.pokemons) || [];
  const displayedPokemons = filteredPokemons(allPokemons);
  
  if (isLoading && !allPokemons.length) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <PokemonCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500">Error loading Pokémon data. Please try again later.</p>
      </div>
    );
  }

  if (displayedPokemons.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>No Pokémon found matching "{searchTerm}".</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {displayedPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      
      {/* Loading indicator at bottom for infinite scroll */}
      {(isFetchingNextPage || hasNextPage) && (
        <div ref={ref} className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <PokemonCardSkeleton key={index} />
          ))}
        </div>
      )}
      
      {!hasNextPage && !isFetchingNextPage && displayedPokemons.length > 0 && (
        <div className="text-center py-8 text-gray-500">
          You've reached the end of the list!
        </div>
      )}
    </div>
  );
};

export default memo(PokemonList);