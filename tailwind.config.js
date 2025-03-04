/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pokemonTypes: {
          normal: '#A8A878',
          fire: '#F08030',
          water: '#6890F0',
          electric: '#F8D030',
          grass: '#78C850',
          ice: '#98D8D8',
          fighting: '#C03028',
          poison: '#A040A0',
          ground: '#E0C068',
          flying: '#A890F0',
          psychic: '#F85888',
          bug: '#A8B820',
          rock: '#B8A038',
          ghost: '#705898',
          dragon: '#7038F8',
          dark: '#705848',
          steel: '#B8B8D0',
          fairy: '#EE99AC',
        },
        pokemonStats: {
          hp: '#FF5959',
          attack: '#F5AC78',
          defense: '#FAE078',
          'special-attack': '#9DB7F5',
          'special-defense': '#A7DB8D',
          speed: '#FA92B2',
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-pokemonTypes-normal', 'bg-pokemonTypes-fire', 'bg-pokemonTypes-water', 
    'bg-pokemonTypes-electric', 'bg-pokemonTypes-grass', 'bg-pokemonTypes-ice',
    'bg-pokemonTypes-fighting', 'bg-pokemonTypes-poison', 'bg-pokemonTypes-ground',
    'bg-pokemonTypes-flying', 'bg-pokemonTypes-psychic', 'bg-pokemonTypes-bug',
    'bg-pokemonTypes-rock', 'bg-pokemonTypes-ghost', 'bg-pokemonTypes-dragon',
    'bg-pokemonTypes-dark', 'bg-pokemonTypes-steel', 'bg-pokemonTypes-fairy',
    'bg-pokemonStats-hp', 'bg-pokemonStats-attack', 'bg-pokemonStats-defense',
    'bg-pokemonStats-special-attack', 'bg-pokemonStats-special-defense', 'bg-pokemonStats-speed',
  ]
};