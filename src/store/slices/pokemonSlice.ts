import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../types/pokemon';

interface PokemonState {
  favorites: number[];
  searchTerm: string;
  offset: number;
  limit: number;
}

const initialState: PokemonState = {
  favorites: [],
  searchTerm: '',
  offset: 0,
  limit: 12,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const pokemonId = action.payload;
      const index = state.favorites.indexOf(pokemonId);
      
      if (index === -1) {
        state.favorites.push(pokemonId);
      } else {
        state.favorites.splice(index, 1);
      }
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});

export const { toggleFavorite, setSearchTerm, setOffset, setLimit } = pokemonSlice.actions;
export default pokemonSlice.reducer;