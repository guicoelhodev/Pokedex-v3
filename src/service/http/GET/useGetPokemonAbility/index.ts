import axios from "axios";
import { useQuery } from "react-query";
import { IResponseAbility } from "./types";

const getAllAbilities = async (abilitiesUrl: string[] | null) => {
  if (!abilitiesUrl) return null;

  let abilities: IResponseAbility[] = [];

  try {
    for await (const abilityUrl of abilitiesUrl) {
      const response = await axios.get<IResponseAbility>(abilityUrl);

      abilities.push(response.data);
    }
    return abilities;
  } catch (error) {
    return null;
  }
};
export const useGetPokemonAbility = (abilitiesUrl: string[] | null) => {
  return useQuery<IResponseAbility[] | null>(
    ["GET_pokemonAbility", abilitiesUrl],
    async () => getAllAbilities(abilitiesUrl),
    {
      staleTime: 0,
      refetchOnWindowFocus: false
    }
  );
};
