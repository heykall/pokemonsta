import React, { useState, memo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  formatPokemonId, 
  formatPokemonName, 
  getTypeColor, 
  getTypeTextColor,
} from '../utils/helpers';
import { ArrowLeft, Heart } from 'lucide-react';
import Badge from './ui/Badge';
import Tabs from './ui/Tabs';
import Button from './ui/Button';
import { PokemonDetailSkeleton } from './ui/SkeletonLoader';
import { usePokemonDetail } from '../hooks/usePokemonDetail';
import { useAppDispatch, useAppSelector } from '../hooks';
import { toggleFavorite } from '../store/slices/pokemonSlice';
import PokemonStats from './PokemonStats';
import PokemonAbout from './PokemonAbout';

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<string>('about');
  const { data, isLoading, isError } = usePokemonDetail(id);
  
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.pokemon.favorites);
  const isFavorite = id ? favorites.includes(parseInt(id)) : false;

  const handleFavoriteToggle = () => {
    if (id) {
      dispatch(toggleFavorite(parseInt(id)));
    }
  };

  if (isLoading) {
    return <PokemonDetailSkeleton />;
  }

  if (isError || !data || !data.pokemon) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-red-500">Error loading Pokémon data. Please try again later.</div>
      </div>
    );
  }

  const { pokemon, species } = data;
  const mainType = pokemon.types[0].type.name;
  const typeColorClass = getTypeColor(mainType);
  const textColorClass = getTypeTextColor(mainType);

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'stats', label: 'Base Stats' },
    { id: 'evolution', label: 'Evolution' },
    { id: 'moves', label: 'Moves' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className={`${typeColorClass} pt-6 pb-20 px-4 relative`}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <Link to="/" className="flex items-center text-white">
              <ArrowLeft size={20} className="mr-1.5" />
              <span className="font-medium">Back</span>
            </Link>
            <Button 
              variant="outline" 
              className="border-none text-white"
              onClick={handleFavoriteToggle}
            >
              <Heart size={20} className={isFavorite ? 'fill-white' : ''} />
            </Button>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h1 className={`text-2xl sm:text-3xl font-bold ${textColorClass}`}>
                {formatPokemonName(pokemon.name)}
              </h1>
              <div className="flex mt-2 space-x-2 flex-wrap">
                {pokemon.types.map((typeInfo) => (
                  <Badge
                    key={typeInfo.type.name}
                    className={textColorClass}
                  >
                    {typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}
                  </Badge>
                ))}
              </div>
            </div>
            <span className={`text-xl sm:text-2xl font-bold ${textColorClass} opacity-70`}>
              {formatPokemonId(pokemon.id)}
            </span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="flex justify-center mb-6">
          <img
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-36 h-36 sm:w-48 sm:h-48 object-contain"
          />
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
          <Tabs 
            tabs={tabs} 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
          
          {activeTab === 'about' && (
            <PokemonAbout pokemon={pokemon} species={species} />
          )}
          
          {activeTab === 'stats' && (
            <PokemonStats pokemon={pokemon} />
          )}
          
          {activeTab === 'evolution' && (
            <div className="flex justify-center items-center h-48">
              <p className="text-gray-500">Evolution chain would be displayed here.</p>
            </div>
          )}
          
          {activeTab === 'moves' && (
            <div className="flex justify-center items-center h-48">
              <p className="text-gray-500">Moves list would be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(PokemonDetail);