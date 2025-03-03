export const formatPokemonId = (id: number): string => {
  return `#${String(id).padStart(3, '0')}`;
};

export const formatPokemonName = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const getTypeColor = (type: string): string => {
  const typeColors: Record<string, string> = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-blue-200',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-700',
    flying: 'bg-indigo-300',
    psychic: 'bg-pink-500',
    bug: 'bg-green-400',
    rock: 'bg-yellow-600',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-700',
    dark: 'bg-gray-700',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300',
  };

  return typeColors[type] || 'bg-gray-400';
};

export const getTypeTextColor = (type: string): string => {
  const darkTypes = ['electric', 'ice', 'fairy', 'normal', 'bug'];
  return darkTypes.includes(type) ? 'text-gray-800' : 'text-white';
};

export const getStatColor = (statName: string): string => {
  const statColors: Record<string, string> = {
    hp: 'bg-red-500',
    attack: 'bg-orange-500',
    defense: 'bg-yellow-500',
    'special-attack': 'bg-blue-500',
    'special-defense': 'bg-green-500',
    speed: 'bg-pink-500',
  };

  return statColors[statName] || 'bg-gray-500';
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