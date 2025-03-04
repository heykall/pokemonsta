import React, { memo } from 'react';
import PokemonDetail from '../components/PokemonDetail';

const DetailPage: React.FC = () => {
  return <PokemonDetail />;
};

export default memo(DetailPage);