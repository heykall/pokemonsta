import React, { memo } from 'react';
import { formatPokemonId, formatPokemonName } from '../utils/helpers';
import { Pokemon } from '../types/pokemon';
import Badge from './ui/Badge';
import { Heart } from 'lucide-react';

interface PokemonCardContentProps {
  pokemon: Pokemon;
  isFavorite: boolean;
  textColorClass: string;
  onFavoriteClick: (e: React.MouseEvent) => void;
}

const PokemonCardContent: React.FC<PokemonCardContentProps> = memo(({ 
  pokemon, 
  isFavorite, 
  textColorClass,
  onFavoriteClick
}) => {
  return (
    <>
      <div className="flex justify-between items-start">
        <h3 className={`text-base sm:text-lg font-bold ${textColorClass} truncate max-w-[70%]`}>
          {formatPokemonName(pokemon.name)}
        </h3>
        <span className={`text-xs sm:text-sm font-semibold opacity-70 ${textColorClass}`}>
          {formatPokemonId(pokemon.id)}
        </span>
      </div>
      <div className="flex mt-2">
        <div className="flex flex-col space-y-1">
          {pokemon.types.map((typeInfo) => (
            <Badge
              key={typeInfo.type.name}
              className={`${textColorClass} text-xs`}
            >
              {typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}
            </Badge>
          ))}
        </div>
        <div className="ml-auto relative">
          <img
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
          <button 
            onClick={onFavoriteClick}
            className="absolute top-0 right-0 p-1"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              size={16} 
              className={`${textColorClass} ${isFavorite ? 'fill-current' : ''}`} 
            />
          </button>
        </div>
      </div>
    </>
  );
});

PokemonCardContent.displayName = 'PokemonCardContent';

export default PokemonCardContent;