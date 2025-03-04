export const formatPokemonId = (id: number): string => {
  return `#${String(id).padStart(3, '0')}`;
};

export const formatPokemonName = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const getTypeColor = (type: string): string => {
  return `bg-pokemonTypes-${type}`;
};

export const getTypeTextColor = (type: string): string => {
  const darkTypes = ['electric', 'ice', 'fairy', 'normal', 'bug'];
  return darkTypes.includes(type) ? 'text-gray-800' : 'text-white';
};

export const getStatColor = (statName: string): string => {
  return `bg-pokemonStats-${statName}`;
};

export const formatStatName = (statName: string): string => {
  const statNames: Record<string, string> = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Sp. Atk',
    'special-defense': 'Sp. Def',
    speed: 'Speed',
  };

  return statNames[statName] || statName;
};

export const calculateGenderRatio = (genderRate: number): { male: number; female: number } => {
  if (genderRate === -1) {
    return { male: 0, female: 0 }; // Genderless
  }
  
  const femalePercentage = (genderRate / 8) * 100;
  const malePercentage = 100 - femalePercentage;
  
  return {
    male: parseFloat(malePercentage.toFixed(1)),
    female: parseFloat(femalePercentage.toFixed(1)),
  };
};