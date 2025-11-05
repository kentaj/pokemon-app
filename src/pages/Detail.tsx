import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetail, type PokemonDetail } from "../api/poke";
import { getStat } from "../utils/pokemon";
import Spinner from "../components/Spinner";
import ErrorBox from "../components/ErrorBox";
import { typeColors } from "../utils/typeColors";

export default function DetailPage() {
  const { name } = useParams<{ name: string }>();

  const { data, isLoading, isError, error } = useQuery<PokemonDetail, Error>({
    queryKey: ["pokemon", name],
    queryFn: () => {
      if (!name) throw new Error("No pokemon name provided");
      return fetchPokemonDetail(name);
    },
    enabled: !!name,
    staleTime: 1000 * 60 * 5,
  });

  if (!name) return <ErrorBox message="Ingen Pokémon vald" />;
  if (isLoading) return <Spinner />;
  if (isError) return <ErrorBox message={error?.message || "Kunde inte ladda Pokémon"} />;
  if (!data) return <ErrorBox message="Ingen data hittades" />;

  const type = data.types[0]?.type.name || "normal";
  const colorClass = typeColors[type] || typeColors.normal;
  const hp = getStat(data.stats, "hp");
  const attack = getStat(data.stats, "attack");
  const defense = getStat(data.stats, "defense");

  return (
    <div
      className={`flex flex-col items-center mt-10 bg-gradient-to-b ${colorClass} rounded-3xl shadow-xl p-6 max-w-md mx-auto border-8 border-yellow-300`}
    >
      <div className="w-full bg-white/80 rounded-2xl p-6 shadow-inner">
        <div className="flex justify-between mb-2 text-sm font-bold">
          <span className="capitalize text-gray-700">{type}</span>
          <span className="text-gray-800">HP {hp}</span>
        </div>
        <img
          src={data.sprites.front_default}
          alt={data.name}
          className="w-40 h-40 mx-auto drop-shadow-md"
        />
        <h1 className="text-3xl font-bold capitalize text-center text-gray-900 mt-4 mb-2">
          {data.name}
        </h1>

        <div className="flex justify-center gap-3 text-sm text-gray-700 mb-4">
          <p>{attack} ATK</p>
          <p>{defense} DEF</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {data.abilities.map((a) => (
            <span
              key={a.ability.name}
              className="px-3 py-1 bg-white text-gray-800 rounded-full text-xs font-semibold shadow-sm"
            >
              {a.ability.name}
            </span>
          ))}
        </div>

        <Link
          to="/"
          className="block text-center mt-6 btn-primary"
        >
          Tillbaka
        </Link>
      </div>
    </div>
  );
}