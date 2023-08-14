import { useQuery } from "react-query";
import api from "../../../api";
import { IResponse } from "./types";

interface IParams {
  limit: number;
  offSet: number;
}

const fetchPokedexContent = async ({ limit, offSet }: IParams) => {
  try {
    const response = await api.get(`pokemon?limit=${limit}&offset=${offSet}`);
    return response.data;
  } catch (error) {
    console.log("Fetch pokedex content error");
    return null;
  }
};
export const useGetPokedex = (params: IParams) => {
  return useQuery<IResponse | null>(["GET_pokedexContent", params], async () =>
    fetchPokedexContent(params)
  );
};
