import { useQuery } from '@tanstack/react-query';
import { getPokemonList, getPokemon } from '../services/api';
import { Pokemon } from '../types/pokemon';
import { useAppSelector } from './useAppSelector';

export const usePokemons = () => {
  const { offset, limit } = useAppSelector(state => state.pokemon);

  return useQuery({
    queryKey: ['pokemonList', offset, limit],
    queryFn: async () => {
      const listResponse = await getPokemonList(limit, offset);
      
      const pokemonPromises = listResponse.results.map((item: { name: string }) => 
        getPokemon(item.name)
      );
      
      const pokemonResults = await Promise.all(pokemonPromises);
      
      return {
        pokemons: pokemonResults as Pokemon[],
        totalCount: listResponse.count,
      };
    },
  });
};