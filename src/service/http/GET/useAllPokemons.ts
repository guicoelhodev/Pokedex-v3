import { useQuery } from "react-query";
import { IResponseAllPokemons, IResponseFormatted } from "./types";
import api from "../../api";

const getAllPokemons = async () => {
  const generations = Array.from({ length: 9 }, (_, index) => index + 1);
  let allPokemons: IResponseFormatted[] = [];

  try {
    for await (const generation of generations) {
      const response = await api.get<IResponseAllPokemons>(`/generation/${generation}`);

      allPokemons.push(...response.data.pokemon_species);
    }
    return allPokemons;
  } catch (error) {
    console.error("Error to load all pokemons by generation");
    return null;
  }
};

export const useAllPokemons = () => {
  return useQuery<IResponseFormatted[] | null>(["GET_allPokemons"], getAllPokemons, {
    refetchOnWindowFocus: false,
    staleTime: 60 * 5 // 5 minutes
  });
};
