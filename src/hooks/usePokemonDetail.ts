import { useQuery } from '@tanstack/react-query';
import { getPokemon, getPokemonSpecies } from '../services/api';

export const usePokemonDetail = (id: string | undefined) => {
  return useQuery({
    queryKey: ['pokemon', id],
    queryFn: async () => {
      if (!id) throw new Error('Pokemon ID is required');
      
      const pokemonData = await getPokemon(id);
      const speciesData = await getPokemonSpecies(id);
      
      return {
        pokemon: pokemonData,
        species: speciesData,
      };
    },
    enabled: !!id,
  });
};