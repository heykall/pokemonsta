import axios from 'axios';
import { Pokemon, PokemonListResponse, PokemonSpecies } from '../types/pokemon';

const API_URL = import.meta.env.VITE_API_URL;

export const getPokemonList = async (limit = 20, offset = 0): Promise<PokemonListResponse> => {
  const response = await axios.get(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
};

export const getPokemon = async (nameOrId: string | number): Promise<Pokemon> => {
  const response = await axios.get(`${API_URL}/pokemon/${nameOrId}`);
  return response.data;
};

export const getPokemonSpecies = async (nameOrId: string | number): Promise<PokemonSpecies> => {
  const response = await axios.get(`${API_URL}/pokemon-species/${nameOrId}`);
  return response.data;
};