import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { getTypeColor, getTypeTextColor } from '../utils/helpers';
import { Pokemon } from '../types/pokemon';
import Card from './ui/Card';
import { useAppDispatch, useAppSelector } from '../hooks';
import { toggleFavorite } from '../store/slices/pokemonSlice';
import PokemonCardContent from './PokemonCardContent';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = memo(({ pokemon }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.pokemon.favorites);
  const isFavorite = favorites.includes(pokemon.id);
  
  const mainType = pokemon.types[0].type.name;
  const typeColorClass = getTypeColor(mainType);
  const textColorClass = getTypeTextColor(mainType);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(pokemon.id));
  };

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="block">
      <Card className={typeColorClass}>
        <PokemonCardContent 
          pokemon={pokemon}
          isFavorite={isFavorite}
          textColorClass={textColorClass}
          onFavoriteClick={handleFavoriteClick}
        />
      </Card>
    </Link>
  );
});

PokemonCard.displayName = 'PokemonCard';

export default PokemonCard;