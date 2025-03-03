import React, { memo } from 'react';
import { formatPokemonName, formatStatName, getStatColor } from '../utils/helpers';
import { Pokemon } from '../types/pokemon';
import StatBar from './ui/StatBar';

interface PokemonStatsProps {
  pokemon: Pokemon;
}

const PokemonStats: React.FC<PokemonStatsProps> = memo(({ pokemon }) => {
  const totalStats = pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0);

  return (
    <div>
      <div className="space-y-3">
        {pokemon.stats.map((stat) => (
          <StatBar
            key={stat.stat.name}
            label={formatStatName(stat.stat.name)}
            value={stat.base_stat}
            colorClass={getStatColor(stat.stat.name)}
          />
        ))}
        
        <div className="flex items-center mt-4">
          <div className="w-24 text-right mr-4">
            <span className="text-gray-700 font-medium">Total</span>
          </div>
          <div className="w-12 text-right mr-4">
            <span className="text-gray-900 font-bold">
              {totalStats}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Type defenses</h3>
        <p className="text-gray-600 text-sm">
          The effectiveness of each type on {formatPokemonName(pokemon.name)}.
        </p>
        {/* Type effectiveness would go here - would require additional API calls */}
      </div>
    </div>
  );
});

PokemonStats.displayName = 'PokemonStats';

export default PokemonStats;