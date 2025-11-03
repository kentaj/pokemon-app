import { Link } from "react-router-dom";
import type { PokemonListItem } from "../api/poke";

interface PokemonCardProps {
  pokemon: PokemonListItem;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const id = pokemon.url.split("/").filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link
      to={`/pokemon/${pokemon.name}`}
      className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-md transition"
    >
      <img
        src={imageUrl}
        alt={pokemon.name}
        className="w-20 h-20 object-contain mb-2"
      />
      <h2 className="text-lg font-semibold capitalize">{pokemon.name}</h2>
    </Link>
  );
}
