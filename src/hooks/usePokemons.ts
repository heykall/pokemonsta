import { useInfiniteQuery } from '@tanstack/react-query';
import { getPokemonList, getPokemon } from '../services/api';
import { Pokemon } from '../types/pokemon';
import { useAppSelector } from './useAppSelector';

export const usePokemons = () => {
  const { limit, searchTerm } = useAppSelector(state => state.pokemon);

  return useInfiniteQuery({
    queryKey: ['pokemonList', limit, searchTerm],
    queryFn: async ({ pageParam = 0 }) => {
      const listResponse = await getPokemonList(limit, pageParam);
      
      const pokemonPromises = listResponse.results.map((item: { name: string }) => 
        getPokemon(item.name)
      );
      
      const pokemonResults = await Promise.all(pokemonPromises);
      
      return {
        pokemons: pokemonResults as Pokemon[],
        totalCount: listResponse.count,
        nextOffset: pageParam + limit,
      };
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.nextOffset >= lastPage.totalCount) {
        return undefined;
      }
      return lastPage.nextOffset;
    },
    initialPageParam: 0,
  });
};