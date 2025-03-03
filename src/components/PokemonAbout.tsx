import React, { memo } from 'react';
import { formatPokemonName, calculateGenderRatio } from '../utils/helpers';
import { Pokemon, PokemonSpecies } from '../types/pokemon';

interface PokemonAboutProps {
  pokemon: Pokemon;
  species: PokemonSpecies | null;
}

const PokemonAbout: React.FC<PokemonAboutProps> = memo(({ pokemon, species }) => {
  const genderRatio = species ? calculateGenderRatio(species.gender_rate) : { male: 0, female: 0 };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h3 className="text-gray-500 mb-1 text-sm">Species</h3>
          <p>{formatPokemonName(pokemon.species.name)}</p>
        </div>
        <div>
          <h3 className="text-gray-500 mb-1 text-sm">Height</h3>
          <p>{(pokemon.height / 10).toFixed(1)}m ({((pokemon.height / 10) * 3.28084).toFixed(1)} ft)</p>
        </div>
        <div>
          <h3 className="text-gray-500 mb-1 text-sm">Weight</h3>
          <p>{(pokemon.weight / 10).toFixed(1)}kg ({((pokemon.weight / 10) * 2.20462).toFixed(1)} lbs)</p>
        </div>
        <div>
          <h3 className="text-gray-500 mb-1 text-sm">Abilities</h3>
          <div>
            {pokemon.abilities.map((ability) => (
              <p key={ability.ability.name} className="capitalize">
                {ability.ability.name.replace('-', ' ')}
                {ability.is_hidden && <span className="text-gray-500 text-sm ml-1">(Hidden)</span>}
              </p>
            ))}
          </div>
        </div>
      </div>
      
      {species && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Breeding</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-gray-500 mb-1 text-sm">Gender</h4>
              {genderRatio.male === 0 && genderRatio.female === 0 ? (
                <p>Genderless</p>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">♂ {genderRatio.male}%</span>
                  <span className="text-pink-500">♀ {genderRatio.female}%</span>
                </div>
              )}
            </div>
            
            <div>
              <h4 className="text-gray-500 mb-1 text-sm">Egg Groups</h4>
              <div>
                {species.egg_groups.map((group) => (
                  <p key={group.name} className="capitalize">
                    {group.name.replace('-', ' ')}
                  </p>
                ))}
              </div>
            </div>
            
            {species.habitat && (
              <div>
                <h4 className="text-gray-500 mb-1 text-sm">Habitat</h4>
                <p className="capitalize">{species.habitat.name.replace('-', ' ')}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

PokemonAbout.displayName = 'PokemonAbout';

export default PokemonAbout;