/* eslint-disable prefer-const */
import axios from "axios";
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
  effect: string;
  short_effect: string;
  height: string;
  width: string;
  types: Array<string>;
  status: Array<string>;
  abilities: Array<string>;
}

export function PokemonData({ children }: Props) {
  const [name, setName] = useState("");
  const [id, setId] = useState();

  const [pokemonData, setPokemonData] = useState({
    name: "",
    id: 0
  });

  async function getPokemon() {
    await api.get(`pokemon/${name}`).then((res) => setId(res.data.id));
  }

  useEffect(() => {
    console.log(name);
    if (name.length != 0) {
      getPokemon();
    }

    console.log(id);
  }, [name]);

  function getAllData() {
    api.get(`pokemon/${id}`).then((res) => {
      //console.log(res.data);
      let dataApi = res.data;
      console.log(dataApi);
      setPokemonData({
        name: dataApi.name,
        id: dataApi.id
      });
    });
  }

  useEffect(() => {
    getAllData();
  }, [id]);

  return (
    <PokemonContext.Provider value={{ pokemonData, setName, name }}>
      {children}
    </PokemonContext.Provider>
  );
}
