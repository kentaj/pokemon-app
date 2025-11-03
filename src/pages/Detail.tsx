import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  fetchPokemonDetail,
  type PokemonDetail,
} from "../api/poke";
import Spinner from "../components/Spinner";
import ErrorBox from "../components/ErrorBox";

export default function DetailPage() {
  const { name } = useParams<{ name: string }>();

  const { data, isLoading, isError } = useQuery<PokemonDetail>({
    queryKey: ["pokemon", name],
    queryFn: () => fetchPokemonDetail(name!),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Spinner />;
  if (isError || !data) return <ErrorBox message="Kunde inte ladda Pokémon." />;

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="relative p-4 bg-[var(--color-brand-50)] rounded-xl shadow-md hover:scale-105 transform transition">
        <img
          src={data.sprites.front_default}
          alt={data.name}
          className="w-32 h-32 mb-4"
        />
        <h1 className="text-3xl font-bold capitalize mb-2 text-[var(--color-brand-700)]">{data.name}</h1>

        <div className="flex gap-2 flex-wrap justify-center mb-4">
          {data.types.map((t) => (
            <span
              key={t.type.name}
              className="px-2 py-1 bg-[var(--color-brand-100)] text-[var(--color-brand-700)] rounded-full text-sm capitalize"
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-[var(--color-brand-100)] rounded-lg shadow-md w-full max-w-md text-[var(--color-black)]">
        <p><strong>Height:</strong> {data.height}</p>
        <p><strong>Weight:</strong> {data.weight}</p>
        <p><strong>Abilities:</strong> {data.abilities.map(a => a.ability.name).join(', ')}</p>
      </div>

      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-[var(--color-brand-500)] text-white rounded-lg hover:bg-[var(--color-brand-600)] transition"
      >
        ← Tillbaka till listan
      </Link>
    </div>
  );
}
