/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
import axios from "axios";
import { Item } from "framer-motion/types/components/Reorder/Item";
import { createContext, useState, useEffect, ReactElement } from "react";
import api from "../service/api";

export const PokemonContext = createContext<any>(null);

interface Props {
  children: ReactElement;
}
interface DataType {
  name: string;
  id: number;
  image: string;
  height: number;
  weight: number;
  stats: Array<{ name: string; stats: string }>;
  types: Array<string>;
  effect: Array<{ name: string; effect: string; short_effect: string }>;
}

export function PokemonData({ children }: Props) {
  const [name, setName] = useState<any>("");
  const [info, setInfo] = useState<any>({ name: "", id: null });
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function getDataP() {
      api.get(`/pokemon/${name}`).then((res) => {
        setInfo({ name: res.data.name, id: res.data.id });
        setPokemonData(res.data);
      });
    }
    if (name.length != 0) {
      getDataP();
    }
  }, [name]);

  return (
    <PokemonContext.Provider value={{ setName, info, name }}>{children}</PokemonContext.Provider>
  );
}
