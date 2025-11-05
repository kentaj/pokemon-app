import { Link } from "react-router-dom";
import type { PokemonListItem, PokemonDetail } from "../api/poke";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetail } from "../api/poke";
import { typeColors } from "../utils/typeColors";

interface PokemonCardProps {
  pokemon: PokemonListItem;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const { data } = useQuery<PokemonDetail>({
    queryKey: ["pokemon", pokemon.name],
    queryFn: () => fetchPokemonDetail(pokemon.name),
    staleTime: 1000 * 60 * 10,
  });

  if (!data) return null;

  const imageUrl = data.sprites.front_default;
  const type = data.types[0]?.type.name || "normal";
  const colorClass = typeColors[type] || typeColors.normal;
  const hp = data.stats.find((s) => s.stat.name === "hp")?.base_stat || 50;

  return (
    <Link
      to={`/pokemon/${pokemon.name}`}
      className={`relative bg-gradient-to-b ${colorClass} rounded-2xl p-3 shadow-lg hover:scale-105 transition-transform`}
    >
      <div className="bg-white/90 rounded-xl p-3 flex flex-col items-center">
        <div className="flex justify-between w-full text-xs font-bold text-gray-700 mb-1">
          <span className="capitalize">{type}</span>
          <span>HP {hp}</span>
        </div>
        <img
          src={imageUrl}
          alt={pokemon.name}
          className="w-20 h-20 object-contain drop-shadow-md"
        />
        <h2 className="text-lg font-bold capitalize text-gray-900 mt-2">
          {pokemon.name}
        </h2>
      </div>
    </Link>
  );
}
