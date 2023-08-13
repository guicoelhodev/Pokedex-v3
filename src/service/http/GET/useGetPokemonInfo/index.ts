import { useQuery } from "react-query";
import { IResponsePokemonInfo } from "./types";
import api from "../../../api";

const fetchPokemonInfo = async (pokemonName: string) => {
  try {
    const response = await api.get(`/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error("Error to load single pokemon info");
  }
};

export const useGetPokemonInfo = (pokemonName: string) => {
  return useQuery<IResponsePokemonInfo>(
    ["GET_pokemonInfo", pokemonName],
    async () => await fetchPokemonInfo(pokemonName)
  );
};
