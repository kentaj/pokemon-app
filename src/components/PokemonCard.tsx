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
      className="flex flex-col items-center p-4 bg-[var(--color-brand-50)] rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 relative"
      style={{ animation: "float 1.2s infinite" }}
    >
      <div className="absolute top-2 left-2 w-2 h-2 bg-[var(--color-brand-500)] rounded-full animate-bounce"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 bg-[var(--color-brand-400)] rounded-full animate-bounce delay-200"></div>

      <img
        src={imageUrl}
        alt={pokemon.name}
        className="w-20 h-20 object-contain mb-2"
      />
      <h2 className="text-lg font-semibold capitalize">{pokemon.name}</h2>

      <div className="flex gap-2 mt-2 flex-wrap justify-center">
        {pokemon.types.map((t) => (
          <span
            key={t.type.name}
            className="px-2 py-1 rounded-full text-sm capitalize bg-[var(--color-brand-100)]"
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </Link>
  );
}
