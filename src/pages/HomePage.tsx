import React, { memo } from 'react';
import PokemonList from '../components/PokemonList';

const HomePage: React.FC = () => {
  return <PokemonList />;
};

export default memo(HomePage);